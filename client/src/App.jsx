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
  const [selectCountry, setSelectCountry] = useState("");
  
  useEffect(() => {
    (async () => {
      const countriesResponse = await getCountries();
      setCountries(countriesResponse)
      
    })()
    
  }, [])

  const handleCountry = (event) => {
    const country = event.currentTarget.value;
    setSelectCountry(country);
    console.log("Pais seleccionado:", country);
  }
  
  
  return (
    <>
      <div>
        <h1>Clima App</h1>
      </div>
      <div>
        <h2>Select the countrie:</h2>
        <select name='Countrie' onChange={handleCountry} >
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
