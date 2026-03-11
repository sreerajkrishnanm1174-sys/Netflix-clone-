import React from 'react'

function Modal({children,onClose} ) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose} // click outside closes modal
    >
      <div
        className="relative w-[90%] max-w-4xl bg-black rounded-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
        >
          ✕
        </button>
        {children}
        
      </div>
    </div>
  );
}

export default Modal