import { CheckListHandler } from "./check-list.handler";
import { InMemoryCheckListGateway } from "../adapters/in-memory/check-list.gateway";

describe('Check list uses cases', () => {
  it('should fetches a check list', done => {
    const source = new InMemoryCheckListGateway();
    const checkListHandler = new CheckListHandler(source);
    checkListHandler.retrieve("id").subscribe(checklist => {
      expect(checklist).toEqual({ id: "id", name: "Check-list"});
      done();
    });
  })
})
