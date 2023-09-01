import { CheckListGateway } from "../../ports/check-list.gateway";
import { Observable, of } from "rxjs";
import { CheckList } from "../../models/check-list.model";

export class InMemoryCheckListGateway implements CheckListGateway {
    retrieve(id: string): Observable<CheckList> {
      return of({ id: "id", name: "Check-list"});
    }
}
