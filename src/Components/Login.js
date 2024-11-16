import './Login.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Start from './Start.js';

const Login = () => {
  return(

    <div className='log'>
     <button><Link to="/Start">start the game</Link></button>
    </div>
  
  );
};

export default Login;
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
function GoogleLogin() {
  const [user, setUser] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/user', { withCredentials: true })
      .then(response => {
        if (response.data) setUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching user:", error);
      });
  }, []);

  const handleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  const handleLogout = () => {
    axios.get('http://localhost:5000/logout', { withCredentials: true })
      .then(() => setUser(null))
      .catch(error => console.error("Error logging out:", error));
  };

  return (
    <div className="log">
      <h2>Google Login</h2>
      {user ? (
        <div className="user-info">
          <p>Welcome, {user.displayName}!</p>
          <img src={user.photos[0].value} alt="User avatar" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default GoogleLogin;
*/