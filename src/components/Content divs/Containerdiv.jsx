import React from 'react'

function Containerdiv({children}) {
  return (
    <div className="container mx-auto max-w-[114rem]">
        {children}
    </div>
  )
}

export default Containerdiv