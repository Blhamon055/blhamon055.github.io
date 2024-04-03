
import React, { useState } from 'react';
import "./userlogin.css"
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="text-box">
        <label htmlFor="username">Username:</label>
        <input class="text-box-input" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="text-box">
        <label htmlFor="password">Password:</label>
        <input class="text-box-input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button class="submit-button" type="submit">Login</button>
    </form>  
  );
};

export default LoginPage;
