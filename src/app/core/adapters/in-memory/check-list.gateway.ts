import { CheckListGateway } from "../../ports/check-list.gateway";
import { Observable, of } from "rxjs";
import { CheckList } from "../../models/check-list";

export class InMemoryCheckListGateway implements CheckListGateway {
    constructor(private checkList: CheckList) {
    }

    retrieve(id: string): Observable<CheckList> {
        return of(this.checkList);
    }
}
