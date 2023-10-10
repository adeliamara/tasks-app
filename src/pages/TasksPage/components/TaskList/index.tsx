import { useContext } from "react"
import { Task } from "../.."
import { TaskListItem } from "../TaskListItem"
import { TasksContext } from "../../../../providers/TasksContext"


const TaskList = () => {
  const tasks = useContext(TasksContext) ;

  console.log('Lista renderizada!')

  return (
    <> 
      <h3>{tasks && tasks.length} Tarefas cadastradas</h3>
      <ul>
        {tasks && tasks.map(task => <TaskListItem key={task.id} task={task} />)}
      </ul>
    </>
  )
}

export { TaskList }
