import React from 'react'
import GenersGet from '../../api/GenersGet'

function MovieCard(props) {
    
  return (
     <div 
        onClick={props.onClick}
        className="relative w-40 h-64 sm:w-38 sm:h-72 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-lg overflow-hidden flex-shrink-0">
        
        {/* Movie Poster */}
        <img
        src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
        alt={props.movie.title || props.movie.name}
        className="w-full h-full object-cover"
        />

        {/* Bottom shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.8)_0%,transparent_80%)]"></div>

        {/* Left bottom gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_bottom,transparent_40%,rgba(0,0,0,0.9)_100%)]"></div>

        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 text-white z-10">
        <h2 className='capitalize'>
            {props.movie.title || props.movie.name}
        </h2>
        <GenersGet  genre_ids={props.movie.genre_ids} type={props.type} />
        <p className="text-sm">Rating: {props.movie.vote_average}</p>
        </div>
    </div>
  )
}

export default MovieCard