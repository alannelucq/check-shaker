import { Observable } from "rxjs";
import { CheckList } from "@core/models/check-list";

export interface CheckListGateway {
  retrieve(id: string): Observable<CheckList>;
}
