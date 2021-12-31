function WeatherContent(props) {

    let degrees = Math.round(props.weatherInfo?.main?.temp);
    let description = props.weatherInfo?.weather[0]?.description;
    let icon = props.weatherInfo?.weather[0]?.icon;

    if (degrees === 0){
        return '';
    }

    const generateDate = date => {

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[date.getDay()]; // Returns day of the week (Sunday...) as int
        let dayNum = date.getDate(); // Returns day of the month (December -- 25 --) as int
        let month = months[date.getMonth()]; // Returns number between 0 and the length of arr "months"
        let year = date.getFullYear(); // Returns actual year
    
        return `${day}, ${month} ${dayNum}, ${year}`;
    };

    return (
        <div className="content-box p-14">
            <p className="location-name text-2xl font-medium m-4"> {props.city.toUpperCase()} </p>
            <p className="date text-2xl font-normal font-style: italic"> {generateDate(new Date())}</p>

            <div className="weather">
                <h1 className="degrees font-mono: Menlo m-5"> {degrees}°C </h1>
                <div className="description">
                    <p className="desc text-lg font-semibold"> {description.toUpperCase()} </p>
                    <img src={`${process.env.REACT_APP_API_DOMAIN}/img/w/${icon}.png`} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default WeatherContent
