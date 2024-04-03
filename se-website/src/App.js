import logo from "./logo.svg";
import "./App.css";
import PrecipGameLink from './games/precipitation_game/precipGameLink';
import ButtonLink from './AdminLoginComponent/adminbutton'
import AdminLoginForm from "./AdminLoginComponent/adminloginformtest";
import userlogin from "./UserLoginComponent/userlogin";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonLink to="/adminlogin">Admin Login!</ButtonLink>
      </header>
    </div>
  );
}

export default App;
