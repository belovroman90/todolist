import { Todolist } from "features/todolists/api/todolistsApi.types";
import { RequestStatus } from "app/appSlice";

export type FilterValues = "all" | "active" | "completed"

export type DomainTodolist = Todolist & {
  filter: FilterValues
  entityStatus: RequestStatus
}