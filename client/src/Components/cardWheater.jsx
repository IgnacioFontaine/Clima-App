import argentinianCities from "../herramientas/cities";

function CardWheater({ temp }) {
  const { main, weather, name } = temp;

  var iconcode = weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  const ciudad = argentinianCities.filter(ciudad => ciudad.name == name);


  return (
    <>
      <div style={{border:"1px solid gray",backdropFilter: 'blur(10px)'}} >
        <div >
            <div >
              <div id="icon"><img id="wicon" src={iconurl} alt="Weather icon" /></div>
            </div>
          
              <p  style={{color:"black"}} >Temperatura actual: <strong>{main? main.temp : null}°C</strong></p>
              <p style={{color:"black"}}>Max: <strong>{main? main.temp_max : null}°C</strong>, Min: <strong>{main? main.temp_min : null}°C</strong></p>
              <p style={{color:"black"}}>Humedad: <strong>{main? main.humidity : null}%</strong></p>
          </div>
      </div>
      {/* {ciudad?(<div>
        <div id="image"><img id="1" src={ciudad[0].mapa} alt="Mapa Ciudad" /></div>
      </div>):("") } */}
    </>
  )
}

export default CardWheater;