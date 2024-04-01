import logo from "./logo.svg";
import "./App.css";
import PrecipGameLink from './games/precipitation_game/precipGameLink';
import AdminLoginForm from "./AdminLoginComponent/adminloginformtest";
import userlogin from "./UserLoginComponent/userlogin";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Jack Kelley is super duper punny!</p>
        <p>Click the link below to play my Godot game:</p>
        <AdminLoginForm />
      <PrecipGameLink />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
