import './App.css'
import { useEffect, useState } from 'react'
import { getCountries } from './herramientas/getCountries';
import { getCityes } from './herramientas/getCities';

//APIS para esta app:
// APIS clima app:
//Open Weather API en Rest api

// -Rest Countries
// Endpoint todos los paises: https://restcountries.com/v3.1/all

// -Spott

function App() {
  const [countries, setCountries] = useState([]);
  // const [selectCountry, setSelectCountry] = useState(null);
  // const [allCityes, setAllCityes] = useState([]);
  
  useEffect(() => {
    (async () => {
      const countriesResponse = await getCountries();
      setCountries(countriesResponse) 
      const cityes = await getCityes()
      console.log(cityes);
    })()
  }, [])
  

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
