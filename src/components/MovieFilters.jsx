import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MovieContext } from "../main"
import { genreChangeAction, ratingChangeAction, yearChangeAction } from "../actions/movieActions";

export const MovieFilters = () => {
  const {state, dispatch} = useContext(MovieContext)
  const navigate = useNavigate()

  const getUniqueGenres = (movies) => [...new Set(movies.flatMap(movie => movie.genre))];
  const yearArray = Array.from({ length: 2023 - 1990 + 1 }, (_, index) => 1990 + index);
  const numberArray = Array.from({ length: 10 - 1 + 1 }, (_, index) => 1 + index);

  const uniqueGenres = getUniqueGenres(state.movies);

  const handleGenreChange = (event) => {
    dispatch(genreChangeAction(event.target.value))
  }

  const handleYearChange = (event) => {
    dispatch(yearChangeAction(event.target.value))
  }

  const handleRatingChange = (event) => {
    dispatch(ratingChangeAction(event.target.value))
  }

  return (
    <div className="d-flex justify-content-between my-3">
      <h5>Movies</h5>
      <select onChange={handleGenreChange} defaultValue={state.filters.genre}>
        <option value="All">All Genre</option>
        {
          uniqueGenres.map(genre => 
            <option key={genre}>{genre}</option>  
          )
        }
      </select>
      <select onChange={handleYearChange} defaultValue={state.filters.year}>
        <option value="">Release Year</option>
        {
          yearArray.map(year => 
            <option key={year}>{year}</option>  
          )
        }
      </select>
      <select onClick={handleRatingChange} defaultValue={state.filters.rating}>
        <option value="">Rating</option>
        {
          numberArray.map(num =>
            <option key={num}>{num}</option>  
          )
        }
      </select>
      <button className="btn btn-dark" onClick={() => navigate('/movies/add')}>Add Movie</button>
    </div>
  )
}