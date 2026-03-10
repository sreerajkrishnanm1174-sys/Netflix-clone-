import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";

export function RightBtn({scrollRef}) {
    const scrollRight = () => {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    };
  return (
    <button
        onClick={scrollRight}
        className="absolute right-0 z-20 opacity-0 group-hover:opacity-100 h-full w-20 transition-opacity duration-300  text-white "
    >
        <span><FontAwesomeIcon icon={faArrowRight} className='text-2xl' /></span>
    </button>
    
  )
}

 


export function LeftBtn({scrollRef}) {
    const scrollLeft = () => {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    };
  return (
     <button
          onClick={scrollLeft}
          className="absolute left-0 z-20 opacity-0 group-hover:opacity-100 h-full w-20 transition-opacity duration-300  text-white "
    >
        <span><FontAwesomeIcon icon={faArrowLeft} className='text-2xl' /></span>
    </button>
  )
}

