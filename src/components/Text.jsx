import React, { useState, useEffect } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
 
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'active') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div 
      className="todo-app"
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#ffffff', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '20px' }}>To-Do List</h1>
      
      <div className="task-input" style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a task..."
          style={{
            flex: '1',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
            fontSize: '16px',
          }}
        />
        <button 
          onClick={addTask}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => e.target.style.backgroundColor = '#0056b3'}
          onMouseLeave={e => e.target.style.backgroundColor = '#007bff'}
        >
          Add
        </button>
      </div>

      <div className="task-list" style={{ marginBottom: '20px', maxHeight: '400px', overflowY: 'auto' }}>
        {filteredTasks.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No tasks available</p>
        ) : (
          filteredTasks.map((task) => (
            <div key={task.id} 
              className="task" 
              style={{
                backgroundColor: task.completed ? '#d4edda' : '#f8d7da', 
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  style={{ marginRight: '10px' }}
                />
                <span style={{ 
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#28a745' : '#dc3545',
                }}>
                  {task.text}
                </span>
              </div>
              <button 
                onClick={() => deleteTask(task.id)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#dc3545',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <div className="filters" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button 
          onClick={() => setFilter('all')}
          style={{
            padding: '10px 15px',
            margin: '0 5px',
            backgroundColor: filter === 'all' ? '#007bff' : '#e9ecef',
            color: filter === 'all' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')}
          style={{
            padding: '10px 15px',
            margin: '0 5px',
            backgroundColor: filter === 'active' ? '#007bff' : '#e9ecef',
            color: filter === 'active' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('completed')}
          style={{
            padding: '10px 15px',
            margin: '0 5px',
            backgroundColor: filter === 'completed' ? '#007bff' : '#e9ecef',
            color: filter === 'completed' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
