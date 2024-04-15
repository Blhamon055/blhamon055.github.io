import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminLoginPage from './AdminLoginComponent/adminloginpage';
import Userlogin from './UserLoginComponent/userlogin';
import GameSelection from './TempGameSelection/gameselection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/adminlogin' element={<AdminLoginPage/>}></Route>
        <Route path='/userlogin' element={<Userlogin/>}></Route>
        <Route path='/gameselection' element={<GameSelection/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
