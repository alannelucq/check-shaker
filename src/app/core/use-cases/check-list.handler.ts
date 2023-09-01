import { CheckListGateway } from "../ports/check-list.gateway";
import { Observable } from "rxjs";
import { CheckList } from "../models/check-list.model";

export class CheckListHandler {
    constructor(private source: CheckListGateway) { }

    retrieve(id: string): Observable<CheckList>   {
        return this.source.retrieve(id);
    }
}
