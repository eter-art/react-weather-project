import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App"> 
    <div className="container">
     <Weather/>
    <footer>
   <a href="https://github.com/eter-art/react-weather-project"   target="_blank" rel="noreferrer">   Open source code   </a>  
by Eter Artmeladze
    </footer>
    </div>
    </div>
  );
}


