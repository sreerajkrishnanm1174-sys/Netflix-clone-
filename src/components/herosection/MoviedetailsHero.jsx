import React from 'react'
import NormalBtn from '../Buttons/NormalBtn'

function MoviedetailsHero({movie,trailer}) {
  return (
    <div className="relative min-h-[70vh] w-full overflow-hidden">
  
      {/* Background */}
      <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 items-center justify-center  bg-black/70 flex flex-col sm:flex-row 
                        sm:justify-center gap-4 sm:gap-6 
                      px-4 py-6 sm:p-10">

          {/* Poster */}
          <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-32 sm:w-48 md:w-60 rounded-lg shadow-lg"
          />

          {/* Movie Info */}
          <div className="max-w-full sm:max-w-xl text-center sm:text-left">

          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold break-words">
              {movie.title || movie.name}
          </h1>

          <p className="mt-2 text-gray-300 text-xs sm:text-sm md:text-base">
              ⭐ {movie.vote_average} | {movie.release_date}
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base line-clamp-4 sm:line-clamp-none">
              {movie.overview}
          </p>

          {trailer && (
              <div className="mt-4">
              <NormalBtn
                  className="bg-white text-black hover:bg-gray-400 px-3 py-1 text-xs sm:text-sm"
                  onClick={() =>
                  window.open(`https://youtube.com/watch?v=${trailer}`, "_blank")
                  }
              >
                  Watch trailer
              </NormalBtn>
              </div>
          )}

          </div>
      </div>
  </div>
  )
}

export default MoviedetailsHero