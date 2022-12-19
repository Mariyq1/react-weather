import React,{useState} from "react";
import FormatedDate from "./FormatedDate";
import "./Weather.css";
import axios from "axios";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            city: response.data.city,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
            humidity: response.data.temperature.humidity,
            date: new Date (response.data.time *1000)

        });
       
    }
    if(weatherData.ready){
        return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type a city"
                className="form-control"
                autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search"
                className="btn btn-light"/>
                </div>
                </div>
            </form>
            
            <h1>{weatherData.city}</h1>
             <ul>
                <li><FormatedDate date={weatherData.date}/></li>
                <li className="text-capitalize">{weatherData.description} </li>
            </ul>
            <div className="row">
                <div className="col-6">
            <span className="temperature">{Math.round(weatherData.temperature)}</span> 
                   <span className="units">°C</span>
            <img src={weatherData.icon}
                    alt={weatherData.description}
                    className="pb-5"/>
           </div>
           <div className="col-6 p-3">
                 <ul className="p-2">
                        <li>🌬︎Wind: {weatherData.wind} m/s</li>
                        <li>💧 Humidity: {weatherData.humidity}%</li>
                    </ul>
                    </div>
            </div>
          
                   
        </div>
    );
    } else {
    let apiKey="419o08ac38bf746063afa9768a40f1tc";
    let url= `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return (<h1>Loading</h1>)
    }
    
    
}