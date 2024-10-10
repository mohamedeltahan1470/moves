
import React from "react";
import "./MovieCard.css";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
