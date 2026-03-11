import React from 'react'

function ActorsCard({cast}) {
  return (  
    <div className="px-10 pb-10">
        <h2 className="text-2xl font-semibold mb-6">Top Cast</h2>

        <div className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar">

            {cast?.map((actor) => (
            <div
                key={actor.id}
                className="min-w-[140px] text-center flex-shrink-0"
            >

                <img
                src={
                    actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={actor.name}
                className="rounded-lg w-[140px] h-[200px] object-cover"
                />

                <p className="mt-2 font-semibold text-sm">
                {actor.name}
                </p>

                <p className="text-xs text-gray-400">
                {actor.character}
                </p>

            </div>
            ))}

        </div>
    </div>
  )
}

export default ActorsCard