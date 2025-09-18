import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`);
      const data = await response.json();
      setMovieDetails(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [movieId]); // Re-run this effect if the movieId changes

  if (loading) {
    return <div>Loading details...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <p>{movieDetails.Plot}</p>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <p>Year: {movieDetails.Year}</p>
      <p>Rated: {movieDetails.Rated}</p>
    </div>
  );
}

export default MovieDetailsPage;