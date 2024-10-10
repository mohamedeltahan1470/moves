
import React from "react";
import "./ResultCard.css";
import * as actions from "./context/ActionTypes";
import { useMovieContext } from "./context/GlobalContext";

const ResultCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storedMoviewatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );
  const WatchlistDisabled = storedMovie || storedMoviewatched ? true : false; // Simplified logic
  const WatchedDisabled = storedMoviewatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title"> {movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST, // Fixed action type
                payload: movie,
              })
            }
            className="btn"
            disabled={WatchlistDisabled}
          >
            Add to Watchlist
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="btn"
            disabled={WatchedDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
