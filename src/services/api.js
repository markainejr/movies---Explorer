const API_KEY = "0ee63621752b1706ca598f7f4ec0bca7"

const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async () =>{
  const response = await fetch(`${BASE_URL}/movie/popular?api_key= ${API_KEY}`);
  const data = await response.json()
  return data.results

};

export const tSearchMovies = async (query) =>{
  const response = await fetch(`${BASE_URL}/search/movie?api_key= ${API_KEY}&query= ${encodeURIComponent(query)}`);
  const data = await response.json()
  return data.results

};