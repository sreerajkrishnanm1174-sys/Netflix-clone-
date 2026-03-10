import React from 'react'

function NormalBtn({ children, className, onClick }) {
  return (
    <button
      className={`px-11 py-3 rounded-4xl font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default NormalBtn;