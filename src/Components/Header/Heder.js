import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Body.css";

const Heder = ({handleSubmit}) => {
    const [search, setSearch] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        handleSubmit(search)

    }
  return (
    <div>
      <ul className="grid-container">
        <li className="grid-item">
          <div className="card card-night">
            <div className="night" />
          </div>
        </li>
        <li className="grid-item">
          <div className="card card-rain">
            <div className="rain" />
          </div>
        </li>
        <li className="grid-item">
          <div className="card card-snow">
            <div className="snow" />
          </div>
        </li>
        <li className="grid-item">
          <div className="card card-storm">
            <div className="storm" />
          </div>
        </li>
        <li className="grid-item">
          <div className="card card-sunny">
            <div className="sunny" />
          </div>
        </li>
      </ul>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        
        
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <h4 className="link" >  <Link to="/" >Today</Link> </h4>
            <h4 className="link"> <Link to="/hourly">hourly</Link></h4>
            <h4 className="link"><Link to="/forcastday">forecastday</Link></h4>
            
            
            
          <form className="form-inline my-2 my-lg-0" onSubmit={submit} style={{textAlign: "left"}}>
            <input style={{textAlign: "left"}}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
             onChange={(e)=>setSearch(e.target.value)}
            />
            <button style={{textAlign: "left"}}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <h2 style={{textAlign: "center"}}>Weather Service</h2>
      </nav>
    </div>
  );
};

export default Heder;
