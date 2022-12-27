import React, {useState, useEffect} from "react";
import WeatherDay from "./WeatherDay";
import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast(props) {
    
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);


   function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}
   function load(){
    let apiKey = "419o08ac38bf746063afa9768a40f1tc";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
   }
    
    if(loaded) {
     
    return (
         <div className="WeatherForecast">
        <div className="row mt-5">
            {forecast.map(function(dailyForecast, index){
                if(index < 5){
                return (
               <div className="col" key={index}>
               <WeatherDay date= {dailyForecast}/>
            </div>
                )
                } else{
                    return null;
                }

            })}
            
        </div>
    </div>
    );
    } else {
     load();
      
    return null;
}
   }