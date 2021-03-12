import React, {useState} from "react";
import './App.css';
import Clock from './components/Clock';
import ClockFunctional from "./components/ClockFunctional";

function App() {
    const [mostraOrologio, setMostraOrologio] = useState(true)
    const aggiornaMostraOrologio = () => {
        setMostraOrologio(!mostraOrologio)
    }

    const toggleButton = <button
        style={{padding: "10px"}}
        onClick={aggiornaMostraOrologio}>
        {mostraOrologio ?
            "Nascondi orologio"
            : "Mostra orologio"}
    </button>;

    return (
        <div className="App">
            <header className="App-header">
                {toggleButton}
                {mostraOrologio && <Clock/>}
                <ClockFunctional />
            </header>
        </div>
    );
}

export default App;
