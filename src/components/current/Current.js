//import { useNavigate } from "react-router-dom";
import { TiLocation } from 'react-icons/ti'
import "./Current.css";

// provides current weather data

const Current = (props) => {
  //const navigate = useNavigate();
  return (
    <div className="current">
      { props.data && <h4 id="current-title">Today</h4>}
      {props.data ? (
        <>
          <div className="current-location">
            <h2 className="current-city">
              <TiLocation /> {props.data.name} {props.data.sys.country}
            </h2>
          </div>
          <div className="current-weather">
            <div className="current-temp">
              <h1>{props.data.main.temp.toFixed()}°C </h1>
              <p id="current-description">{props.data.weather[0].main}</p>
              <div id="current-img">
                <img
                  src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
                   id='weather-icon'/>
              </div>
            </div>
          </div>
          <div className="current-bottom">
            <div className="feels">
              <p>feels like</p>
              <p className="bottom-desc">
                {props.data.main.feels_like.toFixed()}°C
              </p>
            </div>
            <div className="wind">
              <p>wind speed</p>
              <p className="bottom-desc">{props.data.wind.speed} kM/H</p>
            </div>
            <div className="humidity">
              <p>humidity</p>
              <p className="bottom-desc">{props.data.main.humidity} %</p>
            </div>
          </div>
        </>
      ) : null}
      {/* <button onClick={()=> navigate('/hourly', { replace: true })}>Hourly</button> */}
    </div>
  );
};

export default Current;
