import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,seterror] = useState(false);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "53aec339ffd3f924ee80e3eaeb8c6cca";

    let getWeatherInfo =async ( )=>{
        try{
            let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
         
            
            let result ={
                city: city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description 
            };
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
        

    };
    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
           let Newinfo = await getWeatherInfo();
             updateInfo(Newinfo);
        } catch(err) {
            seterror(true);
        }
       
       }


    return (
        <div className='SearchBox'>
             
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="city name" variant="outlined" required value={city}
                    onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>search </Button>

                {error && <p style={{color:"red"}}> no such place exist !</p>}
            </form>

        </div>
    )
}