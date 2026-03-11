import React,{ useRef, useState} from 'react'
import { LeftBtn, RightBtn } from '../Buttons/leftrightbtn';
import MovieCard from '../moviecard/MovieCard';
import { useNavigate } from "react-router-dom";


function MovieGallery({movies,type}) {

  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  return (
    <>
      <div className="flex items-center h-fit w-[100%] gap-4 group  relative">

          {/* Left Button */}
        
          <LeftBtn scrollRef={scrollRef} />
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-3 w-full scroll-smooth  no-scrollbar"
          >
            {movies.map((movie, index) => (
            
              <MovieCard key ={movie.id} movie={movie} onClick={() => navigate(`/moviedetail/${movie.title ? "movie" : "tv"}/${movie.id}`)} type={ movie.title ? "movie" : "tv"}/>
              
            ))}

          
          </div>

          {/* Right Button */}
          <RightBtn scrollRef={scrollRef} />

      </div>
    
    </>
    

  );
}

export default MovieGallery