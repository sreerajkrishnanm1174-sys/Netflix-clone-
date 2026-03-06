import React from 'react'

function MovieGallery({movies}) {
    return (
    
    <div className=" mt-10 flex  gap-6 justify-start">
       
      {movies.map((movie, index) => (
        <div key={index} className="relative w-64 h-96 rounded-lg overflow-x-auto scrollbar-hide">
          {/* Movie Poster */}
          <img
            src={movie.imageSrc}
            alt={movie.title}
            className="w-full h-full object-cover"
          />

          {/* Bottom shadow to remove gaps */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.8)_0%,transparent_80%)]"></div>

          {/* Bottom-left gradient for text overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_bottom,transparent_40%,rgba(0,0,0,0.9)_100%)]"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-4 left-4 text-white z-10">
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <p className="text-sm">Rating: {movie.rating}</p>
          </div>
        </div>
      ))}
    </div>

  );
}

export default MovieGallery