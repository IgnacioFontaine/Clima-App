import argentinianCities from "../herramientas/cities";
import mapa_arg from "../assets/mapa_completo-removebg-preview.png"

function CardWheater({ temp }) {
  const { main, weather, name } = temp;

  var iconcode = weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  const ciudad = argentinianCities.filter(ciudad => ciudad.value == name);


  return (
    <>
      <div style={{ border: "1px solid gray", backgroundColor:"#E7FFFF",backdropFilter: 'blur(10px)', display:"flex", borderRadius:"4px" }} >
        <div>
          {ciudad[0]?(<div>
          <div id="image"><img id="1" src={ciudad[0].mapa} style={{ height: "300px", width:"250px", p:1  }}  alt="Mapa Ciudad" /></div>
          </div>):(<div>
            <img src={mapa_arg} style={{ height: "400px", width:"350px", p:1  }} ></img>
          </div>) }
        </div>
        <div style={{height:"300px", width:"300px", p:1, justifyContent:"space-around"}} >
            <div >
              <div id="icon"><img id="wicon" src={iconurl} alt="Weather icon" style={{height:"100px", width:"100px", marginTop:"15px"}} /></div>
            </div>
              <p  style={{color:"black"}} >Temperatura actual: <strong>{main? main.temp : null}°C</strong></p>
              <p style={{color:"black"}}>Max: <strong>{main? main.temp_max : null}°C</strong>, Min: <strong>{main? main.temp_min : null}°C</strong></p>
              <p style={{color:"black"}}>Humedad: <strong>{main? main.humidity : null}%</strong></p>
          </div>
      </div>
      
    </>
  )
}

export default CardWheater;