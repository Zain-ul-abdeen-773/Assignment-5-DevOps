import React, { useState, useEffect } from 'react';
import './App.css';

const API = `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/tasks`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchTasks = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });
    setTitle('');
    setDescription('');
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await fetch(`${API}/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed })
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>Task Manager (UI Update)</h1>

      <div className="form">
        <input
          placeholder="Task title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Description (optional)"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className={task.completed ? 'completed' : ''}>
            <div className="task-info">
              <strong>{task.title}</strong>
              {task.description && <p>{task.description}</p>}
            </div>
            <div className="task-actions">
              <button onClick={() => toggleTask(task)}>
                {task.completed ? 'Undo' : 'Done'}
              </button>
              <button className="delete" onClick={() => deleteTask(task._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;