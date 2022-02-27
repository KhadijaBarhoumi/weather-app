
import './App.css';
import Heder from './Components/Header/Heder';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Hourly from "./Components/Hourly/Hourly"
import { Route, Routes } from 'react-router-dom';
import Forcastday from './Components/Forcastday/Forcastday';


function App() {
  const [location, setLocation] = useState([]);
  const [current, setCurrent ]= useState([]);
  const [forecast, setForecast ]= useState([]);
  const [hourly, setHourly ]= useState([]);
  const [loading, setLoading] = useState(false);

const [query, setQuery] = useState("Paris")

  const getWeather = async () => {
    setLoading(true)
    setLoading(true);
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=09047bcf8b8545acaed203509220802&q=${query}&days=10&aqi=no&alerts=no`)
      
      console.log(response.data);
      setLocation(response.data.location);
      setCurrent(response.data.current)
      setForecast(response.data.forecast.forecastday)
      setHourly(response.data.forecast.forecastday[0].hour)
      
      setLoading(false)
    } catch (error) {
      console.dir(error);
    }
  }
  const handleSubmit=(inputt)=>{
    setQuery(inputt)
  }
    useEffect(() => {
      getWeather()
      return () => {
      };
    }, [query]);
  return (
    <div >
    <Routes>
      <Route path="/" element={loading? <h1>Loading...</h1>:<div><Heder handleSubmit={handleSubmit}/><Main location={location} current={current} forecast={forecast}/> </div>}/>
      <Route path="/hourly" element={<div><Heder handleSubmit={handleSubmit}/><Hourly hourly={hourly}/><Footer/></div>}/>
      <Route path="/forcastday" element={<div><Heder handleSubmit={handleSubmit}/><Forcastday forecast={forecast}/><Footer/></div>}/>
    </Routes>
    </div>
  );
}

export default App;
