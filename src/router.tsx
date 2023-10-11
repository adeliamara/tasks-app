import { TasksPage } from './pages/TasksPage';
import { TaskDetailsPage } from './pages/TaskDetailsPage';
import { LoginPage } from './pages/LoginPage';
import { TaskFormPage } from './pages/TasKFormPage';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import App from './App';
import { NotFoundPage } from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  children: 
  [
    {
      path: '/tasks',
      element: <TasksPage />,
      children: [
        {
          path: ':id',
          element: <TaskDetailsPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/createTask',
      element: <TaskFormPage />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
  ]
  
},
]);


export { router };
