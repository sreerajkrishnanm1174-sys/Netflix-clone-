import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css"
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/Tv series/TvSeries";
import SearchBar from "./components/SearchBar/SearchBar";
import MainLayout from "./layout/mainlayout/MainLayout";
import DetailsPage from "./pages/detailspage/DetailsPage";

function App() {
  return (
    <>
      <Routes >
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/Tvseries" element={<TvSeries/>} />
          <Route path="/search" element={<SearchBar/>} />
          <Route path="/moviedetail/:type/:id" element={<DetailsPage />} />
        </Route>
        
       
      </Routes> 
    </>
  );
}

export default App;