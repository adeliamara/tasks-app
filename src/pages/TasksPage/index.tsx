import { useReducer } from 'react'
import { ActionType, taskStateReducer } from '../../reducers/TasksReducer'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { TasksContext } from '../../providers/TasksContext'
import { RemoveTaskContext } from '../../providers/RemoveTaskContext'
import { SaveTaskContext } from '../../providers/SaveTaskContext'

export interface Task {
  id: string
  name: string
  description?: string
  done: boolean
  created_at: Date
}


export function TasksPage() {
  const [{ tasks }, dispatch] = useReducer(taskStateReducer, { tasks: [] })

  const handleAddTask = (text: string) => {
    dispatch({ type: ActionType.Added, payload: { text } })
  }

  const handleRemoveTask = ({ id }: Task) => {
    dispatch({ type: ActionType.Deleted, payload: { id } })
  }

  const handleSaveTask = (task: Task) => {
    dispatch({ type: ActionType.Changed, payload: { task } })
  }

  console.log('Page renderizada!')

  return (
    <>
      <TaskForm onAdd={handleAddTask} />
      <TasksContext.Provider value={tasks}>
        <RemoveTaskContext.Provider value={handleRemoveTask}>
        <SaveTaskContext.Provider value={handleSaveTask}>
          <TaskList/>
        </SaveTaskContext.Provider>
        </RemoveTaskContext.Provider>

      </TasksContext.Provider>

    </>
  )
}