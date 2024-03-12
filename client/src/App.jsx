import './App.css'
import { useEffect, useState } from 'react'
import { getCountries } from './herramientas/getCountries';
import { getArgentinianCoordenates } from './herramientas/getCoordenates';
import argentinianCities from './herramientas/cities';

//APIS para esta app:
// APIS clima app:
//Open Weather API en Rest api

// -Rest Countries
// Endpoint todos los paises: https://restcountries.com/v3.1/all

// -Spott

function App() {
  const [countries, setCountries] = useState([]);
  const [selectCity, setSelectCity] = useState(null);
  const [allCityes, setAllCityes] = useState(argentinianCities);
  
  useEffect(() => {
    (async () => {
      const countriesResponse = await getCountries();
      setCountries(countriesResponse) 
      const coordenates = await getArgentinianCoordenates(selectCity)
      console.log(coordenates.provincias);
      
    })()
  }, [selectCity])


  // console.log(selectCity.provincias[0].centroide.lon);
  // console.log("-----------------------------------");
  // const latitud = selectCity.provincias[0].centroide.lat
  // const longitud = selectCity.provincias[0].centroide.lon

  // console.log("Latitud: ", + latitud);
  // console.log("-----------------------------------");
  // console.log("Longitud: ", + longitud);
  

  const handleCity = async (event) => {
    const city = event.currentTarget.value;
    setSelectCity(city);
  }

  console.log(selectCity);
  
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
      {/* <div>
        <h2>Select the City:</h2>
        <select name='City' onChange={handleCity} >
          {countries.map(country => 
            <option value={country.cca2} key={country.cca2}>
              {country.name.common}</option>
          )}
        </select>
      </div> */}
        {/* <select >
          <option>City</option>
        </select> */}
      
    </>
  )
}

export default App
