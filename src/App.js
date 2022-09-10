import React, { useState } from "react";
import Hourly from "./components/hourly/Hourly";
import Current from "./components/current/Current";
import { API_KEY, API_URL } from "./api";

function App() {
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("");

  // openweatherapi endpoints
  const currentUrl = `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const forecastUrl = `${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  // const getCity = (e) => {
  //   if (e.key === "Enter") {
  //     axios.get(url).then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     });
  //   }
  // };

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
          <button className="app-btn" onClick={refreshPage}>
            Refresh
          </button>
        )}
      </div>
      <Current data={data} />
      {forecastData && <Hourly forecastData={forecastData} />}
    </div>
  );
}

export default App;
