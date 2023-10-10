import './App.css'
import { TasksPage } from './pages/TasksPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { HomePage } from './pages/HomePage'
import { TaskDetailsPage } from './pages/TaskDetailsPage'
import { LoginPage } from './pages/LoginPage'
import { TaskFormPage } from './pages/TasKFormPage'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
        <BrowserRouter>
        <header>
          <h1>Tasks App Web</h1>
          <nav>
            <ul>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'tasks'}>Tasks</NavLink>
              </li>
              <li>
                <NavLink to={'login'}>Login</NavLink>
              </li>
              <li>
                <NavLink to={'createTask'}>NovaTask</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='tasks' >
            <Route index element={<TasksPage />} />
            <Route path=':id' element={<TaskDetailsPage />} />
          </Route>
          <Route path='login' element={<LoginPage />} />
          <Route path='createTask' element={<TaskFormPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
