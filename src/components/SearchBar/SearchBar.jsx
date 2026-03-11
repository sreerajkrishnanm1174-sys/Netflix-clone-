import React, { useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from '../../api/api';
import MovieCard from "../moviecard/MovieCard";
import {  useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);

    try {
      const response = await axios.get(`${BASE_URL}/search/multi`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });

      const filteredResults = (response.data?.results || []).filter(
        (item) => item.media_type !== "person"
      );

      setResults(filteredResults);

    } catch (error) {
      // console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w p-10 mt-10">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border-4 border-white rounded-full text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-white text-red-500 rounded-full hover:bg-red-600 hover:text-amber-50"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      <div className=" mt-10  flex flex-wrap gap-2 justify-start w-full">
        {results.map((movie, index) => (
            <MovieCard key ={movie.id} movie={movie} type={movie.media_type} onClick={() => navigate(`/moviedetail/${movie.media_type}/${movie.id}`)}/>

        ))}
        </div>
    </div>
  );
}

export default SearchBar;
