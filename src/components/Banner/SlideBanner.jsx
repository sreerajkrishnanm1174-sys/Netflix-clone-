import React, { useState, useEffect } from 'react';
import Maindiv from '../Content divs/Maindiv';

function SlideBanner({ movies }) {
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
    <div className="relative">
      <Maindiv title={currentMovie.title || 'No Title'} src={src} className="h-[600px]" />

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl"
      >
        ◀
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl"
      >
        ▶
      </button>
    </div>
  );
}

export default SlideBanner;