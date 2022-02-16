import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import HomePage from './components/HomePage'
import MovieDetails from './components/MovieDetails'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App =()=> {
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      {/* <Route path='/tv-show' element={<TvShow/>}/> */}
      <Route path='/details/:movieID' element ={<MovieDetails/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
