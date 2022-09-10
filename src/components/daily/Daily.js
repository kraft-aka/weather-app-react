import { WEEK_DAYS } from "../../api";

const Daily = ({ forecastData }) => {

  const weekDay = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(weekDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, weekDay));
  console.log(forecastDays)

  return (
    <div className="daily-weather">
      <section>
        {forecastData ? (
          <>
            {forecastData.list.splice(0, 5).map((item, index) => (
              <div className="hourly-data">
                <p key={index} className="hourly-description">
                  {item.weather[0].main}
                </p>
                <h3 id="hourly-temp">{item.main.temp.toFixed()}°C</h3>
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt="weather icon"
                />
                {/* <p>{format(new Date(item.dt_txt), "MMMM do, yyyy H:mma")}</p> */}
              </div>
            ))}
          </>
        ) : null}
      </section>
    </div>
    );
}
 
export default Daily;