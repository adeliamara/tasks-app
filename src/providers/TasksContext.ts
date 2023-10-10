import { Task } from "../pages/TasksPage";
import { Dispatch, createContext } from "react";
import { Action } from "../reducers/TasksReducer";


export const TasksContext = createContext< Task[] | null >(null);
export const TaskDispachContext = createContext<Dispatch<Action> | null>(null)


