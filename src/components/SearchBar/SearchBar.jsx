import React, { useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from '../../api/api';
import GenersGet from "../../api/GenersGet";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

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
      setResults(response.data?.results || []);;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w mx-auto mt-10">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border-amber-400  text-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      <div className="relative mt-4 flex flex-wrap gap-4 justify-start w-screen px-4">
        {results.map((movie, index) => (
            <div
            key={movie.id || index}
            className="relative w-64 h-96 rounded-lg flex-shrink-0 overflow-hidden"
            >
            {/* Movie Poster */}
            <img
                src={
                movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title || movie.name}
                className="w-full h-full object-cover"
            />

            {/* Bottom shadow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.8)_0%,transparent_80%)]"></div>

            {/* Left bottom gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_bottom,transparent_40%,rgba(0,0,0,0.9)_100%)]"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="capitalize font-bold">{movie.title || movie.name}</h2>
                <GenersGet genre_ids={movie.genre_ids} type={movie.title ? "movie" : "tv"} />
                <p className="text-sm">Rating: {movie.vote_average}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default SearchBar;
