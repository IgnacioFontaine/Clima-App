

function CardWheater({ temp }) {
  const { main, weather } = temp;

  return (
    <>
      <div>
         <h3>Main: {weather? weather[0].main : null}</h3> 
         {/* <img>logoTemp</img>  */}
         <h4>Temp: {main? main.temp : null}° </h4>
         <h5>Max temp: {main? main.temp_max : null}° </h5>
         <h5>Min temp: {main? main.temp_min : null}° </h5>
         <h5>humidity: {main? main.humidity : null}% </h5>
      </div>
    </>
  )
}

export default CardWheater;