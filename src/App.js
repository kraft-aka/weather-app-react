import React, { useState } from "react";
import axios from "axios";
import Hourly from "./components/Hourly";

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
        <div className="top-section">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()} C</p> : null}
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed} MPH</p> : null}
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity} %</p> : null}
            </div>
          </div>
          {city && <Hourly 
            data={data}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
