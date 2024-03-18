import './App.css'
import { useState } from 'react'
import { getWeather } from './herramientas/getWeather';
import argentinianCities from './herramientas/cities';
import CardWheater from './Components/cardWheater';
import wheaterImage from './assets/weather-icon-removebg-preview.png'

function App() {
  const [selectCity, setSelectCity] = useState("Buenos Aires");
  const [allCityes, setAllCityes] = useState(argentinianCities);
  const [temp, setTemp] = useState(null);
  

  const handleCity = async (event) => {
    const city = event.currentTarget.value;
    setSelectCity(city);
    const temp_city = await getWeather(city)
    setTemp(temp_city)
  }
  
  return (
    <div style={{ backdropFilter: 'blur(10px)', padding:"70px", borderRadius:"4px"}}>
      <div  >
        <div style={{display:"flex", textAlign:"center"}} >
          <img src={wheaterImage} style={{ height: "200px", width:"200px", p:1, color:"black"  }} ></img>
          <h1 style={{fontFamily:"serif"}}>Clima Argentino</h1>
        </div>
      </div>
      
      <div style={{display:"flex", flexDirection:"column"}}>
        
        <div>
          <div style={{display:"flex", p:1, justifyContent:"center"}}>
            <h2 style={{ color: "white",fontFamily:"serif" }}>Seleccioná la ciudad: </h2>
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
      
    </div>
  )
}

export default App
