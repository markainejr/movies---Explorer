import React from "react";
import MovieCard from "../components/MovieCard";

function Homepage() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Twilight", release_date: "2012" },
    { id: 3, title: "Bean", release_date: "1997" },
    { id: 4, title: "Madagascar", release_date: "2005" },
    { id: 5, title: "Sherlock Holmes", release_date: "2017" },
  ];
  
  return (
    <div className="Home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;