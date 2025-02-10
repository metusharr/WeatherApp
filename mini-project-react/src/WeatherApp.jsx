import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './searchbox'

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({ 
        city: " delhi",
        feelsLike: 24.84,
        temp: 25.02,
        tempMin: 25.05,
        tempMax: 25.25,
        humidity: 25.05,
        weather: "haze"
    });

    let updateInfo =(Newinfo)=>{
          setWeatherInfo(Newinfo);
    }
    return (
        <div style={{
            textAlign: "center", border: "2px solid black",
            padding: "10px", justifyContent: "center", 
            alignItems: "center", width: "fit-content",
            padding: "10px",
            margin: "auto",
            boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.2)",
            borderRadius:"2rem"
        }} >
            <h2>weather app by tushar</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox  info= {weatherInfo}/>

        </div>
    )
}