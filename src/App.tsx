import { BrowserRouter as Router } from 'react-router-dom'; // Importe BrowserRouter em vez de Router
import './App.css'
import { AppRoutes } from './router';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Tasks App Web</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/tasks">Tasks</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/createTask">NovaTask</a>
              </li>
            </ul>
          </nav>
        </header>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
