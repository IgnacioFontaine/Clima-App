import './App.css'
import { useState } from 'react'
import { getWeather } from './herramientas/getWeather';
import argentinianCities from './herramientas/cities';
import CardWheater from './Components/cardWheater';
import wheaterImage from "./assets/weather-icon-removebg-preview.png"
import mapa_arg from "./assets/mapa_completo-removebg-preview.png"

//APIS para esta app:
// APIS clima app:
//Open Weather API en Rest api

// -Rest Countries
// Endpoint todos los paises: https://restcountries.com/v3.1/all

// -Spott


function App() {
  const [selectCity, setSelectCity] = useState("Buenos Aires");
  const [allCityes, setAllCityes] = useState(argentinianCities);
  const [temp, setTemp] = useState(null);
  

  const handleCity = async (event) => {
    const city = event.currentTarget.value;
    setSelectCity(city);
    const temp_city = await getWeather(city)
    console.log(temp_city);
    setTemp(temp_city)
  }
  
  return (
    <>
      <div  >
        <div style={{display:"flex", textAlign:"center"}} >
          <img src={wheaterImage} style={{ height: "200px", width:"200px", p:1, color:"black"  }} ></img>
          <h1>Clima Argentino</h1>
        </div>
      </div>
      
      <div style={{display:"flex"}}>
        <div>
          <img src={mapa_arg} style={{ height: "500px", width:"350px", p:1  }} ></img>
        </div>
        <div>
          <div style={{display:"flex", p:1, justifyContent:"center"}}>
            <h2 style={{ color: "black" }}>Seleccioná la ciudad: </h2>
            <div style={{display:"flex", flexDirection:"column"}}>
              <select name='Cities' onChange={handleCity} style={{ height:"35px", borderRadius:"5px",marginTop:"20px", marginLeft:"10px" }} >
            {allCityes.map(city => 
              <option value={city.value} key={city.id}>
                {city.name}</option>
            )}
            </select>
            <div>
              {temp && (
              <div style={{marginTop:"60px"}}>
                <CardWheater temp={temp}  />
              </div>
            )}
            </div>
            </div>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default App
