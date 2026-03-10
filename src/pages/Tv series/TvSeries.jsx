import React, { useEffect } from 'react';
import { useState } from 'react'
import SlideBanner from '../../components/Banner/SlideBanner';
import MovieGallery from '../../components/Content divs/MovieGallery';
import Navbar from '../../components/Navbar/Navbar';
import { getPopularMovies, getTopRatedMovies, getTrendingMovies } from '../../api/api';

function TvSeries() {
  const [TrendingmovieList, setTrendingMovieList] = useState([]);
  const [PopularmovieList, setPopularMovieList] = useState([]);
  const [TopRatedmovieList, setTopRatedMovieList] = useState([]);
  const type="tv"
  
    useEffect(() => {
    
        const fetchMovies = async () => {
          
          const trendingData = await getTrendingMovies(type);
          const popularData = (await getPopularMovies(type)).slice(0, 10);
          const topRatedData = await getTopRatedMovies(type);
          
          
    
          setTrendingMovieList(trendingData);
          setPopularMovieList(popularData);
          setTopRatedMovieList(topRatedData);
        };
    
        fetchMovies();
    
      }, []);
    
  return (
  
    <div className='w-[100%] '>
          
        <SlideBanner movies={TopRatedmovieList} type={type}/>
        <br />
          <h1 className='text-white text-4xl'>
            Top 10
        </h1>
        <br />
        <MovieGallery movies={PopularmovieList} type={type} />
        <br />
          <h1 className='text-white text-4xl'>
            Trending
        </h1>
        <br />
        <MovieGallery movies={TrendingmovieList} type={type}/>
        <br />
        <br />
        <br />
        
    </div>
    
  )
}

export default TvSeries