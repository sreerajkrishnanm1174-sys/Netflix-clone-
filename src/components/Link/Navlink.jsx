import React from 'react'
import { NavLink } from "react-router-dom";

function Navlink( {to, icon: Icon}) {
  return (
    <NavLink
      to={to}
      className="group relative flex flex-col items-center text-2xl "
    >
      {({ isActive }) => (
        <>
          <Icon className={ isActive ? "text-red-500" : "text-white group-hover:text-red-500   " } />

          <span
            className={`absolute -bottom-1 h-[2px] w-full bg-red-500 origin-center transform transition-transform duration-300
            ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
          ></span>
        </>
      )}
    </NavLink>
  )
}

export default Navlink