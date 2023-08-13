import { movies } from "../db/data";

export const initialState = {
  movies: JSON.parse(localStorage.getItem("movies")) || movies,
  starred: JSON.parse(localStorage.getItem("starred")) || [],
  watchList: JSON.parse(localStorage.getItem("watchList")) || [],
  filters: JSON.parse(localStorage.getItem("filters")) || {
    genre: "All",
    rating:"",
    year:"",
    searchParam: ""
  }
}

export const movieReducer = (state, action) => {
  switch(action.type){
    case "ADD_TO_STARRED":{
      return {...state, starred: [...state.starred, action.payload]}
    }
    case "REMOVE_FROM_STARRED":{
      console.log(action.payload)
      return {...state, starred: state.starred.filter(({id}) => id !== action.payload)}
    }
    case "ADD_TO_WATCHLIST":
      return {...state, watchList: [...state.watchList, action.payload]}
    case "REMOVE_FROM_WATCHLIST":
      return {...state, watchList: state.watchList.filter(({id}) => id !== action.payload)}
    case "GENRE_CHANGE":
      return {...state, filters: {...state.filters, genre: action.payload}}
    case "YEAR_CHANGE":
      return {...state, filters: {...state.filters, year: action.payload}}
    case "RATING_CHANGE":
      return {...state, filters: {...state.filters, rating: action.payload}}
    case "SEARCH_PARAM":
      return {...state, filters: {...state.filters, searchParam: action.payload}}
    case "ADD_MOVIE":
      return {...state, movies: [...state.movies, action.payload]}
    default:
      return state
  }
}