import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import {useState ,useEffect} from "react";
//afeac97c
import MovieCard from './movieCard';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=afeac97c';


const App = ()=>{

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title)=>{
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json();
  setMovies(data.Search);
  }
useEffect(()=>{

    searchMovies('Marvel');

},[]);
const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        searchMovies(searchTerm);
    }
};
return(
<div className="app">
    <h1>MovieVerse</h1>

<h1><BiSolidCameraMovie color="#f9d3b0"/></h1>

    <div className="search">
        <input placeholder="Search for movies"
        value={searchTerm}
        onKeyDown={handleKeyPress}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon}
         alt="search"
        onClick={()=> searchMovies(searchTerm)}
        />
        
    </div>
    
    {
        movies?.length > 0
        ? (
           
           <div className="container"> 
           {movies.map((movie) =>(
            <MovieCard movie = {movie} />
           ))}
           </div>
         ) : (
             <div className="empty">
                <h2>No Movies found</h2>
             </div>
         )
    }      
    

       </div>
);

}
export default App;