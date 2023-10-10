import {useReducer } from 'react';
import { TaskForm } from "../TasksPage/components/TaskForm";
import { ActionType, TaskReducer } from "../../reducers/TasksReducer";
import { Task } from '../TasksPage';
import { ulid } from 'ulidx';

export function TaskFormPage() {
    const [{ tasks }, dispatch] = useReducer(TaskReducer, { tasks: [] })

    const handleAddTask = (text: string) => {

      const task: Task = {
        id: ulid(),
        name: text,
        description: '...',
        created_at: new Date(),
        done: false
      };
  
      const init = {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json"
        }
      }
      fetch('http://localhost:3000/tasks', init)
        .then(response => {
          if (response.ok) {
            dispatch({ type: ActionType.ADDED, payload: { task } })
          }
        })
  
    }
    return (
      <div>
        <h2>Create Task</h2>
        <TaskForm onAdd={handleAddTask} />
      </div>
    );
  }
