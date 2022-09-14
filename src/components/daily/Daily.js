import { WEEK_DAYS } from "../../api";
import "./Daily.css";

const Daily = ({ forecastData }) => {
  //create date and get a day
  const weekDay = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(weekDay, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, weekDay)
  );

  return (
    <div
      className="daily-weather"
    >
      {forecastData &&  <h2 id="daily-title">5-day forecast</h2>}
      <section>
        {forecastData ? (
          <>
            {forecastData.list.splice(0, 5).map((item, index) => (
              <div
                className="daily-data"
                key={index}
              
              >
                <div className="daily-data--items">
                  <h4 className="day">{forecastDays[index]}</h4>
                  <p key={index} className="daily-description">
                    {item.weather[0].main}
                  </p>
                  <h3 id="daily-temp">{item.main.temp.toFixed()}°C</h3>
                  <img
                    src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                </div>
              </div>
            ))}
          </>
        ) : null}
      </section>
    </div>
  );
};

export default Daily;
