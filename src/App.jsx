
import './css/App.css'
import Fav from './pages/Favorites';
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
  <MovieProvider>
    <Navbar />
    <main className='main-content'>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Fav />}/>
      </Routes>
    </main>
   </MovieProvider>
  );
}


export default App;
