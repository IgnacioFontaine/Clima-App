import { ajax } from "./ajax";

export const getCityes = async () => {
  const RAPID_KEY = import.meta.env.VITE_RAPID_API_KEY
  const options = {
  method: 'GET',
  url: 'https://countries-states-and-cities.p.rapidapi.com/cities',
  params: {country: 'MX'},
  headers: {
    'X-RapidAPI-Key': RAPID_KEY,
    'X-RapidAPI-Host': 'countries-states-and-cities.p.rapidapi.com'
  }
};
  return await ajax(options)
}