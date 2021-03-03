import React from "react";
import './App.css';
import Clock from './components/Clock';
import ClockFunctional from "./components/ClockFunctional";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <ClockFunctional />
      </header>
    </div>
  );
}

export default App;
