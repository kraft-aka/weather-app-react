import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hourly from "./components/hourly/Hourly";
import Current from "./components/current/Current";
import Daily from "./components/daily/Daily";
import Footer from "./components/footer/Footer";
import { HiSearchCircle } from "react-icons/hi";
import { API_KEY, API_URL } from "./api";
import "./Style.css";

function App() {
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [showHourly, setShowHourly] = useState(false);
  const [showDaily, setShowDaily] = useState(false);
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // openweatherapi endpoints
  const currentUrl = `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const forecastUrl = `${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  // fetches data from openweather api
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setError(false);
      setLoading(true);
      const getCurrent = fetch(currentUrl);
      const getForecast = fetch(forecastUrl);

      Promise.all([getCurrent, getForecast])
        .then(async (response) => {
          const currentWeatherResp = await response[0].json();
          const forecastWeatherResp = await response[1].json();

          // check if given city found in api, if not error message will be thrown
          if (currentWeatherResp.message === "city not found") {
            throw Error("error occured!");
          }
          setData(currentWeatherResp);
          setForecastData(forecastWeatherResp);
          setCity("");
        })
        .catch((error) => setError(error.message));
    }
    setLoading(false);
  };

  // handle click event for hourly data
  const handleClick = (e) => {
    e.preventDefault();
    setShowHourly((showHourly) => !showHourly);
  };

  // handle click event for daily data
  const handleClickDaily = (e) => {
    e.preventDefault();
    setShowDaily((showDaily) => !showDaily);
  };

  // refreshes the page
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <Router>
      <div className="app">
        <div className="app-search">
          <HiSearchCircle
            style={{ position: "absolute", top: "32%", left: "10px" }}
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleSearch}
            placeholder="Enter your city"
          />

          {error && (
            <div>
              <p id="app-error-message">some error occured</p>
            </div>
          )}
          {loading && (
            <div>
              <p>loading...</p>
            </div>
          )}
        </div>
        <Switch>
          <Route
            path="/hourly"
            element={<Hourly forecastData={forecastData} />}
          />
        </Switch>
        <Current data={data} />
        {showHourly && <Hourly forecastData={forecastData} />}
        {showDaily && <Daily forecastData={forecastData} />}
        <div className="app-btn-container">
          {data && (
            <>
              <button className="app-btn" onClick={refreshPage}>
                Refresh
              </button>
              <button
                onClick={handleClickDaily}
                className="app-btn-expand"
                type="button"
              >
                {!showDaily ? "Get Daily forecast" : "Back"}
              </button>
              <Link to="/hourly">
                <button type="button" onClick={handleClick}>
                  {!showHourly ? "Get Hourly forecast" : "Back"}
                </button>
              </Link>
            </>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
