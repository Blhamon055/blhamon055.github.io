import logo from "./logo.svg";
import "./App.css";
import precipGameLink from '.\games\precipitation_game\Precipitation Minigame.html'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Jack Kelley is super duper awesome!</p>
        <p>Click the link below to play my Godot game:</p>
      <GodotGameLink />
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
