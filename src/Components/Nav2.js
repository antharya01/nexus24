import React, { useState } from 'react';
import './Navigation.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Nav2 = () => {
  // Define state
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav">RADIO NITROZ</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a><Link to="/">Home</Link></a></li>
        <li><a><Link to="/rules">Rules</Link></a></li>
        <li><a><Link to="/login">login</Link></a></li>
      </ul>
    </div>
  );
};

export default Nav2;
