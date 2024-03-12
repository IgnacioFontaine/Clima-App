import './App.css'
import { useEffect, useState } from 'react'
import { getCountries } from './herramientas/getCountries';
import { getArgentinianCoordenates } from './herramientas/getCoordenates';

//APIS para esta app:
// APIS clima app:
//Open Weather API en Rest api

// -Rest Countries
// Endpoint todos los paises: https://restcountries.com/v3.1/all

// -Spott

function App() {
  const [countries, setCountries] = useState([]);
  const [selectCity, setSelectCity] = useState(null);
  // const [allCityes, setAllCityes] = useState([]);
  
  useEffect(() => {
    (async () => {
      const countriesResponse = await getCountries();
      setCountries(countriesResponse) 
      const coordenates = await getArgentinianCoordenates()
      setSelectCity(coordenates)
      
    })()
  }, [])

  const latitud = selectCity.provincias[0]['centroide']['lat'];
  const longitud = selectCity.provincias[0]['centroide']['lon'];

  console.log("Latitud: ", + latitud);
  console.log("-----------------------------------");
  console.log("Longitud: ", + longitud);
  

  const handleCountry = async (event) => {
    const country = event.currentTarget.value;
    
  }

  // const showCityes = () => {
  //   if (selectCountry != "") {
  //     const cityes =  getCities(selectCountry)
  //     console.log(cityes);
  //   }
  // }
  
  
  return (
    <>
      <div>
        <h1>Clima App</h1>
      </div>
      <div>
        <h2>Select the Country:</h2>
        <select name='Countrie' onChange={handleCountry} >
          {countries.map(country => 
            <option value={country.cca2} key={country.cca2}>
              {country.name.common}</option>
            
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
