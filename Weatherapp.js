import React from 'react';
import "./css/style.css";

const Weatherapp =() => {
    return(
        <>
        <div className="box">
        <div className="inputData">
        <input type="search"
        className="inputField"
        onChange= { (event) => {
        }}/>
        </div>
        
        <div className="info">
            <h2 className="location">
            Rourkela
            </h2>
            <h1 className="temp">
             9.25 Cel
            </h1>
            <h3 className="tempmin_max">Min : 9.25Cel | Max : 9.25Cel </h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
        </>
    )
}

export default Weatherapp;