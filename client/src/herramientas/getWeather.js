import { ajax } from "./ajax";


export const getWeather = async () => {
  const API_KEY = "";
  const lon = "";
  const lat = "";
  
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  }
  
  return await ajax(options)
}