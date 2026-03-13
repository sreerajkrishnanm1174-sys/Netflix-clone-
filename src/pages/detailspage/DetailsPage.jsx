import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL, getMovieTrailer } from "../../api/api";
import { useParams } from "react-router-dom";
import Trailer from "../Trailer/Trailer";
import ActorsCard from "../../components/moviecard/ActorsCard";
import MovieGallery from "../../components/Content divs/MovieGallery";
import NormalBtn from "../../components/Buttons/NormalBtn";
import MoviedetailsHero from "../../components/herosection/MoviedetailsHero";
import Paginationdiv from "../../components/Content divs/Paginationdiv";



export default function DetailsPage() {
    const { type,id } = useParams();
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    useEffect(() => {
    const getTrailer = async () => {
        const key = await getMovieTrailer(id, type);
        setTrailer(key);
    };

    getTrailer();
    }, [id, type]);
        
    useEffect(() => {
        fetchMovie();
        fetchCast();
        fetchSimilar();
    }, [id,page]);

    const fetchMovie = async () => {
        const res = await axios.get(
        `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`
        );
        setMovie(res.data);
    };

    const fetchCast = async () => {
        const res = await axios.get(
        `${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}`
        );
        setCast(res.data.cast.slice(0, 10));
    };

    const fetchSimilar = async () => {
        const res = await axios.get(
            `${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&page=${page}`
        );

        setSimilar(res.data.results.slice(0, 7));
        // setTotalPages(res.data.total_pages);
    };


    return (
        <div className="text-white overflow-hidden">

        {/* HERO SECTION */}
            <MoviedetailsHero movie={movie} trailer={trailer}/>

        {/* MOVIE DETAILS */}
            <div className="p-10 grid md:grid-cols-2 gap-8">

                <div>
                <h2 className="text-2xl font-semibold mb-4">Details</h2>

                <p><span className="text-gray-400">Status:</span> {movie.status}</p>
                
                <p><span className="text-gray-400">Language:</span> {movie?.original_language
                ? new Intl.DisplayNames(['en'], { type: 'language' }).of(movie.original_language)
                : ""}
                </p>
                <p><span className="text-gray-400">Budget:</span> {movie.budget ==0 ? "Not disclosed" : `$ ${movie.budget}` }</p>
                <p><span className="text-gray-400">Revenue:</span> {movie.revenue ==0 ? "Not disclosed" : `$ ${movie.revenue}` }</p>
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
                <Trailer id={trailer} className="h-[500px]"/>
            )}

            {/* SIMILAR MOVIES */}
            <br />
            <h2 className="pl-10 text-2xl capitalize">Similar</h2>
            <br />
            <MovieGallery movies={similar} showButtons = {false}  />
            <Paginationdiv page={page} 
                setPage={setPage} 
                totalPages={totalPages}
            />
            <br />
            <br />
            <br />
            
            

            {/* <SimilarCard similar={similar}/> */}
    

        </div>
    );
}