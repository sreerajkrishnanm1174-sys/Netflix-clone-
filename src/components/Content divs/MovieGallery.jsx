import React,{ useRef, useState,useEffect} from 'react'
import { LeftBtn, RightBtn } from '../Buttons/leftrightbtn';
import Trailer from '../../pages/Trailer/Trailer';
import MovieCard from '../moviecard/MovieCard';

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
          
            <MovieCard key ={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} type={type}/>
            
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