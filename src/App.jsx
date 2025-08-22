import MovieCard from './components/MovieCard'
import Homepage from './pages/Home';
import './App.css'

function App() {
  
  return( 
  <>
  <Homepage/>

  </>
);
}
export default App






/*
Conditional Rendering

function App() {
  const movieNumber = 1;
  return( 
  <>
  {movieNumber === 1 ? 
  (<MovieCard movie = {{title: "Tim 's Film", release_date: "2024"}}  />
  ) : (
  <MovieCard movie = {{title: "Joe 's Film", release_date: "2025"}}/>
  )}

  </>
);
}
export default App
*/

