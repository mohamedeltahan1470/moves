
import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./Reducer";

const initialState = {
  watchlist: localStorage.getItem("Watchlist") ? JSON.parse(localStorage.getItem("Watchlist")) : [],
  watched: localStorage.getItem("Watched") ? JSON.parse(localStorage.getItem("Watched")) : [],
};

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    localStorage.setItem("Watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("Watched", JSON.stringify(state.watched));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useMovieContext = () => {
  return useContext(GlobalContext);
};