import './App.css'
import {useState } from 'react'
import { getWeather } from './herramientas/getWeather';
import argentinianCities from './herramientas/cities';
import CardWheater from './Components/cardWheater';

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
    setTemp(temp_city)
  }
  
  return (
    <>
      <div >
        <h1>Argentinian Clima App</h1>
      </div>
      <div>
        <h2>Select the City:</h2>
        <select name='Cities' onChange={handleCity} >
          {allCityes.map(city => 
            <option value={city.name} key={city.id}>
              {city.name}</option>
          )}
        </select>
      </div>
      {temp && (
        <div>
          <div>
            <h2>Wheater</h2>
          </div>
          <CardWheater temp={temp} />
        </div>
      )}
    </>
  )
}

export default App
