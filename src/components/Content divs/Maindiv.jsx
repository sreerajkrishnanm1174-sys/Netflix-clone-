import React from "react";
import NormalBtn from "../Buttons/NormalBtn";

function Maindiv({ title, src ,className,children }) {
  return (
    <main className={`${className} `} >
      <section className="w-full h-full">
        <img
          src={src}
          alt="Featured movie banner"
          className="w-full h-full "
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,transparent_10%,rgba(0,0,0,0.8)_100%)]"></div>

        <div className="absolute bottom-10 left-20  text-white">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
            {children}
          <div className="flex space-x-4">
            <NormalBtn className="bg-red-500 text-white hover:bg-black " >Play</NormalBtn>
            <NormalBtn className="bg-white text-black hover:bg-gray-400 " >Watch trailer</NormalBtn>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Maindiv;