// const axios = require('axios');
import { domain,key } from '../utils/api';

function WeatherForm(props) {

  const handleChange = e => {
    props.setCity(e.target.value);
  }

  const getWeather = async e => {
    if (e.key === "Enter"){
      const response = await fetch(`${domain}weather?q=${props.city}&appid=${key}&units=metric`)
      const data = await response.json();
      props.setWeather(data);
    }
  };

  return (
    <div className="weather-form">

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col items-center justify-center gap-3 m-10">
        
        <label className="text-base"> Tell us your city name </label>
        <input
          type="text"
          name="city"
          value={props.city}
          onChange={handleChange}
          onKeyPress={getWeather}
          placeholder="Santo Domingo"
          className="text-black border-solid border-2 p-2"
        />
      </form>

    </div>
  );
}

export default WeatherForm;
