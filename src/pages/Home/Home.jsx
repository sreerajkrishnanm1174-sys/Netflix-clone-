import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Maindiv from '../../components/Content divs/Maindiv'
import MovieGallery from '../../components/Content divs/MovieGallery'

function Home() {
  return (
    <>
        <div className='flex '>
            <Navbar/>
            <div className='pl-20'>
                <Maindiv
                title="Money Heist"
                src="/Images/Banner/money-heist-season-5.jpg"
                className="relative top-0 h-[500px]  w-screen uppercase"
                >
                <p>2B+streames</p>
                <br />
                </Maindiv>
                <br />
                 <h1 className='text-white text-4xl'>
                    Top 10
                </h1>
                <br />
                <MovieGallery movies={movies} />;
                <br />
                 <h1 className='text-white text-4xl'>
                    New Releases
                </h1>
                <br />
                <MovieGallery movies={movies} />;
               
            </div>
        </div>
    </>
   
  )
    
    
}

const movies = [
  { title: "Inception", rating: "8.8", imageSrc: "/Images/Posetrs/inception.jpg" },
  { title: "Interstellar", rating: "8.6", imageSrc: "/Images/Posetrs/interstellar.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" },
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" }, 
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" }, 
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" }, 
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" }, 
  { title: "Tenet", rating: "7.4", imageSrc: "/Images/Posetrs/tenet.jpg" }, 
];

export default Home