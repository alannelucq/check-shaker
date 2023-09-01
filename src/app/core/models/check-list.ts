import { Task } from "./task";

export interface CheckList {
  id: string;
  name: string;
  tasks: Task[];
}
