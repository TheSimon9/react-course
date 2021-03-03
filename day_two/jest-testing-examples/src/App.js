import SoftwareDeveloper from "./components/SoftwareDeveloper";
import {hireSoftwareEngineer} from "./utilities/utilities";

function App() {
  return (
    <div className="App">
      <SoftwareDeveloper
        name={"Christian"}
        surname={"De Simone"}
        role={"Software Engineer"}/>
    </div>
  );
}

export default App;
