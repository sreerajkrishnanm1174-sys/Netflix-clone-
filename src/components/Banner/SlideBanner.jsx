import React, { useState, useEffect } from 'react';
import Maindiv from '../Content divs/Maindiv';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";
import GenersGet from '../../api/GenersGet';

function SlideBanner({ movies ,type}) {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({}); // cache loaded images

  // Preload images when movies change
  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const imagesCache = {};
    movies.forEach((movie) => {
      const src = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        : '/fallback.jpg';
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesCache[movie.id] = src; // mark as loaded
        setLoadedImages({ ...imagesCache });
      };
    });
  }, [movies]);

  // Auto slide effect
  useEffect(() => {
    if (!movies || movies.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies]);

  if (!movies || movies.length === 0) {
    return (
      <div className="h-[600px] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  const nextSlide = () => setIndex((prev) => (prev + 1) % movies.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + movies.length) % movies.length);

  const currentMovie = movies[index];
  const src = loadedImages[currentMovie.id] || '/fallback.jpg'; // show cached image if loaded

  return (
    <div className="group relative ">
      <Maindiv title={currentMovie.title ||  currentMovie.name ||'No Title'} src={src} className="h-[600px] " >
      <GenersGet genre_ids={currentMovie.genre_ids} type={type}/>
      <p className="text-sm">Rating: {currentMovie.vote_average}</p>

      <br />
      </Maindiv>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-0 z-20 opacity-0 group-hover:opacity-100 
      h-full w-20 transition-opacity duration-300 text-white"
      >
          <span><FontAwesomeIcon icon={faArrowLeft} className='text-2xl' /></span>
      </button>
      

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-0 z-20 opacity-0 group-hover:opacity-100 
      h-full w-20 transition-opacity duration-300 text-white"
      >
          <span><FontAwesomeIcon icon={ faArrowRight} className='text-2xl' /></span>
      </button>
    </div>
  );
}

export default SlideBanner;