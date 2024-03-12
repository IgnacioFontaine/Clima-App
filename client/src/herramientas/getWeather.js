import { ajax } from "./ajax";
const APP_ID = import.meta.env.VITE_APP_ID;

export const getWeather = async ( lat, lon ) => {
  
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}`
  }
  
  return await ajax(options)
}