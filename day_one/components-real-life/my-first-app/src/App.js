import './App.css';
import SoftwareDeveloper from "./components/SoftwareDeveloper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SoftwareDeveloper
          name={"Christian"}
          surname={"De Simone"}
          role={"Software Engineer"}/>
      </header>
    </div>
  );
}

export default App;
