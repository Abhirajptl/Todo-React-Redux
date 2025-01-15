export const login = (username, password) => {
    return (dispatch) => {
      // Simulate authentication process
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('isAuthenticated', 'true');
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        alert('Invalid credentials!');
      }
    };
  };
  
  export const logout = () => {
    return (dispatch) => {
      localStorage.removeItem('isAuthenticated');
      dispatch({ type: 'LOGOUT' });
    };
  };