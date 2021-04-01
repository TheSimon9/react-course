import logo from './logo.svg';
import './App.css';
import Location from "./components/Location";

function SoftwareDeveloper(props){



  return <div>
    <h1>{props.name}</h1>
    <h2>{props.role}</h2>
    <p>{props.bio}</p>
    <Location />
  </div>
}

function App() {
  return (
    <div className="App">
      <SoftwareDeveloper name={"Christian"} role={"Software Engineer"} bio={"Hi There"}/>
      <SoftwareDeveloper name={"Manuel"} role={"Software Engineer"} bio={"Ciao sono Manuel!"}/>
    </div>
  );
}

export default App;
