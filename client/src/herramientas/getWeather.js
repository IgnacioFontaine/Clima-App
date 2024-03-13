import { ajax } from "./ajax";
const APP_KEY = import.meta.env.VITE_APP_KEY;

export const getWeather = async (name) => {
  const city_name = name;
 
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city_name},AR&appid=${APP_KEY}`
  }
  
  return await ajax(options)
}