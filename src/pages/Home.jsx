import React, { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Homepage() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies on first render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally { 
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

 function handleSearch(e){ 
  e.preventDefault();
   alert(searchQuery); 
   setSearchQuery("") 
  }

  return (
    <div className="Home">
    
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Search for movies" 
          className="search-input" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type = "onSubmit" className ="search-btn"> Search</button>
      </form>

    
      {error && <div className="error-message">{error}</div>}
      
    
     {loading ? (
  <div className="Loading">Loading...</div>
) : (
  <div className="movies-grid">
    {movies.map((movie) => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
)}

    </div>
  );
}

export default Homepage;
