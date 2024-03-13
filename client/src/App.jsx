import './App.css'
import { useEffect, useState } from 'react'
// import { getCountries } from './herramientas/getCountries';
import { getArgentinianCoordenates } from './herramientas/getCoordenates';
import { getWeather } from './herramientas/getWeather';
import argentinianCities from './herramientas/cities';

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
  
  useEffect(() => {
    (async () => {
      // const countriesResponse = await getCountries();
      // setCountries(countriesResponse) 
      const coordenates_response = await getArgentinianCoordenates(selectCity);
      setCordenates(coordenates_response)
      
    })()
  }, [selectCity])
  

  const handleCity = async (event) => {
    const city = event.currentTarget.value;
    setSelectCity(city);
    const temp_city = await getWeather(city)
    setTemp(temp_city)
  }

  if (temp) {
    console.log(temp);
    const main = temp.main;
    console.log(main);
    const weather = temp.weather[0].main;
    return (main,weather)
  }
  

  
  return (
    <>
      <div>
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
      {temp ? (
        <div>
          <div>
            <h2>Wheater</h2>
          </div>
          <div>
            <h3>Main: {weather}</h3> 
             {/* <img>logoTemp</img>  */}
             <h4>Temp: {main.temp} </h4>
            <h5>Max temp: {main.temp_max} </h5>
            <h5>Min temp: {main.temp_min} </h5>
            <h5>humidity: {main.humidity}% </h5>
          </div>
        </div>
      ):("")}
      
    </>
  )
}

export default App
