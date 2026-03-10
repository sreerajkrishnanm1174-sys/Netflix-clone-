import React from 'react'
import { FaHome ,FaSearch,FaPlus, FaTv} from 'react-icons/fa'
import {  FaClapperboard,FaArrowTrendUp,FaShuffle  } from "react-icons/fa6";
import Navlink from '../Link/Navlink'


function Navbar() {
  return (
    <nav className="fixed z-50 top-0 left-0 h-screen w-20 bg-black flex flex-col items-center justify-center ">
      <div className='flex flex-col space-y-10 '>
        <Navlink to="/search" icon={FaSearch}/>
        <Navlink to="/" icon={FaHome} />
        <Navlink to="/movie" icon={FaClapperboard }/>
        <Navlink to="/Tvseries" icon={FaTv }/>
        <Navlink to="/home" icon={FaArrowTrendUp }/>
        <Navlink to="/home" icon={FaShuffle  }/>

      </div>
    </nav>


  )
}

export default Navbar