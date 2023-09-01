import { Task } from "@core/models/task";
import { CheckList } from "@core/models/check-list";

export class CheckListBuilder {
    protected id: string;
    protected name: string;
    protected tasks: Task[] = [];


    withId(value: string) {
        this.id = value;
        return this;
    }

    withName(value: string) {
        this.name = value;
        return this;
    }

    withTasks(value: Task[]) {
        this.tasks = value;
        return this;
    }

    withoutTask() {
        this.tasks = [];
        return this;
    }

    build(): CheckList {
        return {
            id: this.id,
            name: this.name,
            tasks: this.tasks
        }
    }
}
