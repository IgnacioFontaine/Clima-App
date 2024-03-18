import { ajax } from "./ajax";


export const getWeather = async (name) => {
  const APP_KEY = import.meta.env.VITE_APP_KEY;
  const city_name = name;
 
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city_name},AR&appid=27b314f308c2f99c7e98a70b8529d801&units=metric`
  }
  
  return await ajax(options)
}

export const getFourecast = async (name) => {
  const APP_KEY = import.meta.env.VITE_APP_KEY;
  const city_name = name;
 
  const options = {
    method: 'GET',
    url: `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city_name},AR&appid=${APP_KEY}`
  }
  
  return await ajax(options)
  
}