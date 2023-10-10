import { useEffect, useReducer } from 'react'
import { ActionType, TaskReducer } from '../../reducers/TasksReducer'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { TasksContext } from '../../providers/TasksContext'
import { RemoveTaskContext } from '../../providers/RemoveTaskContext'
import { SaveTaskContext } from '../../providers/SaveTaskContext'
import { ulid } from 'ulidx'

export interface Task {
  id: string
  name: string
  description?: string
  done: boolean
  created_at: Date
}


export function TasksPage() {
  const [{ tasks }, dispatch] = useReducer(TaskReducer, { tasks: [] })

  
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ActionType.LOADED, payload: { tasks: data } })
      })
  }, [])


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

  const handleRemoveTask = ({ id }: Task) => {
    dispatch({ type: ActionType.REMOVED, payload: { id } })
  }

  const handleSaveTask = (task: Task) => {
    dispatch({ type: ActionType.UPDATED, payload: { task } })
  }

  console.log('Page renderizada!')

  return (
    <>
      <TaskForm onAdd={handleAddTask} />
      <TasksContext.Provider value={tasks}>
        <RemoveTaskContext.Provider value={handleRemoveTask}>
          <SaveTaskContext.Provider value={handleSaveTask}>
            <TaskList />
          </SaveTaskContext.Provider>
        </RemoveTaskContext.Provider>

      </TasksContext.Provider>

    </>
  )
}