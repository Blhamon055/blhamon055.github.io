// AdminLoginForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send login data to a server
    navigate("/gameselection")
  };

  return (
    <div className="loginwrapper">
    <form onSubmit={handleSubmit} className="adminform">
        <h3 className="inputwrapper">Admin Login</h3>
        <div className="inputwrapper">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="inputwrapper">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='inputwrapper'>
      <button className="submitbutton" type="submit">Login</button>
      </div>
    </form>
    </div>
  );
};

export default AdminLoginForm;