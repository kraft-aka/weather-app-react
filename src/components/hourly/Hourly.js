import { format } from "date-fns/esm";

// provides hourly weather data every 3 hours
const Hourly = ({ forecastData }) => {
  return (
    <div className="hourly-weather">
      <section>
        {forecastData ? (
          <>
            {forecastData.list.splice(0, 10).map((item, index) => (
              <div className="hourly-data">
                <p key={index} className="hourly-description">
                  {item.weather[0].main}
                </p>
                <h3 id="hourly-temp">{item.main.temp.toFixed()}°C</h3>
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt="weather icon"
                />
                <p>{format(new Date(item.dt_txt), "MMMM do, yyyy H:mma")}</p>
              </div>
            ))}
          </>
        ) : null}
      </section>
    </div>
  );
};

export default Hourly;
