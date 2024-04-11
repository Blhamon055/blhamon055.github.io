import "./App.css";
import ButtonLink from './AdminLoginComponent/adminbutton';
import Icons from './IconsComponent/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to our webserver!</h1>
        <h3>First, log in and then you'll be taken to a page where you can play the games we've created!</h3>
      <ButtonLink to="/adminlogin">Admin Login!</ButtonLink>
      <ButtonLink to="/userlogin">User Login!</ButtonLink>
      </header>
    </div>
  );
}


export default App;