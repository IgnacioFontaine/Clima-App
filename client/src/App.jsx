import './App.css'

//APIS para esta app:
// APIS clima app:
// -Openwheater

// -Rest Countries
// Endpoint todos los paises: https://restcountries.com/v3.1/all

// -Spott

function App() {
  
  return (
    <>
      <div>
        <h1>Clima App</h1>
      </div>
      <div>
        <h2>Select the countrie:</h2>
        <select >
          <option>Countrie</option>
        </select>
        <select >
          <option>City</option>
        </select>
      </div>
    </>
  )
}

export default App
