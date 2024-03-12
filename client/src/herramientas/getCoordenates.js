import { ajax } from "./ajax";

export const getCoordenates = async () => {
  const API_KEY = "";
  const country_code = "";
  const city_name = "";

  const options = {
  method: 'GET',
  url: `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${country_code}&limit=1&appid=${API_KEY}`
};
  return await ajax(options)
}

export const getArgentinianCoordenates = async (nombre) => {
  
  const options = {
  method: 'GET', 
  url: `https://apis.datos.gob.ar/georef/api/provincias?nombre=${nombre}`
};
  return await ajax(options)
}