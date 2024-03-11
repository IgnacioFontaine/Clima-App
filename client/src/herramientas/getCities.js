import { ajax } from "./ajax";

export const getCityes = async () => {
  const options = {
  method: 'GET',
  url: 'https://countries-states-and-cities.p.rapidapi.com/cities',
  params: {country: 'MX'},
  headers: {
    'X-RapidAPI-Key': '46ac1a98cdmsh1c008577cb9bc71p1a4984jsn7efc71b141f2',
    'X-RapidAPI-Host': 'countries-states-and-cities.p.rapidapi.com'
  }
};
  return await ajax(options)
}