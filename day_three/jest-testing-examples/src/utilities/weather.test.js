import {getWeather} from "./weather";

global.fetch = jest.fn(() => {});

describe("Weather tests", function(){
  const OLD_ENV = process.env;
  const ENVIRONMENT_API_KEY = "ENVIRONMENT_API_KEY";

  beforeEach(() => {
    jest.resetModules()
    process.env.REACT_APP_WEATHER_API_KEY = ENVIRONMENT_API_KEY;
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });


  test("should use the given key", function(){
    const fakeApiKey = "FAKE_API_KEY";
    const fakeCity = "fake city";

    fetch.mockImplementationOnce(() => Promise.resolve({ fakeResponse: true }));
    getWeather(fakeCity, fakeApiKey)
    expect(fetch).toHaveBeenCalledWith(`http://api.weatherapi.com/v1/current.json?key=${fakeApiKey}&q=q=${fakeCity}`, {mode: "cors"})
  })


  test("should use environment key if no fake key given", function(){
    const fakeCity = "fake city";

    fetch.mockImplementationOnce(() => Promise.resolve({ fakeResponse: true }));
    getWeather(fakeCity)
    expect(fetch).toHaveBeenCalledWith(`http://api.weatherapi.com/v1/current.json?key=${ENVIRONMENT_API_KEY}&q=q=${fakeCity}`, {mode: "cors"})
  })
})