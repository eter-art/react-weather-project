import React from "react";
import  "./Weather.css";

export default function Weather (){
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder= "Enter a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="Submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <h1>Tbilisi</h1>
            <ul>
                <li> friday 13:00 </li>
                <li>Mostly Cloudy </li>
               </ul>
                     <div className="row">
                   <div className="col-6">
                       <div className="clearfix">
                       <img
                        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                         alt="Mostly Sunny"  />  
                           
                       
                       <span className="temperature">21</span>
                       <span className= "unit">°C</span> 
                 </div>
                   </div>
                   <div className="col-6">
                       <ul>
                           <li>
                               Precipitation: 1%
                           </li>
                           <li>
                               Humidity: 30%
                            </li>
                            <li>
                                Wind: 40 km/h
                            </li>
                       </ul>
                       
                   </div>
               </div>
            </div>
    )
}