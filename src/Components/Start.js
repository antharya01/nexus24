import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';
import Timer from './Timer.js';

const Start = () => {
  const targetDate = '2024-12-01T00:00:00'; // Set your target date here

  return (
    <div className="start">
       <div className="clock-container">
        <h1>Game starts in:</h1>
        <Timer date={targetDate} /> {/* Pass the target date to Timer */}
      </div>
      <Link to="/Quiz" className="start-button">
        Start
      </Link>
    </div>
  );
};

export default Start;
