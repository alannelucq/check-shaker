import CheckListHandler from "./check-list.handler";
import { CheckList } from "@core/models/check-list";
import { InMemoryCheckListGateway } from "../adapters/in-memory/check-list.gateway";
import { StubCheckListBuilder } from "../use-cases/stubs/check-list-builder.stub";

describe('Check list uses cases', () => {

  let checklist: CheckList;
  beforeEach(() => checklist = new StubCheckListBuilder().build())

  it('should fetches a check list', done => {
    const checkListHandler = createCheckListHandler(checklist);
    const expectedCheckList = checklist;
    checkListHandler.retrieve(checklist.id).subscribe(retrievedChecklist => {
      verifyCheckList(retrievedChecklist, expectedCheckList);
      done();
    });
  });

  it('should add task', done => {
    const checkListHandler = createCheckListHandler(checklist)
    checkListHandler.addTask(checklist.id, "My new task").subscribe();
    const expectedCheckList = new StubCheckListBuilder()
      .withTasks([{id: "id-My new task", name: "My new task", complete: false}])
      .build();

    checkListHandler.retrieve(checklist.id).subscribe(checklist => {
      verifyCheckList(checklist, expectedCheckList);
      done();
    });
  });
})

function createCheckListHandler(checkList: CheckList): CheckListHandler {
  const source = new InMemoryCheckListGateway(checkList);
  return new CheckListHandler(source);
}

function verifyCheckList(checkList: CheckList, expectedCheckList: CheckList) {
  expect(checkList.id).toBe(expectedCheckList.id);
  expect(checkList.name).toBe(expectedCheckList.name);
  expect(checkList.tasks.length).toBe(expectedCheckList.tasks.length);
  checkList.tasks.forEach((task, index) => {
    expect(task.name).toBe(expectedCheckList.tasks[index].name);
    expect(task.complete).toBe(expectedCheckList.tasks[index].complete);
  });
}

