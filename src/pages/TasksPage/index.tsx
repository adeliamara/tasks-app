import { useReducer } from 'react'
import { ActionType, TaskReducer } from '../../reducers/TasksReducer'
import { ulid } from 'ulidx'
import { TaskForm } from './components/TaskForm'
import { TasksContext } from '../../providers/TasksContext'
import { TaskList } from './components/TaskList'

export interface Task {
  id: string
  name: string
  description?: string
  done: boolean
  created_at: Date
}

const taskInicial: Task = {
  
    id: ulid(),
    name: 'Minha primeira',
    description: '...',
    created_at: new Date(),
    done: false

}
export function TasksPage() {
  const [{ tasks }, dispatchTasks] = useReducer(TaskReducer, { tasks: [taskInicial] })


  const handleAddTask = (text: string) => {

    const task: Task = {
      id: ulid(),
      name: text,
      description: '...',
      created_at: new Date(),
      done: false
    };


    dispatchTasks({ type: ActionType.ADDED, payload: { task } })

    }


  const handleRemoveTask = ({ id }: Task) => {
    dispatchTasks({ type: ActionType.REMOVED, payload: { id } })
  }

  const handleSaveTask = (task: Task) => {
    dispatchTasks({ type: ActionType.UPDATED, payload: { task } })
  }

  console.log('Page renderizada!')

  return (
    <>
      <TaskForm onAdd={handleAddTask} />
      <TasksContext.Provider value={tasks}>
      <TaskList tasks={tasks} onSave={handleSaveTask} onRemove={handleRemoveTask} />
      </TasksContext.Provider>

    </>
  )
}