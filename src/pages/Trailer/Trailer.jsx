import React, { useEffect, useState } from "react";

function Trailer({ id, className }) {
  if (!id) return null;

  return (
    <div className={`w-full aspect-video ${className}`}>
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${id}`}
        title="Movie Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

export default Trailer;
