function CardWheater({ temp }) {
  const { main, weather, name } = temp;

  var iconcode = weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  // var mapa_url = `./assets/Mapas/${name}.png`
  // var mapa_cba = "../assetsMapas/Córdoba.jpg"

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
      {/* <div>
        <div id="image"><img id="png" src={mapa_cba} alt="Mapa Ciudad" /></div>
      </div> */}
    </>
  )
}

export default CardWheater;