import { ajax } from "./ajax";

export const getWeather = async () => {
  const options = {
    method: 'GET',
    url: 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ColocarClave'
  }
  
  return await ajax(options)
}