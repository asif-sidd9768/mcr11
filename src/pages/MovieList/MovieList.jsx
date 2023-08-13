import { useContext } from "react"

import { MovieContext } from "../../main"
import { MovieFilters } from "../../components/MovieFilters"
import { MovieCard } from "../../components/MovieCard"
import { getFilteredMovies } from "../../utils/getFilteredMovies"

export const MovieList = () => {
  const { state } = useContext(MovieContext)

  const filteredMovies = state.filters.searchParam === "" ? getFilteredMovies(state) :getFilteredMovies(state).filter(({title, cast, director}) => {
    const searchTerm = state.filters.searchParam.toLowerCase()
    const updatedTitle = title.toLowerCase()
    const updatedDirector = director.toLowerCase()
    const updatedCast = cast.map(c => c.toLowerCase())
    if(updatedTitle.includes(searchTerm) || updatedCast.includes(searchTerm) || updatedDirector.includes(searchTerm)){
      return true
    }
  })

  return (
    <div className="row">
      <MovieFilters />
      {
        filteredMovies.length > 0 ? <>
          {
            filteredMovies.map(movie => 
              <MovieCard key={movie.id} movie={movie} />
            )
          }
        </> : <h3>Nothing to show...</h3>
      }
    </div>
  )
}

{/* // <div key={movie.id} className="col-md-3 shadow-sm m-3 p-0 rounded-2" onClick={() => handleMovieClick(movie.id)}>
            <img src={movie.imageURL} className="w-100 rounded-2"  />
            <h4 className="text-center mt-1">{movie.title}</h4>
            <p className="mx-1">{movie.summary}</p>
            <div className="d-flex justify-content-between">
              <button>Star</button>
              <button>Add to Watchlist</button>
            </div>
          </div>   */}