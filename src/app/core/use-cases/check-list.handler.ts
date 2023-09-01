import { Observable } from "rxjs";
import { CheckListGateway } from "@core/ports/check-list.gateway";
import { CheckList } from "@core/models/check-list";

export class CheckListHandler {
    constructor(private source: CheckListGateway) { }

    retrieve(id: string): Observable<CheckList>   {
        return this.source.retrieve(id);
    }
}
