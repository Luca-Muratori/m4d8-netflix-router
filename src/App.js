import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import HomePage from './compenents/HomePage'
import { Container, Alert, Dropdown } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MovieList from "./components/MovieList";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App =()=> {
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/tv-show' element={<TvShow/>}/>
      <Route path='/details/:movieID' element ={<MovieDetails/>}/>
    </Routes>
  <BrowserRouter/>
}

export default App;
