import React, {useState} from "react";
import './App.css';
import Clock from './components/Clock';
import ClockFunctional from "./components/ClockFunctional";

function App() {
    const [clockOn, setClockOn] = useState(true)
    const toggleClockOn = () => {
        setClockOn(!clockOn)
    }

    const toggleButton = <button
        style={{padding: "10px"}}
        onClick={toggleClockOn}>
        {clockOn ?
            "Nascondi"
            : "Mostra"}
    </button>;

    return (
        <div className="App">
            <header className="App-header">
                {toggleButton}
                {clockOn && <Clock/>}
                <ClockFunctional/>
            </header>
        </div>
    );
}

export default App;
