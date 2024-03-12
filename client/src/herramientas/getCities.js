import { ajax } from "./ajax";

export const getCityes = async () => {
  const options = {
  method: 'GET',
  url: 'https://countries-states-and-cities.p.rapidapi.com/cities',
  params: {country: 'MX'},
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'countries-states-and-cities.p.rapidapi.com'
  }
};
  return await ajax(options)
}