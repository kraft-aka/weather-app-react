import { format } from "date-fns/esm";
import "./Hourly.css";

// provides hourly weather data every 3 hours
const Hourly = ({ forecastData }) => {
  return (
    <div className="hourly-weather">
      <main>
        {forecastData ? (
          <>
            {forecastData.list.splice(0, 10).map((item, index) => (
              <div
                className="hourly-data"
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                }}
              >
                <p>{format(new Date(item.dt_txt), "MMMM do, yyyy H:mma")}</p>
                <p key={index} className="hourly-description">
                  {item.weather[0].main}
                </p>
                <h3 id="hourly-temp">{item.main.temp.toFixed()}°C</h3>
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt="weather icon"
                />
              </div>
            ))}
          </>
        ) : null}
      </main>
      <div></div>
    </div>
  );
};

export default Hourly;
