import React from 'react';
import { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherContent from './WeatherContent';

function App() {

  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState({
    main: {
      temp: ''
    },
    weather: []
  });

  return (
    <React.Fragment>
      <div className={ 
          weatherData.main.temp < 15 
          ? 'container cold text-white font-serif	font-family: Cambria'
          : 'container text-white font-serif	font-family: Cambria'
        }>
        <WeatherForm city={cityName} setCity={setCityName} setWeather={setWeatherData}/>
        <WeatherContent city={cityName} weatherInfo={weatherData}/>  
      </div>  
    </React.Fragment>
  );
}

export default App;