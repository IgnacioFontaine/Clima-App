import { ajax } from "./ajax";

export const getWeather = async () => {
  const options = {
    method: 'GET',
    url: 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=27b314f308c2f99c7e98a70b8529d801'
  }
  
  return await ajax(options)
}