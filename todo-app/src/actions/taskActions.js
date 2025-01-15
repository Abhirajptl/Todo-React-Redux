export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const deleteTask = (index) => ({
    type: 'DELETE_TASK',
    payload: index,
  });
  
  export const loadTasksFromStorage = () => {
    return (dispatch) => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      dispatch({
        type: 'LOAD_TASKS',
        payload: tasks,
      });
    };
  };