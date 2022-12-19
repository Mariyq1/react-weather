import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
 
export default function WeatherInfo(props){
    return(<div className="WeatherInfo">
        <div className="row">
            <div className="col-6">
        <h1>{props.data.city}</h1>
             <ul>
                <li><FormatedDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description} </li>
            </ul>
            </div>
            <div className="col-6">
                    <ul className="pt-5">
                        <li>🌬︎Wind: {props.data.wind} m/s</li>
                        <li>💧 Humidity: {props.data.humidity}%</li>
                    </ul>
             </div>
            </div>
            <div className="row">
            <div className="col-6">
                <WeatherTemperature celsius={props.data.temperature}/>
            </div>
            <div className="col-6">
                 <img src={props.data.icon}
                    alt={props.data.description}
                 />
            </div>
            </div>
                    
                   
          </div>);
}