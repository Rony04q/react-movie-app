import { Link } from 'react-router-dom'; // 1. Import the Link component
import './MovieList.css';

function MovieList({ movies, loading, error }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        // 2. Wrap the card in a Link component
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
          <div className="movie-card">
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;