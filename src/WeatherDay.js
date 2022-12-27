import React from "react";

export default function WeatherDay(props){
    function maxTemperature() {
        let temperature = Math.round(props.date.temperature.maximum);
        return `${temperature} °`
    }
    function minTemperature() {
        let temperature = Math.round(props.date.temperature.minimum);
        return `${temperature}`
    }
    function day (){
        let date = new Date(props.date.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days [day];
    }
    return (
        <div>
         <div className="WeatherForecast-day">{day()}</div>
                <img src={props.date.condition.icon_url}
                    alt={props.date.description}
                 />
                 <div className="WeatherForecast-temp">
                    <span div className="WeatherForecast-temp-max">{maxTemperature()}</span>
                    <span div className="WeatherForecast-temp-min">{minTemperature()}°</span>
                    </div>
                    </div>
    )
   
}