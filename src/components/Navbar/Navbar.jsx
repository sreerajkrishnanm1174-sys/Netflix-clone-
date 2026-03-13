import React, { useEffect, useState } from 'react'
import { FaHome ,FaSearch,FaPlus, FaTv} from 'react-icons/fa'
import {  FaClapperboard,FaArrowTrendUp,FaShuffle  } from "react-icons/fa6";
import Navlink from '../Link/Navlink'


function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setVisible(true);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setVisible(false);
      }, 2000); // hide after 2 seconds
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav
      className={`fixed bottom-4 left-0 right-0 flex justify-center z-50 px-3
      transition-all duration-500 ease-out
      ${visible
        ? "opacity-100 translate-y-0 "
        : "opacity-0 translate-y-6  pointer-events-none"
      }`}
    >
      <div
        className="flex items-center gap-6 py-3 px-8 rounded-full
        bg-white/10 border border-white/20 backdrop-blur-lg 
        shadow-lg
        transition-all duration-500
        relative overflow-hidden
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%]
        hover:before:translate-x-[100%]
        before:transition-transform before:duration-1000"
      >

        <Navlink to="/search" icon={FaSearch}/>
        <Navlink to="/" icon={FaHome}/>
        <Navlink to="/movie" icon={FaClapperboard}/>
        <Navlink to="/Tvseries" icon={FaTv}/>

      </div>
    </nav>


  )
}

export default Navbar