import React from 'react';
import image from '../images/home1.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div 
      className="container my-5"
      style={{
        backgroundColor: '#f7f9fc', 
        padding: '40px', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <div className="row align-items-center">
        <div className="col-md-6 d-flex flex-column justify-content-between" style={{ height: '100%' }}>
         
          <div>
            <h1 
              className="display-4 text-dark mb-4"
              style={{ fontWeight: 'bold', color: '#343a40', textAlign:'center' ,fontStyle: 'oblique' ,fontFamily: "'Playwrite AU SA', sans-serif"}} 
            >
              <h1 style={{ fontSize: '3rem', marginBottom: '10px'}}>
                Welcome To
              </h1>
              <h2 style={{ fontSize: '2rem', marginTop: '0'}}>
                Task After Task
              </h2>
            </h1>
          </div>

          
          <div className="d-flex justify-content-center gap-3 mt-5">
            <Link to="/Text">
              <button 
                className="btn btn-lg w-100"
                style={{ 
                  transition: 'transform 0.3s ease', 
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              >
                Add Tasks
              </button>
            </Link>

            <Link to="/TaskCards"> 
              <button 
                className="btn btn-secondary btn-lg w-100"
                style={{ 
                  transition: 'transform 0.3s ease', 
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              >
                 Task Cards
              </button>
            </Link>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <img 
            src={image} 
            alt="Home Image" 
            className="img-fluid rounded shadow-lg w-100"
            style={{ 
              objectFit: 'cover', 
              borderRadius: '100px',
              transition: 'transform 0.3s ease', 
            }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </div>
  );
}
