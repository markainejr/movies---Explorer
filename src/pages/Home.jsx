import React from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Homepage() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Twilight", release_date: "2012" },
    { id: 3, title: "Bean", release_date: "1997" },
    { id: 4, title: "Madagascar", release_date: "2005" },
    { id: 5, title: "Sherlock Holmes", release_date: "2017" },
  ];

  function handleSearch(e){
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("")

  }
  
  return (
    <div className="Home">
      <form onSubmit = {handleSearch} classname = "search-form">
        <input type = "text" placeholder = "Search for movies" className = "search-input" value = {searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type = "onSubmit" classNmae ="search-btn"> Search</button>
      </form>
      
      <div className="movies-grid">
        {movies.map((movie) => (
       <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;


//  movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />