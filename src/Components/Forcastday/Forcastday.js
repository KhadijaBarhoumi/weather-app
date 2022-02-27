import React from "react";
import "./Forcastday";

const Forcastday = ({ forecast }) => {
  console.log(forecast);
  return (
    <div>
    {(forecast.map((el, i)=><div key={i} className="container">
    <div   className="background">
    <div className="Circle1" />
    <div className="Circle2" />
    <div className="Circle3" />
    <div className="content">
      <h1 className="Condition">
        
      <img src= {forecast[i].day&&forecast[i].day.condition&&forecast[i].day.condition.icon} alt="" /> {forecast[i].day&&forecast[i].day.condition&&forecast[i].day.condition.text}
      </h1>
      <h1 className="Temp">
      {forecast[i].day&&forecast[i].day.maxtemp_c}°<span id="F">°</span>
      </h1>
      <h1 className="Time">{forecast[i].date}</h1>
      <h1 className="Location">
        
      </h1>
    </div>
  </div>
  </div>
    ))}
    </div>
  );
};

export default Forcastday;
/*{(forecast.map((el, i)=><div key={i} id="weather_wrapper">
    <div className="weatherCard">
      <div className="currentTemp">
        <span className="temp">{forecast[i].day&&forecast[i].day.maxtemp_c}°</span>
        <span className="location">{forecast[i].date}</span>
      </div>
      <div className="currentWeather">
        <span className="conditions"><img src= {forecast[i].day&&forecast[i].day.condition&&forecast[i].day.condition.icon} alt="" style={{width:"150px"}}/></span>
        <div className="info">
        {forecast[i].day&&forecast[i].day.condition&&forecast[i].day.condition.text}
        </div>
      </div>
    </div>
  </div>))}
      */
