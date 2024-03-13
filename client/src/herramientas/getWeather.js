import { ajax } from "./ajax";


export const getWeather = async (name) => {
  const APP_KEY = import.meta.env.VITE_APP_KEY;
  const city_name = name;
 
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city_name},AR&appid=${APP_KEY}`
  }
  
  return await ajax(options)
}