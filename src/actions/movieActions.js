export const addToStarredAction = (movie) => ({
  type:"ADD_TO_STARRED",
  payload: movie
})

export const removeFromStarredAction = (movieId) => ({
  type:"REMOVE_FROM_STARRED",
  payload: movieId
})

export const addToWatchlistAction = (movie) => ({
  type:"ADD_TO_WATCHLIST",
  payload: movie
})

export const removeFromWatchlistAction = (movieId) => ({
  type:"REMOVE_FROM_WATCHLIST",
  payload: movieId
})

export const genreChangeAction = (genre) => ({
  type:"GENRE_CHANGE",
  payload: genre
})

export const yearChangeAction = (year) => ({
  type:"YEAR_CHANGE",
  payload:year
})

export const ratingChangeAction = (rating) => ({
  type:"RATING_CHANGE",
  payload:rating
})

export const addMovieAction = (movieData) => ({
  type:"ADD_MOVIE",
  payload: movieData
})

export const handleSearchAction = (searchParam) => ({
  type:"SEARCH_PARAM",
  payload: searchParam
})