import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'; 

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg"  style={{
      backgroundColor: '#f8f9fa', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100">
           
            <li className="nav-item  ">
              <Link className="nav-link active " aria-current="page" to={'/'} style={{
      backgroundColor: '#f7f9fc',  
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    }}
    onMouseEnter={e => {
      e.target.style.backgroundColor = '#66ff66';  // اللون الأخضر الأغمق عند التمرير
      e.target.style.transform = 'scale(1.05)';  // تأثير التحجيم عند التمرير
    }}
    onMouseLeave={e => {
      e.target.style.backgroundColor = '#f7f9fc';  // العودة للون الأصلي
      e.target.style.transform = 'scale(1)';  // العودة للحجم الأصلي
    }}>Home</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to={'/TaskCards'}  style={{
      backgroundColor: ' #6c757d',  
      color: 'white',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    }}
    onMouseEnter={e => {
      e.target.style.backgroundColor = ' #66ff66';  // اللون الأخضر الأغمق عند التمرير
      e.target.style.transform = 'scale(1.05)';  // تأثير التحجيم عند التمرير
    }}
    onMouseLeave={e => {
      e.target.style.backgroundColor = '  #6c757d';  // العودة للون الأصلي
      e.target.style.transform = 'scale(1)';  // العودة للحجم الأصلي
    }}>Task Cards</Link>
            </li>

            
            <li className="nav-item ms-auto">
              <Link className="nav-link active" to={'/Text'}>
                <button 
                  className="btn  d-flex align-items-center" 
                  style={{
                    backgroundColor: '#FF6F61', 
                    color: 'white', 
                    padding: '10px 15px', 
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.target.style.backgroundColor = '#66ff66';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.backgroundColor = '#FF6F61';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <FaPlus style={{ marginRight: '8px' }} /> 
                  Add Task
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
