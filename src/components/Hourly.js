import React, {useState} from 'react';
import axios from 'axios';

function Hourly(props) {

  const [data, setData] = useState({});

  const API_KEY = "fb804751dcaaf6b0ad41f3ea9c65892e";
  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${props.city}&appid=${API_KEY}&units=metric`;
  
  //https://pro.openweathermap.org/data/2.5/forecast/hourly?q=osh&appid=e475fe94bde112acbe7a4e669245cbc5&units=metric

  const getHourlyWeather = () => {

    axios.get(url).then((response)=> {
      console.log(response.data);
      setData(response.data);
    });
  }

  return(
    <div className='hourly-weather'>
      <div className='hourly-temp'>
        <button onClick={getHourlyWeather}>Hourly</button>
        <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  )
}

export default Hourly;