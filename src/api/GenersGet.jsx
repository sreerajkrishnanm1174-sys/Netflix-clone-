import React,{useState,useEffect}from 'react'
import { getGenerMovies } from './api';


function GenersGet({genre_ids,type}) {
  
    const [genres, setGenres] = useState([]);
    
    useEffect(() => {
    async function fetchGenres() {
        const data = await getGenerMovies(type);
        setGenres(data);
    }

    fetchGenres();
    }, []);
  return (
    <p className="text-sm">
        Genre: {genre_ids
        ?.map(id => genres.find(g => g.id === id)?.name)
        .filter(Boolean)
        .join(", ")}
    </p>
  
    )
}

export default GenersGet