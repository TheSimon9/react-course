import SoftwareDeveloper from "./components/SoftwareDeveloper";
import Weather from "./components/Weather";
import {getWeather} from "./utilities/weather";
import {useEffect, useState} from "react";


function App() {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather("Bergamo")
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      });
  }, [])


  return (
    <div className="App">
      <SoftwareDeveloper
        name={"Christian"}
        surname={"De Simone"}
        role={"Software Engineer"}/>

      {weatherData &&
      <Weather isSun={weatherData.current.condition.text === "Sunny"}
               icon={weatherData.current.condition.icon}
               city={weatherData.location.name}
               country={weatherData.location.region}
               temperature={weatherData.current.temp_c}/>
      }
    </div>
  );
}

export default App;
