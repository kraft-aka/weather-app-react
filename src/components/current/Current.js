//import { useNavigate } from "react-router-dom";
// provides current weather data

const Current = (props) => {

  //const navigate = useNavigate();
  return (
    <div className="current">
      {props.data ? (
        <>
          <div className="current-location">
            <h3 className="current-city">
              {props.data.name} {props.data.sys.country}
            </h3>
          </div>
          <div className="current-temp">
            <h1>{props.data.main.temp.toFixed()}°C </h1>
            <img
              src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
            />
          </div>
          <div className="current-description">
            <p>{props.data.weather[0].main}</p>
          </div>
          <div className="current-bottom">
            <div className="feels">
              <p>feels like</p>
              <p>{props.data.main.feels_like.toFixed()}°C</p>
            </div>
            <div className="wind">
              <p>wind speed</p>
              <p>{props.data.wind.speed} kM/H</p>
            </div>
            <div className="humidity">
              <p>humidity</p>
              <p>{props.data.main.humidity} %</p>
            </div>
          </div>
        </>
      ) : null}
        {/* <button onClick={()=> navigate('/hourly', { replace: true })}>Hourly</button> */}
    </div>
  );
};

export default Current;
