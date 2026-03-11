import React, { useEffect, useState } from "react";
import NormalBtn from "../Buttons/NormalBtn";
import Trailer from "../../pages/Trailer/Trailer";
import Modal from "../modal/modal";
import { getMovieTrailer } from "../../api/api";

function Maindiv({ title, src, className, children ,movie,type}) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (!selectedMovie) return;

    const getTrailer = async () => {
      const key = await getMovieTrailer(selectedMovie.id, type);
      setTrailer(key);
    };

    getTrailer();
  }, [selectedMovie, type]);

  return (
    <main className={`${className}`}>
      <section className="w-full h-full relative">
        <img
          src={src}
          alt="Featured movie banner"
          className="w-full h-full"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,transparent_10%,rgba(0,0,0,0.8)_100%)]"></div>

        <div className="absolute bottom-10 left-[10%]  text-white">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-6 sm">{title}</h1>

          {children}

          <div className="flex  space-x-3  ">
            <NormalBtn className="bg-red-500 text-white hover:bg-black px-4 py-1.5 text-xs sm:text-sm">
              Play
            </NormalBtn>
            <NormalBtn
              className="bg-white text-black hover:bg-gray-400 px-4 py-1.5 text-xs sm:text-sm"
              onClick={() => {
                setSelectedMovie(movie);
                setShowTrailer(true);
              }}
            >
              Watch trailer
            </NormalBtn>

            {showTrailer && trailer && (
              <Modal onClose={() => setShowTrailer(false)}>
                <Trailer id={trailer} />
              </Modal>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Maindiv;