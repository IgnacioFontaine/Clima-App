import './App.css'
import { useEffect } from 'react'
import { ajax } from './herramientas/ajax'

//APIS para esta app:
// APIS clima app:
// -Openwheater

// -Rest Countries
// Endpoint todos los paises: https://restcountries.com/v3.1/all

// -Spott

function App() {
  
  useEffect(() => {

    const options = {
      method: "GET",
      url:"https://restcountries.com/v3.1/all"
    };
    
    (async () => {
      const countries = await ajax(options);
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
