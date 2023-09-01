import { Observable } from "rxjs";
import { CheckListGateway } from "@core/ports/check-list.gateway";
import { CheckList } from "@core/models/check-list";

export default class CheckListHandler {
    constructor(private source: CheckListGateway) { }

    retrieve(id: string): Observable<CheckList>   {
        return this.source.retrieve(id);
    }

    addTask(checkListId: string, task: string) {
        return this.source.addTask(checkListId, task);
    }

    removeTask(taskId: string) {
        return this.source.removeTask(taskId);
    }

    rename(checkListId: string, name: string) {
        return this.source.rename(checkListId, name);
    }
}
