import './App.css';
import ExampleUseEffectWithClass from "./classComponents/ExampleUseEffectWithClass";
import ExampleUseState from "./components/ExampleUseState";
import ExampleUseEffect from "./components/ExampleUseEffect";
import ExampleUseStateWithClass from "./classComponents/ExampleUseStateWithClass";
import ExampleCustomHooks from "./components/ExampleCustomHooks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/*<ExampleUseState />*/}
          {/*<ExampleUseStateWithClass />*/}
          {/*<ExampleUseEffect />*/}
          {/*<ExampleUseEffectWithClass />*/}
          <ExampleCustomHooks />
      </header>
    </div>
  );
}

export default App;
