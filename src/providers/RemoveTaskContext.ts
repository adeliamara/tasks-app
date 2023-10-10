import { Task } from "../pages/TasksPage";
import { createContext } from "react";

export const RemoveTaskContext = createContext<(task: Task) => void>(() => { });
