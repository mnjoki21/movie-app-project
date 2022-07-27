import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './/components/MovieList'


const App = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5000/movies`)
      .then((res) => res.json())
    .then((data) =>setMovies(data))
  },[])




  
  
  

  return (
    <MovieList movies={movies} />
  )

  
}




export default App;
