import "./App.css";
import AdminButtonLink from './AdminLoginComponent/adminbuttonlink';
import UserButtonLink from "./UserLoginComponent/userbuttonlink";
import Icons from './IconsComponent/icons';

function App() {
  return (
    <div className="App">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      </head>
      <header className="App-header">
        <h1>Welcome to our webserver!</h1>
        <h3>First, log in and then you'll be taken to a page where you can play the games we've created!</h3>
        <UserButtonLink to="/userlogin" class="btn-primary"></UserButtonLink>
        <AdminButtonLink to="/adminlogin" class="btn-secondary"></AdminButtonLink>
      </header>
    </div>
  );
}


export default App;