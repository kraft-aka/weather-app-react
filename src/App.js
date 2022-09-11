import React, { useEffect, useState } from "react";
import Hourly from "./components/hourly/Hourly";
import Current from "./components/current/Current";
import Daily from "./components/daily/Daily";
import Footer from "./components/footer/Footer";
import { API_KEY, API_URL } from "./api";

function App() {
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [showHourly, setShowHourly] = useState(false);
  const [showDaily, setShowDaily] = useState(false);
  const [city, setCity] = useState("");

  // openweatherapi endpoints
  const currentUrl = `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const forecastUrl = `${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  // fetches data from openweather api
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const getCurrent = fetch(currentUrl);
      const getForecast = fetch(forecastUrl);

      Promise.all([getCurrent, getForecast])
        .then(async (response) => {
          const currentWeatherResp = await response[0].json();
          const forecastWeatherResp = await response[1].json();

          setData(currentWeatherResp);
          setForecastData(forecastWeatherResp);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {}, [forecastData]);

  // handle click event for hourly data
  const handleClick = (e) => {
    e.preventDefault();
    setShowHourly(() => !showHourly);
  };

  // handle click event for daily data
  const handleClickDaily = (e) => {
    e.preventDefault();
    setShowDaily(() => !showDaily);
  };

  console.log(data);
  console.log(forecastData);

  // refreshes the page
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
          onKeyPress={handleSearch}
          placeholder="Enter your city"
        />
        {city && (
          <>
            <button className="app-btn" onClick={refreshPage}>
              Refresh
            </button>

            <div className="app-comp-btn">
              <button onClick={handleClick}>{ !showHourly ? 'Get Hourly forecast': 'Back'}</button>
              <button onClick={handleClickDaily}>{!showDaily ? 'Get Daily forecast': 'Back'}</button>
            </div>
          </>
        )}
      </div>
      <Current data={data} />
      {showHourly && <Hourly forecastData={forecastData} />}
      {showDaily && <Daily forecastData={forecastData} />}
      <Footer />
    </div>
  );
}

export default App;
