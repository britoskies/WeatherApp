import { domain,key } from '../utils/api';

function WeatherForm(props) {

  const handleChange = e => {
    props.setCity(e.target.value);
  }

  const getWeather = async e => {

    if (e.key === "Enter"){

      // Validation

      if (props.city === ""){
        alert("Please enter a city name");
        return;
      }

      const response = await fetch(`${domain}weather?q=${props.city}&appid=${key}&units=metric`);
      const apiData = await response.json();

      if (response.ok) {
        return props.setWeather(apiData); // returns success object
      }

      // Error Handling when input city isn't found

      const responseError = {
        type: 'Error',
        message: 'City not found!',
      };

      const error = new Error(responseError.message);

      return alert(error);
    };
  };

  return (
    <div className="weather-form">

      <form
        onSubmit={(e) => {e.preventDefault()}}
        className="flex flex-col items-center justify-center gap-3 m-10">
        
        <label className="text-4xl font-black m-10"> Weather Forecast </label>
        <input
          type="text"
          name="city"
          value={props.city}
          onChange={handleChange}
          onKeyPress={getWeather}
          placeholder="Enter your city name..."
          autoComplete='off'
          className="input text-black border-solid border-2 p-2 pl-4"
        />
      </form>

    </div>
  );
}

export default WeatherForm;
