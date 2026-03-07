
import axios from "axios";

export const API_KEY = "0e3d41159448fa705e750445806521ac";

export const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    response.data["Base_url"] = BASE_URL;
    return response.data.results;
    // console.log(response.data);     
  } catch (error) {
    console.error("Error fetching movies", error);
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}` // ✅ correct endpoint
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};