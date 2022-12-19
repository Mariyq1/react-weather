import React from "react";
import FormatedDate from "./FormatedDate";
 
export default function WeatherInfo(props){
    return(<div className="WeatherInfo"><h1>{props.data.city}</h1>
             <ul>
                <li><FormatedDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description} </li>
            </ul>
            <div className="row">
                <div className="col-6">
            <span className="temperature">{Math.round(props.data.temperature)}</span> 
                   <span className="units">°C</span>
            <img src={props.data.icon}
                    alt={props.data.description}
                    className="pb-5"/>
           </div>
           <div className="col-6 p-3">
                 <ul className="p-2">
                        <li>🌬︎Wind: {props.data.wind} m/s</li>
                        <li>💧 Humidity: {props.data.humidity}%</li>
                    </ul>
                    </div>
            </div>
          </div>)
}