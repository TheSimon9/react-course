export async function getWeather(city, key = "") {
  const api_key = key || process.env.REACT_APP_WEATHER_API_KEY;

  if(city === "")
    return Promise.fail();

  return fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=q=${city}`, {mode: 'cors'})
    .then((response) => response.json())
}