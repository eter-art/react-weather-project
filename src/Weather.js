import React from "react";
import  "./Weather.css";

export default function Weather (){
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder= "enter a city..." className="form-control" />
                </div>
                <div className="col-3">
                <input type="Submit" value="Search" className="btn btn-primary"/>
            </div>
            </div>
            </form>
            <h1>Tbilisi</h1>
            <ul>
                <li> friday 13:00 </li>
                <li>Sunny </li>
               </ul>
               <div className="row">
                   <div className="col-6">
                       <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly sunny"/>
                       21°C
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