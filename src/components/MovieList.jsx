import './MovieList.css';   

function MovieList({ movies, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;