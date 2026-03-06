import React from 'react'

function NormalBtn({children,className}) {
  return (
    <button className={ `px-11 py-3 rounded-4xl font-semibold  ${className}`}>
           {children}     
    </button>
  )
}

export default NormalBtn