const Hourly = ({ forecastData }) => {
  return (
    <div className="hourly-weather">
      <section>
        {forecastData ? (
          <>
            {forecastData.list.splice(0, 7).map((item, index) => (
              <div className="hourly-data">
                <p key={index} className="hourly-description">{item.weather[0].description}</p>
                <h3 id="hourly-temp">{item.main.temp.toFixed()}°C</h3>
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt="weather icon"
                />
                <p>{item.dt_txt}</p>
              </div>
            ))}
          </>
        ) : null}
      </section>
    </div>
  );
};

export default Hourly;
