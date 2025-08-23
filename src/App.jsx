import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar';
import Favorites from './pages/Favorite';
import Homepage from './pages/Home';
import {Routes, Route} from "react-router-dom"
import './css/App.css'

function App() {
  
  return( 
  <>
  <Navbar/>
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

