import React from "react";
import Home from "../Home/Home";
import "./main.css"

    
const Main = ({location,current,forecast}) => {
  return (
    <div>
      <main className="main">
        <div>
         
          <div>
            <div className="column1">
              <img
                src="https://us.123rf.com/450wm/macrovector/macrovector1404/macrovector140400192/27147499-%E5%A4%A9%E6%B0%97%E4%BA%88%E5%A0%B1%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88-%E3%82%A4%E3%83%B3%E3%83%95%E3%82%A9-%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF-%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9-%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%9B%B3%E3%81%AE%E8%A8%AD%E5%AE%9A.jpg?ver=6"
                style={{ width: "100%",height:" 620px" }}
              />
            </div>
            <div className="column">
            <Home location={location} current={current} forecast={forecast}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
