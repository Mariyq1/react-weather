import React,{useState} from "react";
import WeatherForecast from "./WeatherForecast"
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            city: response.data.city,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
            humidity: response.data.temperature.humidity,
            date: new Date (response.data.time *1000)

        });
       
    }
    function search(){
    let apiKey="419o08ac38bf746063afa9768a40f1tc";
    let url= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    }
    function handleSubmit(event){
        event.preventDefault();
        search();

    }

    function handleCityChange(event){
    setCity(event.target.value);
    }

    if(weatherData.ready){
        return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search"
                className="btn btn-light"/>
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast data={weatherData} coordinates={weatherData.coordinates}/>
                   
        </div>
    );
    } else {
    search();
    return (<h1>Loading</h1>)
    }
    
    
}