import React from "react";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie, index) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt="movie poster" />
        </div>
      ))}
    </>
  );
}

export default MovieList;
