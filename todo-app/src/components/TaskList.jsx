import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, loadTasksFromStorage } from '../actions/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksFromStorage());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span>{task.task}</span>
            <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
            <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;