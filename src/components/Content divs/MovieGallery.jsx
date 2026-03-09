import React,{ useRef, useState,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { LeftBtn, RightBtn } from '../Buttons/leftrightbtn';
import GenersGet from '../../api/GenersGet';
import { getMovieTrailer } from '../../api/api';
import Trailer from '../../pages/Trailer/Trailer';

function MovieGallery({movies,type}) {

  const scrollRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  return (
    <div className="flex items-center h-fit w-[100%] gap-4 group  relative">

        {/* Left Button */}
        {/* <button
          onClick={scrollLeft}
          className="absolute left-0 z-20 opacity-0 group-hover:opacity-100 h-full w-20 transition-opacity duration-300  text-white "
        >
          <span><FontAwesomeIcon icon={faArrowLeft} className='text-2xl' /></span>
        </button> */}
        <LeftBtn scrollRef={scrollRef} />
        

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-3 w-full scroll-smooth  no-scrollbar"
        >
          {movies.map((movie, index) => (
          
            <div key={index}
              onClick={() => setSelectedMovie(movie)}
              className="relative w-64 h-96 rounded-lg overflow-hidden flex-shrink-0">
              
              {/* Movie Poster */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="w-full h-full object-cover"
              />

              {/* Bottom shadow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.8)_0%,transparent_80%)]"></div>

              {/* Left bottom gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_bottom,transparent_40%,rgba(0,0,0,0.9)_100%)]"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 key={index} className='capitalize'>
                  {movie.title || movie.name}
                </h2>
                <GenersGet  genre_ids={movie.genre_ids} type={type} />
                <p className="text-sm">Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))}
          {selectedMovie && (
            <Trailer
              type={type}
              movie={selectedMovie}
              onClose={() => setSelectedMovie(null)}
            />
          )}
        </div>

        {/* Right Button */}
        <RightBtn scrollRef={scrollRef} />

    </div>
  );
}

export default MovieGallery