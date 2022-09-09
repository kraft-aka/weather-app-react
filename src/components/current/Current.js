const Current = (props) => {

  return (
    <div>
      {props.data ? <><div className="location">
        <p>
          {props.data.name} {props.data.sys.country}
        </p>
      </div>
      <div className="temperature">
        <h1>{props.data.main.temp.toFixed()}°C </h1>
        <img
          src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
        />
      </div>
      <div className="description">
        <p>{props.data.weather[0].main}</p>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>feels like</p>
          <p>{props.data.main.feels_like.toFixed()}°C</p>
        </div>
        <div className="wind">
          <p>wind speed</p>
          <p>{props.data.wind.speed} MPH</p>
        </div>
        <div className="humidity">
          <p>humidity</p>
          <p>{props.data.main.humidity} %</p>
        </div>
      </div></> : null}
    </div>
  );
};

export default Current;
