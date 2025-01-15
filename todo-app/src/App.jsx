import { useSelector, useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Login from './components/Login';
import { logout } from './actions/authActions';
import './App.css';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="app-container">
      <h1>Advanced To-Do Application</h1>
      {isAuthenticated ? (
        <>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;