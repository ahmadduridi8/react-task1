import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

export default function TaskOverview() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const allTasks = tasks;
  const completedTasks = tasks.filter(task => task.completed);
  const activeTasks = tasks.filter(task => !task.completed);

  return (
    <div 
      style={{
        background: 'linear-gradient(to right, #d0e4ff, #c1e2d4)',  
        minHeight: '100vh', 
        padding: '50px 0',
      }}
    >
      <div className="container my-5">
        <div className="row justify-content-center">
         
          <div className="col-md-4 mb-4">
            <div 
              className="card shadow-lg p-3 rounded"
              style={{
                backgroundColor: 'rgb(230, 244, 188)', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                color: '#343a40',  
                fontSize: '18px', 
              }}
            >
              <div className="card-body">
                <h4 className="card-title text-muted" style={{ fontSize: '22px', fontWeight: 'bold' }}>
                  All Tasks
                </h4>
                <p className="card-text text-muted"style={{ fontSize: '17px', fontWeight: 'bold' }}>Total: {allTasks.length}</p>
                <ul className="list-unstyled">
                  {allTasks.map(task => (
                    <li key={task.id} className="my-2">{task.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div 
              className="card shadow-lg p-3 rounded"
              style={{
                backgroundColor: '#d4edda', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                color: '#155724', 
                fontSize: '18px', 
              }}
            >
              <div className="card-body">
                <h4 className="card-title text-success" style={{ fontSize: '22px', fontWeight: 'bold' }}>
                  Completed Tasks
                </h4>
                <p className="card-text text-muted"style={{ fontSize: '17px', fontWeight: 'bold' }}>Total: {completedTasks.length}</p>
                <ul className="list-unstyled">
                  {completedTasks.map(task => (
                    <li key={task.id} className="my-2">{task.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div 
              className="card shadow-lg p-3 rounded"
              style={{
                backgroundColor: '#f8d7da', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                color: '#721c24', 
                fontSize: '18px',  
              }}
            >
              <div className="card-body">
                <h4 className="card-title text-danger" style={{ fontSize: '22px', fontWeight: 'bold' }}>
                  Active Tasks
                </h4>
                <p className="card-text text-muted"style={{ fontSize: '17px', fontWeight: 'bold' }}>Total: {activeTasks.length}</p>
                <ul className="list-unstyled">
                  {activeTasks.map(task => (
                    <li key={task.id} className="my-2">{task.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
