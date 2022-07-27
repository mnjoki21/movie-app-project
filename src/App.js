import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  const [movies, setMovies] = useState([]);


  const getMovies = async () => {
    const response = await fetch("http://localhost:5000/movies");
    const data = await response.json();
    setMovies (data)
  }
}




export default App;
