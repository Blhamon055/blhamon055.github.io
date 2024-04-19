
import React, { useState } from 'react';
import "./userlogin.css"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/gameselection") // would do auth here
  };

  return (
    <div className='loginwrapper'>
    <form onSubmit={handleSubmit} className="userform">
    <h3 className="inputwrapper">User Login</h3>
      <div className="inputwrapper">
        <label htmlFor="username">Username:</label>
        <input className="text-box-input" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="inputwrapper">
        <label htmlFor="password">Password:</label>
        <input className="text-box-input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="inputwrapper">
      <button className='submitbutton' type="submit">Login</button>
      </div>
    </form> 
    </div>
  );
};

export default LoginPage;
