import './App.css'
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { AppRoutes } from './router'; // Importe o componente de rotas aqui

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
