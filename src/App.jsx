import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorite';
import Homepage from './pages/Home';
import {Routes, Route} from "react-router-dom"
import './App.css'

function App() {
  
  return( 
  <>
  <main className='main-content'>
    <Routes>
      <Route path="/" element = {<Homepage/>}/>
      <Route path="/favorites" element = {<Favorites/>}/>
    </Routes>

  </main>
  

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

