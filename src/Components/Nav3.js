import React, { useState } from 'react';
import './Navigation.css'; // Adjust the path as necessary
import { Link,useNavigate } from 'react-router-dom';
const Nav3 = () => {
  // Define state
  const [isOpen, setIsOpen] = useState(false);
    
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Perform any logout logic here (e.g., clearing tokens, user data)
      navigate("/Home"); // Redirect to home or login page after logout
    }
  };

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav">NEXUS VERSE</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/Leaderboard">LEADERBOARD</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default Nav3;


