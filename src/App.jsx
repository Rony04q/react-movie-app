import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// src/App.jsx
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList'; // 1. Import MovieList

const API_KEY = '83b959d7';

function App() {
  const [movies, setMovies] = useState([]);

const handleSearch = async (searchTerm) => {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
  const data = await response.json();

  if (data.Search) {
    // This line removes any movies with a duplicate imdbID
    const uniqueMovies = data.Search.filter((movie, index, self) =>
      index === self.findIndex((m) => m.imdbID === movie.imdbID)
    );
    setMovies(uniqueMovies);
  } else {
    setMovies([]);
  }
};

  return (
    <div>
      <h1>🎬 My Movie App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} /> {/* 2. Use the component and pass the movies state */}
    </div>
  );
}

export default App;