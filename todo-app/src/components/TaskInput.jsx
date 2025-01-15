import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ task, priority }));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;