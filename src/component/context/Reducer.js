
import * as actions from "./ActionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST: // Fixed typo in the action type
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload // Corrected to 'imdbID'
        ),
      };
    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID // Fixed filtering for watched movies
        ),
        watchlist: [action.payload, ...state.watchlist],
      };

    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter( // Fixed filtering for watched movies
          (movie) => movie.imdbID !== action.payload // Corrected to 'imdbID'
        ),
      };
    default:
      return state;
  }
};
