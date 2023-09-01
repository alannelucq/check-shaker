import CheckListHandler from "./check-list.handler";
import { CheckList } from "@core/models/check-list";
import { InMemoryCheckListGateway } from "../adapters/in-memory/check-list.gateway";

describe('Check list uses cases', () => {

    it('should fetches a check list', done => {
        const checkListHandler = createCheckListHandler({id: "id-check-list", name: "Check-list", tasks: []});
        checkListHandler.retrieve("id").subscribe(checklist => {
            expect(checklist).toEqual({id: "id-check-list", name: "Check-list", tasks: []});
            done();
        });
    });

    it('should add task', done => {
        const checkListHandler = createCheckListHandler({id: "id-check-list", name: "Check-list", tasks: []})
        checkListHandler.addTask("id-check-list", "My new task").subscribe();
        checkListHandler.retrieve("id-check-list").subscribe(checklist => {
            expect(checklist).toEqual({
                id: "id-check-list",
                name: "Check-list",
                tasks: [{id: "id-My new task", name: "My new task", complete: false}]
            });
            done();
        });
    });
})

function createCheckListHandler(checkList: CheckList): CheckListHandler {
    const source = new InMemoryCheckListGateway(checkList);
    return new CheckListHandler(source);
}
