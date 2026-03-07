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

  useEffect(() => {

    const fetchMovies = async () => {
      const trendingData = await getTrendingMovies();
      const popularData = await getPopularMovies();
      const topRatedData = await getTopRatedMovies();
      
      

      setTrendingMovieList(trendingData);
      setPopularMovieList(popularData);
      setTopRatedMovieList(topRatedData);
    };

    fetchMovies();

  }, []);

  return (
    <>
        <div className='flex '>
            <Navbar/>
            <div className='pl-20   w-[100%] '>
              
                <SlideBanner movies={TopRatedmovieList}/>
                <br />
                 <h1 className='text-white text-4xl'>
                    Top 10
                </h1>
                <br />
                <MovieGallery movies={PopularmovieList} />
                <br />
                 <h1 className='text-white text-4xl'>
                    New Releases
                </h1>
                <br />
                <MovieGallery movies={TrendingmovieList} />
                <br />
               
            </div>
        </div>
    </>
   
  )
    
    
}


export default Home