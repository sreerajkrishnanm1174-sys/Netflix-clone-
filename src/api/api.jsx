
import axios from "axios";

export const API_KEY = "0e3d41159448fa705e750445806521ac";

export const BASE_URL = "https://api.themoviedb.org/3";

export const getGenerMovies = async (type) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/genre/${type}/list?api_key=${API_KEY}`
    );

    // console.log(response.data.genres);

    return response.data.genres;

  } catch (error) {
    // console.error("Error fetching genres", error);
  }
};


export const getTrendingMovies = async (type) => {
  try {
    // console.log(type)
    const response = await axios.get(
      `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}`
    );
    response.data["Base_url"] = BASE_URL;
    return response.data.results;
    // console.log(response.data);     
  } catch (error) {
    // console.error("Error fetching movies", error);
  }
};

export const getPopularMovies = async (type) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${type}/popular?api_key=${API_KEY}`
    );
    
    return response.data.results;
  } catch (error) {
    // console.error(error);
  }
};

export const getTopRatedMovies = async (type) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/top_rated?api_key=${API_KEY}` // ✅ correct endpoint
    );
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    // console.error(error);
    return [];
  }
};

export const getPersonMovies = async (query) => {
  try {

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${query}`
    );

    const allKnownFor = response.data.results.flatMap(
      (person) => person.known_for
    );

    return allKnownFor;

  } catch (error) {
    // console.error(error);
    return [];
  }
};

export const getMovieTrailer = async (Id,type) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${type}/${Id}/videos?api_key=${API_KEY}`
    );

    const trailer = response.data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer ? trailer.key : null;

  } catch (error) {
    // console.error("Error fetching trailer", error);
    return null;
  }
};
