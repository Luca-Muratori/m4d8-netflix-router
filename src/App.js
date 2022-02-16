import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import HomePage from './components/HomePage'
import MovieDetails from './components/MovieDetails'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TvShow from './components/TvShow'

const App =()=> {
  return(
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          {/* <Route path='/tv-show/' element={<TvShow/>}/> */}
          <Route path='/details/:movieID' element ={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;
