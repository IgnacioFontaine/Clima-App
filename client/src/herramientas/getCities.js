import { ajax } from "./ajax";

export const getCities = async (id) => {
  const options = {
    method: 'GET',
    url: `https://spott.p.rapidapi.com/places/${id}`,
  headers: {
    'X-RapidAPI-Key': '46ac1a98cdmsh1c008577cb9bc71p1a4984jsn7efc71b141f2',
    'X-RapidAPI-Host': 'spott.p.rapidapi.com'
  }
};
  return await ajax(options)
}