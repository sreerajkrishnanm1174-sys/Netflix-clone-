import React from 'react'
import { FaHome ,FaSearch,FaPlus, FaTv} from 'react-icons/fa'
import {  FaClapperboard,FaArrowTrendUp,FaShuffle  } from "react-icons/fa6";
import Navlink from '../Link/Navlink'


function Navbar() {
  return (
    <nav className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-3">
      <div className="flex items-center gap-6 py-3 px-8 rounded-full
                      bg-white/10 backdrop-blur-md border border-white/20
                      shadow-lg
                      relative overflow-hidden
                      before:absolute before:inset-0
                      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                      before:translate-x-[-100%]
                      hover:before:translate-x-[100%]
                      before:transition-transform before:duration-1000">

          <Navlink to="/search" icon={FaSearch}/>
          <Navlink to="/" icon={FaHome}/>
          <Navlink to="/movie" icon={FaClapperboard}/>
          <Navlink to="/Tvseries" icon={FaTv}/>
          {/* <Navlink to="/home" icon={FaArrowTrendUp}/>
          <Navlink to="/home" icon={FaShuffle}/> */}
          
      </div>
    </nav>


  )
}

export default Navbar