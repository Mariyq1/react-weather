import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type a city"
                className="form-control"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search"
                className="btn btn-secondary"/>
                </div>
                </div>
            </form>
            <h1>Weather in New York</h1>
            <ul>
                <li>Sunday 13:00 p.m.</li>
                <li>Cloudy</li>
            </ul>
          
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Weather"/>
                    4°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>🌬︎Wind: 6,1 m/s</li>
                        <li>💧 Humidity: 53%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}