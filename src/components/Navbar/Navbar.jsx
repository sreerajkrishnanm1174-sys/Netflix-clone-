import React from 'react'
import { FaHome ,FaSearch,FaPlus, FaTv} from 'react-icons/fa'
import {  FaClapperboard,FaArrowTrendUp,FaShuffle  } from "react-icons/fa6";
import Navlink from '../Link/Navlink'


function Navbar() {
  return (
    <nav className="fixed z-50 bottom-0 left-0 w-full h-16 bg-black 
                flex items-center justify-around
                sm:top-0 sm:left-0 sm:h-screen sm:w-20 
                sm:flex-col sm:justify-center ">
      <div className="flex flex-row items-center space-x-6
                    sm:flex-col sm:space-x-0 sm:space-y-10">
        <Navlink to="/search" icon={FaSearch}/>
        <Navlink to="/" icon={FaHome} />
        <Navlink to="/movie" icon={FaClapperboard }/>
        <Navlink to="/Tvseries" icon={FaTv }/>
        {/* <Navlink to="/home" icon={FaArrowTrendUp }/>
        <Navlink to="/home" icon={FaShuffle  }/> */}

      </div>
    </nav>


  )
}

export default Navbar