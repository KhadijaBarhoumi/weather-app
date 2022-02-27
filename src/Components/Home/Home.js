import React, { useState } from "react";
import "./Home.css";

const Home = ({location,current,forecast}) => {
    const [tab, setTab ]= useState([{"e":"j"},{"e":"j"},{"e":"j"}]);
    //setTab (forecast.forecastday)
    console.log(forecast);
    

  return (
    <div>
      <div
        ng-app="weatherApp"
        ng-controller="forecastController"
        className="component--weatherBox"
      >
        <div className="panel">
          <div className="weather-data">
            <h1>{location.name}</h1>
            <small>
            
            <h4>{location.region}</h4> 
            <h3>{location.country}</h3>
            <h4>{location.tz_id}</h4>
            </small>
          </div>
          <div className="currentTemp">
          
          <img src= {current.condition&&current.condition.icon} alt=""/>
          {current.temp_c}°
            <h4>{current.condition&&current.condition.text}</h4>
           Humidity:{current.humidity}
            <i className="wi wi-degrees" />
             
          </div>
          <h1 style={{color:"#000"}}>{location.localtime}</h1>
        </div>
        <div  className="component--weatherBox-row">
        <div
          ng-repeat="daily in dailyForecast track by $index"
          className="content"
        >
          <div className="component--weatherBox-heading">
           <h3>{forecast[0]&&forecast[0].date}</h3>
          </div>
          <div className="component--weatherBox-info">
          <img src= {forecast[0]&&forecast[0].day&&forecast[0].day.condition&&forecast[0].day.condition.icon} alt=""/><br/>
          <h5>{forecast[0]&&forecast[0].day&&forecast[0].day.condition&&forecast[0].day.condition.text}</h5>
          
            
            <h5>Sunrise:{forecast[0]&&forecast[0].astro&&forecast[0].astro.sunrise} / Sunset:{forecast[0]&&forecast[0].astro&&forecast[0]&&forecast[0].astro.sunset} / Moonrise:{forecast[0]&&forecast[0].astro&&forecast[0].astro.moonrise} / Moonset:{forecast[0]&&forecast[0].astro&&forecast[0].astro.moonset}</h5>
            
            
              
           
          </div>
        </div>
      </div>
       
        
      </div>
    </div>
  );
};

export default Home;
