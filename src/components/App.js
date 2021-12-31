import React from "react";
import { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherContent from "./WeatherContent";

function App() {

  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({
    main: {
      temp: "",
    },
    weather: [{
      "description": "",
      "icon": ""
    }],
  });
  
  const changeTheme = (temp) => {
    
    const warmBg = "container text-white font-sans: Segoe UI ";
    const coldBg = "container cold text-white font-sans: Segoe UI";
    const cloudyBg = "container cloudy text-white font-sans: Segoe UI";

    if (temp <= 0.9) {
      return coldBg;
    }
    if (temp < 32) {
      return cloudyBg;
    }
    return warmBg;
  };

  return (
    <div className={changeTheme(weatherData.main.temp)}>
      <WeatherForm
        city={cityName}
        setCity={setCityName}
        weatherInfo={weatherData}
        setWeather={setWeatherData}
      />
      <WeatherContent city={cityName} weatherInfo={weatherData} />
    </div>
  );
}

export default App;
