import './App.css'
import { useEffect } from 'react'
import { ajax } from './herramientas/ajax'
import { getCountries } from './herramientas/getCountries';

//APIS para esta app:
// APIS clima app:
// -Openwheater(clima por ciudad)

// -Rest Countries
// Endpoint todos los paises: https://restcountries.com/v3.1/all

// -Spott

function App() {
  
  useEffect(() => {
    (async () => {
      const countries = await getCountries();
      console.log(countries);
    })()
  },[])

  return (
    <>
      <div>
        <h1>Clima App</h1>
      </div>
      <div>
        <h2>Select the countrie:</h2>
        <select >
          {countries?.map((country) => {
            <option value={country.name.common} >{country.name.common}</option>
          })}
        </select>
        {/* <select >
          <option>City</option>
        </select> */}
      </div>
    </>
  )
}

export default App
