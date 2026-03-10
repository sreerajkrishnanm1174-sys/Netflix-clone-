import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Maindiv from '../../components/Content divs/Maindiv'
import MovieGallery from '../../components/Content divs/MovieGallery'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrendingMovies,getPopularMovies,getTopRatedMovies } from '../../api/api';
import SlideBanner from '../../components/Banner/SlideBanner';

function Home() {


  const [TrendingmovieList, setTrendingMovieList] = useState([]);
  const [PopularmovieList, setPopularMovieList] = useState([]);
  const [TopRatedmovieList, setTopRatedMovieList] = useState([]);
  const type1="movie"
  const type2="tv"
  useEffect(() => {

    const fetchMovies = async () => {
      
      const trendingData = await getTrendingMovies(type2);
      const popularData = [...await getPopularMovies(type1), ...await getPopularMovies(type2)].sort(() => Math.random() - 0.5).slice(0, 10);
      const topRatedData =[...await getTopRatedMovies(type1), ...await getTopRatedMovies(type2)].sort(() => Math.random() - 0.5) ;
      
      

      setTrendingMovieList(trendingData);
      setPopularMovieList(popularData);
      setTopRatedMovieList(topRatedData);
    };

    fetchMovies();

  }, []);

  return (
    <>
        
      <div className='w-[100%] h-fit'>
        
          <SlideBanner movies={TopRatedmovieList} type={type1}/>
          <br />
            <h1 className='text-white text-4xl'>
              Top 10
          </h1>
          <br />
          <MovieGallery movies={PopularmovieList} type={type1} />
          <br />
            <h1 className='text-white text-4xl'>
              Tv series
          </h1>
          <br />
          <MovieGallery movies={TrendingmovieList} type={type2}/>
          <br />
          <br />
          
          
      </div>
  
    </>
   
  )
    
    
}


export default Home