import { ajax } from "./ajax";


export const getWeather = async ({lat,lon}) => {
  const API_KEY = "";

  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=27b314f308c2f99c7e98a70b8529d801`
  }
  
  return await ajax(options)
}