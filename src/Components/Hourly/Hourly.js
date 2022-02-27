import React from "react";
import "./Hourly.css"
const Hourly = ({hourly}) => {
  return (
    <div>
    {(hourly.map((el,i)=><div key={i} className="container">
    <div className="background">
      <div className="Circle1" />
      <div className="Circle2" />
      <div className="Circle3" />
      <div className="content">
        <h1 className="Condition">
          
          <img src={hourly[i].condition&&hourly[i].condition.icon} alt=""/> {hourly[i].condition&&hourly[i].condition.text}
        </h1>
        <h1 className="Temp">
        {hourly[i].temp_c}<span id="F">°</span>
        </h1>
        <h1 className="Time">{hourly[i].time.slice(11,17)}</h1>
        <h1 className="Location">
           {hourly[i].time.slice(0,10)}
        </h1>
      </div>
    </div>
  </div>))}
      
    </div>
  );
};

export default Hourly;
