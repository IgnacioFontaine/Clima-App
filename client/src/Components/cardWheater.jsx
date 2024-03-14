import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function CardWheater({ temp, city }) {
  const { main, weather } = temp;
  const ciudad = city;

  return (
    <>
      
      <div class="card shadow-0 border">
          <div class="card-body p-4">

          <h4 class="mb-1 sfw-normal">{ciudad}</h4>
          <p class="mb-2">Temperatura actual: <strong>{main? main.temp : null}°C</strong></p>
          <p>Max: <strong>{main? main.temp_max : null}°C</strong>, Min: <strong>{main? main.temp_min : null}°C</strong></p>
          <p>Humedad: <strong>{main? main.humidity : null}%</strong></p>

            <div class="d-flex flex-row align-items-center">
              <p class="mb-0 me-4">Scattered Clouds</p>
              <i class="fas fa-cloud fa-3x" style="color: #eee;"></i>
            </div>

          </div>
        </div>
      

      {/* <div>
         <h3>Main: {weather? weather[0].main : null}</h3> 
          <img>logoTemp</img>  
         <h4>Temp: {main? main.temp : null}° </h4>
         <h5>Max temp: {main? main.temp_max : null}° </h5>
         <h5>Min temp: {main? main.temp_min : null}° </h5>
         <h5>humidity: {main? main.humidity : null}% </h5>
      </div>  */}
    </>
  )
}

export default CardWheater;