import { TaskListItem } from "../TaskListItem"
import { Task } from "../.."

interface TaskListProps {
  tasks: Task[]
  onRemove: (task: Task) => void
  onSave: (task: Task) => void
}

const TaskList = ({ tasks, onRemove, onSave }: TaskListProps) => {

  console.log('Lista renderizada!')

  return (
    <> 
      <h3>{tasks && tasks.length} Tarefas cadastradas</h3>
      <ul>
      {tasks.map(task => <TaskListItem onRemove={onRemove} onSave={onSave} key={task.id} task={task} />)}
      </ul>
    </>
  )
}

export { TaskList }
