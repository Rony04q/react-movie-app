import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

// This securely reads your API key from the .env file
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
  const defaultSearches = ['Batman', 'Avengers', 'Star Wars', 'Shrek'];
  const randomIndex = Math.floor(Math.random() * defaultSearches.length);
  const randomTerm = defaultSearches[randomIndex];
  
  handleSearch(randomTerm);
}, []);
  // Fetch movies based on the search term  
  
  const handleSearch = async (searchTerm) => {
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <div>
      <h1>🎬 My Movie App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} loading={loading} />
    </div>
  );
}

export default App;