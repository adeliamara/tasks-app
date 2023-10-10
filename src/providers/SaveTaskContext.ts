import { Task } from "../pages/TasksPage";
import { createContext } from "react";

export const SaveTaskContext = createContext<(task: Task) => void>(() => { });
