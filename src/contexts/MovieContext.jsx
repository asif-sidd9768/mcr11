import { createContext, useEffect, useReducer } from "react";
import { initialState, movieReducer } from "../reducers/movieReducer";

export const MovieContext = createContext()
export const MovieProvider = ({children}) => {
  const [state, dispatch] = useReducer(movieReducer, initialState)

  useEffect(() => {
    if(localStorage.getItem("movies")){
      console.log('hello');
    }else {
      localStorage.setItem("movies", JSON.stringify(state.movies))
      localStorage.setItem("watchList", JSON.stringify(state.watchList))
      localStorage.setItem("starred", JSON.stringify(state.starred))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(state.movies))
    localStorage.setItem("watchList", JSON.stringify(state.watchList))
    localStorage.setItem("starred", JSON.stringify(state.starred))
  }, [state.movies, state.watchList, state.starred])


  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(state.filters))
  }, [state.filters])

  return (
    <MovieContext.Provider value={{state, dispatch}}>
      {children}
    </MovieContext.Provider>
  )
}