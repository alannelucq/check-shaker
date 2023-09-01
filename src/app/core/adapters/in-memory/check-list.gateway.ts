import { Observable, of } from "rxjs";
import { Task } from "@core/models/task";
import { CheckList } from "@core/models/check-list";
import { CheckListGateway } from "@core/ports/check-list.gateway";

export class InMemoryCheckListGateway implements CheckListGateway {
    constructor(private checkList: CheckList) {
    }

    retrieve(id: string): Observable<CheckList> {
        return of(this.checkList);
    }

    addTask(idCheckList: string, task: string): Observable<Task> {
        const newTask = {id: `id-${task}`, name: task, complete: false};
        this.checkList.tasks.push(newTask);
        return of(newTask);
    }

    removeTask(taskId: string): Observable<void> {
        this.checkList.tasks = this.checkList.tasks.filter(task => task.id !== taskId);
        return of(void 0);
    }
}
