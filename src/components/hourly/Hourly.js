const Hourly = (props) => {
  return (
    <div className="hourly-weather">
      <div>
        {props.forecastData ? (
          <>
            <p>{props.forecastData.list[0].main.temp.toFixed()}°C</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Hourly;
