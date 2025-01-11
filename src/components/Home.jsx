import React from 'react';
import image from '../images/home.jpg';
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

        <div className="col-md-6">
          <h1 
            className="display-4 text-dark mb-4"
            style={{ fontWeight: 'bold', color: '#343a40' }} 
          >
            Welcome to the Home Page
          </h1>
          <div className="d-flex justify-content-start gap-3 mt-3">

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
                Go to Add Tasks
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
                Go to Task Cards
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
              borderRadius: '10px',
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
