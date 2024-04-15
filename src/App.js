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
        <h3 style={{paddingBottom: '20px', maxWidth: "400px"}}>Log in to access games or Admin resources</h3>
        <UserButtonLink to="/userlogin" class="btn-primary"></UserButtonLink>
        <AdminButtonLink to="/adminlogin" class="btn-secondary"></AdminButtonLink>
      </header>
    </div>
  );
}


export default App;