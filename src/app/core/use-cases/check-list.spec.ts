import { InMemoryCheckListGateway } from "@core/adapters/in-memory/check-list.gateway";
import { CheckListHandler } from "@core/use-cases/check-list.handler";

describe('Check list uses cases', () => {

    it('should fetches a check list', done => {
        const source = new InMemoryCheckListGateway({id: "id", name: "Check-list", tasks: []});
        const checkListHandler = new CheckListHandler(source);
        checkListHandler.retrieve("id").subscribe(checklist => {
            expect(checklist).toEqual({id: "id", name: "Check-list", tasks: []});
            done();
        });
    })
})
