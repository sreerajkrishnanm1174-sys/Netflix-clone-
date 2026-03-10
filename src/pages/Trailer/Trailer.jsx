import React, { useEffect, useState } from 'react'
import { getMovieTrailer } from '../../api/api';

function Trailer({ id }) {
  return (
        <div className="px-10 pb-10">

            <h2 className="text-2xl font-semibold mb-6">Trailer</h2>

            <iframe
                className="w-full h-[500px] rounded-lg"
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
            />

        </div>

    
  );
}
export default Trailer;