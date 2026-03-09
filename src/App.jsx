import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css"
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/Tv series/TvSeries";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie" element={<Movies/>} />
        <Route path="/Tvseries" element={<TvSeries/>} />
        <Route path="/search" element={<SearchBar/>} />
       
      </Routes>
    </>
  );
}

export default App;