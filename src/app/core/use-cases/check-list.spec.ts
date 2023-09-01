import CheckListHandler from "./check-list.handler";
import { CheckList } from "@core/models/check-list";
import { InMemoryCheckListGateway } from "../adapters/in-memory/check-list.gateway";
import { StubCheckListBuilder } from "../use-cases/stubs/check-list-builder.stub";

describe('Check list uses cases', () => {

  let defaultCheckList: CheckList;
  beforeEach(() => defaultCheckList = new StubCheckListBuilder().build())

  it('should fetches a check list', done => {
    const checkListHandler = createCheckListHandler(defaultCheckList);
    const expectedCheckList = defaultCheckList;
    checkListHandler.retrieve(defaultCheckList.id).subscribe(checkList => {
      verifyCheckList(checkList, expectedCheckList);
      done();
    });
  });

  it('should add task', done => {
    const checkListHandler = createCheckListHandler(defaultCheckList)
    checkListHandler.addTask(defaultCheckList.id, "My new task").subscribe();
    const expectedCheckList = new StubCheckListBuilder()
      .withTasks([{id: "id-My new task", name: "My new task", complete: false}])
      .build();

    checkListHandler.retrieve(defaultCheckList.id).subscribe(checklist => {
      verifyCheckList(checklist, expectedCheckList);
      done();
    });
  });

  it('should remove task', done => {
    const checkList = new StubCheckListBuilder()
      .withTasks([{id: 'id-task', name: 'task', complete: false}])
      .build();
    const checkListHandler = createCheckListHandler(checkList);
    checkListHandler.removeTask('id-task').subscribe();
    checkListHandler.retrieve(checkList.id).subscribe(checklist => {
      verifyCheckList(checklist, new StubCheckListBuilder().withoutTask().build());
      done();
    });
  });

  it('should rename check-list', done => {
    const checkListHandler = createCheckListHandler(defaultCheckList);
    checkListHandler.rename(defaultCheckList.id, 'Renamed check-list').subscribe();
    checkListHandler.retrieve(defaultCheckList.id).subscribe(checklist => {
      verifyCheckList(checklist, new StubCheckListBuilder().withName('Renamed check-list').build());
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

