import React,{ useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { BASE_URL } from '../../api/api';

function MovieGallery({movies}) {
  
  const scrollRef = useRef(null);
  
    const scrollLeft = () => {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    };
  
   
  
  return (
    <div className="flex items-center h-fit w-[100%] gap-4 group  relative">

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-20 opacity-0 group-hover:opacity-100 h-full w-20 transition-opacity duration-300  text-white "
        >
          <span><FontAwesomeIcon icon={faArrowLeft} className='text-2xl' /></span>
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-3 w-full scroll-smooth  no-scrollbar"
        >
          {movies.map((movie, index) => (
            <div key={index} className="relative w-64 h-96 rounded-lg overflow-hidden flex-shrink-0">
              
              {/* Movie Poster */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />

              {/* Bottom shadow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.8)_0%,transparent_80%)]"></div>

              {/* Left bottom gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_bottom,transparent_40%,rgba(0,0,0,0.9)_100%)]"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p className="text-sm">Rating: {movie.rating}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-20 opacity-0 group-hover:opacity-100 h-full w-20 transition-opacity duration-300  text-white "
        >
          <span><FontAwesomeIcon icon={faArrowRight} className='text-2xl' /></span>
        </button>

    </div>
  );
}

export default MovieGallery