import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <h1>Tasks App Web</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/createTask">NovaTask</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div id="detail">
        <Outlet />
        </div>
    </div>
  );
}

export default App;
