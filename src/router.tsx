import { useRoutes } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage'
import { HomePage } from './pages/HomePage'
import { TaskDetailsPage } from './pages/TaskDetailsPage'
import { LoginPage } from './pages/LoginPage'
import { TaskFormPage } from './pages/TasKFormPage'


export const AppRoutes = () => {

  const element = useRoutes([
      { path: "/", element: <HomePage/> },
      { path: "/tasks",
      element: <TasksPage/>,
      children: [
        { path: ":id", element: <TaskDetailsPage/>},
      ]
    },
    { path: "login", element: <LoginPage/>},
    { path: "createTask", element: <TaskFormPage/>}

  ])
  return element;
}