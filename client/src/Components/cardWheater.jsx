

function CardWheater() {
  
  return (
    <>
      <div>
         <h3>Main: {temp.weather[0].main}</h3> 
         {/* <img>logoTemp</img>  */}
         <h4>Temp: {temp.main.temp}° </h4>
         <h5>Max temp: {temp.main.temp_max}° </h5>
         <h5>Min temp: {temp.main.temp_min}° </h5>
         <h5>humidity: {temp.main.humidity}% </h5>
      </div>
    </>
  )
}

export default CardWheater;