import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";

const INITITAL_STATE = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext(INITITAL_STATE);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, INITITAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
