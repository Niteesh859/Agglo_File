import React, { useState } from 'react';
import Forms from './forms.jsx';  // Import Forms component
import Recomend from './recomend.jsx';  // Import Recomend component
import './Dropdown.css';  // Optional: for styling

const Dropdown = () => {
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [isRecomendOpen, setIsRecomendOpen] = useState(false);

  // Toggle Functions for Forms and Recomend
  const toggleFormsDropdown = () => {
    setIsFormsOpen(prevState => !prevState);
  };

  const toggleRecomendDropdown = () => {
    setIsRecomendOpen(prevState => !prevState);
  };

  return (
    <div className="material">
      <div className="dropdown-container">
        {/* Dropdown for Forms */}
        <div className="dropdown-item">
          <button className="dropdown-btn" onClick={toggleFormsDropdown}>
            <span>Forms</span>
            <span className="dropdown-arrow">{isFormsOpen ? '▲' : '▼'}</span>
          </button>
          {isFormsOpen && (
            <div className="dropdown-content">
              <Forms /> {/* Show Forms component if isFormsOpen is true */}
            </div>
          )}
        </div>

        {/* Dropdown for Recomend */}
        <div className="dropdown-item">
          <button className="dropdown-btn" onClick={toggleRecomendDropdown}>
            <span>Recommendation</span>
            <span className="dropdown-arrow">{isRecomendOpen ? '▲' : '▼'}</span>
          </button>
          {isRecomendOpen && (
            <div className="dropdown-content">
              <Recomend /> {/* Show Recomend component if isRecomendOpen is true */}
            </div>
          )}
        </div>
      </div>

      {/* Text container on the right side with animation */}
      <div className="dropdown-text-container">

        {/* Add the Sketchfab embed here */}
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Eye cross-section"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/181bf8e16a8c4ff9bfb6af07ea6c7ff4/embed?ui_theme=dark"
          ></iframe>
          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
              href="https://sketchfab.com/3d-models/eye-cross-section-181bf8e16a8c4ff9bfb6af07ea6c7ff4?utm_medium=embed&utm_campaign=share-popup&utm_content=181bf8e16a8c4ff9bfb6af07ea6c7ff4"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Eye cross-section
            </a>{' '}
            by{' '}
            <a
              href="https://sketchfab.com/Ebers?utm_medium=embed&utm_campaign=share-popup&utm_content=181bf8e16a8c4ff9bfb6af07ea6c7ff4"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Ebers
            </a>{' '}
            on{' '}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=181bf8e16a8c4ff9bfb6af07ea6c7ff4"
              target="_blank"
              rel="nofollow"
              style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Sketchfab
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
