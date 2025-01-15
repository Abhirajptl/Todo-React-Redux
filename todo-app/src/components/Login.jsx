import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="login-container">
      <h2>Welcome to the To-Do App</h2>
      <p><strong>Demo Credentials:</strong></p>
      <p>Username: <code>admin</code></p>
      <p>Password: <code>password</code></p>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username (e.g., admin)"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password (e.g., password)"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;