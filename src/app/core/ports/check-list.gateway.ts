import { Observable } from "rxjs";
import { CheckList } from "../models/check-list.model";

export interface CheckListGateway {
  retrieve(id: string): Observable<CheckList>;
}
