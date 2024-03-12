import { ajax } from "./ajax";

export const getCoordenates = async () => {
  const API_KEY = "";
  const country_code = "";
  const city_name = "";
  const options = {
  method: 'GET', 
  url: `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},{state code},${country_code}&limit=1&appid=${API_KEY}`,
  params: {country: 'MX'},
  headers: {
    'X-RapidAPI-Key': '46ac1a98cdmsh1c008577cb9bc71p1a4984jsn7efc71b141f2',
    'X-RapidAPI-Host': 'countries-states-and-cities.p.rapidapi.com'
  }
};
  return await ajax(options)
}