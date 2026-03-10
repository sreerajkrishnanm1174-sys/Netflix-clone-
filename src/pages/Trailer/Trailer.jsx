import React, { useEffect, useState } from 'react'
import { getMovieTrailer } from '../../api/api';

function Trailer({ movie,type,onClose }) {
    const [trailerKey, setTrailerKey] = useState(null);

    useEffect   (() => {

        const fetchTrailer = async () => {
        const key = await getMovieTrailer(movie.id, type);
        setTrailerKey(key);
        };

        fetchTrailer();

    }, [movie, type]);

    if (!trailerKey) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      
      {/* Modal container */}
      <div className="relative w-[90%] md:w-[800px]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl"
        >
          ✕
        </button>

        {/* Trailer */}
        <iframe
          className="w-full h-[450px] rounded-lg"
          src={`https://www.youtube.com/embed/${trailerKey}`}   
          title={`${movie.title || movie.name} trailer`}
          allowFullScreen
        />
      </div>

    </div>
  );
}
export default Trailer;