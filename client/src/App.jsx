import './App.css'
import { useEffect, useState } from 'react'
import { getCountries } from './herramientas/getCountries';

//APIS para esta app:
// APIS clima app:
// -Openwheater(clima por ciudad)

// -Rest Countries
// Endpoint todos los paises: https://restcountries.com/v3.1/all

// -Spott

function App() {
  const [countries, setCountries] = useState([]);
  const [selectCountrie, setSelectCountrie] = useState("");
  
  useEffect(() => {
    (async () => {
      const countriesResponse = await getCountries();
      setCountries(countriesResponse)
      
    })()
    
  }, [])
  
  
  return (
    <>
      <div>
        <h1>Clima App</h1>
      </div>
      <div>
        <h2>Select the countrie:</h2>
        <select name='Countrie' >
          {countries.map(country => 
            <option value={country.cca2} key={country.cca2}>
              {country.name.common}</option>
            
          )}

        </select>
        {/* <select >
          <option>City</option>
        </select> */}
      </div>
    </>
  )
}

export default App
