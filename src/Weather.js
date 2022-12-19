import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type a city"
                className="form-control"
                autofocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search"
                className="btn btn-light"/>
                </div>
                </div>
            </form>
            <div className="row">
                <div className="col-6">
            <h1>New York</h1>
            <ul>
                <li>Sunday 13:00 p.m.</li>
                <li>Cloudy </li>
            </ul>
            </div>
            <div className="col-6">
                   <span className="temperature">4</span> 
                   <span className="units">°C</span>
            </div>
          </div>
            <div className="row">
                <div className="col-6">
                  
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Weather"/>
                    
                </div>
                <div className="col-6">
                    <ul className="p-2">
                        <li>🌬︎Wind: 6,1 m/s</li>
                        <li>💧 Humidity: 53%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}