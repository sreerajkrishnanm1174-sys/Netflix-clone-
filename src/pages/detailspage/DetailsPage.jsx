import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../api/api";
import { useParams } from "react-router-dom";
import Trailer from "../Trailer/Trailer";
import ActorsCard from "../../components/moviecard/ActorsCard";
import MovieGallery from "../../components/Content divs/MovieGallery";



export default function DetailsPage() {
const { id } = useParams();
const [movie, setMovie] = useState({});
const [cast, setCast] = useState([]);
const [similar, setSimilar] = useState([]);
const [trailer, setTrailer] = useState(null);
    
useEffect(() => {
    fetchMovie();
    fetchCast();
    fetchSimilar();
    fetchTrailer();
}, [id]);

const fetchMovie = async () => {
    const res = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    setMovie(res.data);
};

const fetchCast = async () => {
    const res = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    setCast(res.data.cast.slice(0, 10));
};

const fetchSimilar = async () => {
    const res = await axios.get(
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`
    );
    setSimilar(res.data.results.slice(0, 10));
};

const fetchTrailer = async () => {
    const res = await axios.get(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );

    const trailerVideo = res.data.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
    );

    setTrailer(trailerVideo);
};

return (
    <div className="text-white">

    {/* HERO SECTION */}
    <div className="relative h-[70vh]">
        <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex items-end p-10">

        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="w-60 rounded-lg shadow-lg"
        />

        <div className="ml-8 max-w-xl">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            <p className="mt-2 text-gray-300">
            ⭐ {movie.vote_average} | {movie.release_date}
            </p>

            <p className="mt-4">{movie.overview}</p>

            {trailer && (
            <a
                href={`https://youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                className="inline-block mt-4 bg-red-600 px-5 py-2 rounded-lg"
            >
                ▶ Watch Trailer
            </a>
            )}
        </div>

        </div>
    </div>

    {/* MOVIE DETAILS */}
    <div className="p-10 grid md:grid-cols-2 gap-8">

        <div>
        <h2 className="text-2xl font-semibold mb-4">Details</h2>

        <p><span className="text-gray-400">Status:</span> {movie.status}</p>
        <p><span className="text-gray-400">Language:</span> {movie.original_language}</p>
        <p><span className="text-gray-400">Budget:</span> ${movie.budget}</p>
        <p><span className="text-gray-400">Revenue:</span> ${movie.revenue}</p>
        <p><span className="text-gray-400">Runtime:</span> {movie.runtime} min</p>

        </div>

        <div>
        <h2 className="text-2xl font-semibold mb-4">Genres</h2>

        <div className="flex flex-wrap gap-3">
            {movie.genres?.map((g) => (
            <span
                key={g.id}
                className="bg-gray-800 px-3 py-1 rounded-full"
            >
                {g.name}
            </span>
            ))}
        </div>

        </div>

    </div>

    {/* CAST */}
    <ActorsCard cast={cast}/>
    

    {/* TRAILER VIDEO */}
    {trailer && (
        <Trailer id={trailer.key}/>
    )}

    {/* SIMILAR MOVIES */}
    <h2 className="text-2xl capitalize">Similar Movies</h2>
    <br />
    <MovieGallery movies={similar}  />
    {/* <SimilarCard similar={similar}/> */}
   

    </div>
);
}