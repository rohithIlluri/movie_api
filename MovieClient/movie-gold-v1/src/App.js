import React from 'react';
import api from './api/axiosConfig';
import { useState,useEffect } from 'react';
import axios from 'axios';


function App() {

    const [movies, setMovies] = useState();
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);
  
    const getMovies = async () =>{
      
      try
      {
  
        const response = await api.get("/api/v1/movies");
  
        setMovies(response.data);
  
      } 
      catch(err)
      {
        console.log(err);
      }
    }
  

  
    useEffect(() => {
      getMovies();
    },[])

  return (
    <div>App</div>
  )
}

export default App;