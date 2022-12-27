import React, {useState} from "react";
import WeatherDay from "./WeatherDay";
import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast(props) {
    
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
   function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}
    
    if(loaded) {
     
    return (
         <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index){
                if(index < 6){
                return (
               <div className="col" key={index}>
               <WeatherDay date= {dailyForecast}/>
            </div>
                )
                } 

            })}
            
        </div>
    </div>
    );
    } else {
    let apiKey = "419o08ac38bf746063afa9768a40f1tc";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
      
    return null;
}
   }