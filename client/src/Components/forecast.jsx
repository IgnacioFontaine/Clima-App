import argentinianCities from "../herramientas/cities";
import mapa_arg from "../assets/mapa_completo-removebg-preview.png"

function forecastCard({ temp }) {
  const { main, weather, name } = temp;



  return (
    <>
      <div style={{ border: "1px solid gray", backgroundColor:"#E7FFFF",backdropFilter: 'blur(10px)', display:"flex", borderRadius:"4px" }} >
        <div style={{height:"300px", width:"300px", p:1, justifyContent:"space-around"}} >
              <p  style={{color:"black"}} >Temperatura actual: <strong>{main? main.temp : null}°C</strong></p>
              <p style={{color:"black"}}>Max: <strong>{main? main.temp_max : null}°C</strong>, Min: <strong>{main? main.temp_min : null}°C</strong></p>
              <p style={{color:"black"}}>Humedad: <strong>{main? main.humidity : null}%</strong></p>
          </div>
      </div>
    </>
  )
}

