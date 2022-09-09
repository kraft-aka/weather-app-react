import React, { useState } from "react";
import axios from "axios";
//import Hourly from "./components/Hourly";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const API_KEY = "fb804751dcaaf6b0ad41f3ea9c65892e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const getCity = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    } 
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <div className="app-search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={getCity}
          placeholder="Enter your city"
        />
        {city && (
          <button className="app-btn" onClick={refreshPage}>
            Refresh
          </button>
        )}
      </div>

      <div className="app-container">
        <main>
          {typeof data.main != "undefined" ? (
            <div>
              <div className="location">
                <p>
                  {data.name} {data.sys.country}
                </p>
              </div>
              <div className="temperature">
                <h1>{data.main.temp.toFixed()}°C </h1>
                <img src ={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
              </div>
              <div className="description">
                <p>{data.weather[0].main}</p>
              </div>
              <div className="bottom">
                <div className="feels">
                  <p>feels like</p>
                  <p>{data.main.feels_like.toFixed()}°C</p>
                </div>
                <div className="wind">
                  <p>wind speed</p>
                  <p>{data.wind.speed} MPH</p>
                </div>
                <div className="humidity">
                  <p>humidity</p>
                  <p>{data.main.humidity} %</p>
                </div>
              </div>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default App;
