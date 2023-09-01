import { Observable } from "rxjs";
import { CheckList } from "@core/models/check-list";
import { Task } from "@core/models/task";

export interface CheckListGateway {
    retrieve(id: string): Observable<CheckList>;

    addTask(idCheckList: string, task: string): Observable<Task>;
}
