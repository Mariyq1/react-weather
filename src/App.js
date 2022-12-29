import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className = "container">
        
        <Weather defaultCity="Montreal"/>
      <footer>
        It is open sourced on <a href="https://github.com/Mariyq1/react-weather"
        target="_blank" rel="noreferrer">GitHub</a>
        and {" "}
        <a href="https://statuesque-pastelito-c9e9b4.netlify.app/"
        target="_blank" rel="noreferrer">hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}


