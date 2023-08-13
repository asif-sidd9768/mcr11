import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MovieContext } from "../main"
import { addToStarredAction, addToWatchlistAction, removeFromStarredAction, removeFromWatchlistAction } from "../actions/movieActions"

export const MovieCard = ({movie}) => {
  const {state, dispatch} = useContext(MovieContext)
  const navigate = useNavigate()

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`)
  }

  const checkStarred = (movieId) => {
    return state.starred.find(({id}) => id === movieId) 
  }

  const checkWatchlist = (movieId) => {
    return state.watchList.find(({id}) => id === movieId)
  }

  const handleStarClick = (event, movie) => {
    event.stopPropagation()
    if(checkStarred(movie.id)){
      dispatch(removeFromStarredAction(movie.id))
    }else{
      dispatch(addToStarredAction(movie))
    }
  }

  const handleWatchlistClick = (event, movie) => {
    event.stopPropagation()
    if(checkWatchlist(movie.id)){
      dispatch(removeFromWatchlistAction(movie.id))
    }else{
      dispatch(addToWatchlistAction(movie))
    }
  }

  return (
    <>
      <div key={movie.id} className="col-md-3 m-3 shadow p-0 rounded-2" onClick={() => handleMovieClick(movie.id)}>
  <div className="d-flex flex-column h-100">
    <img src={movie.imageURL} className="w-100 rounded-2 h-75" alt="Movie" />
    <div className="card-body d-flex flex-column flex-grow-1">
      <h5 className="card-title text-center fw-bold mt-2">{movie.title}</h5>
      <p className="card-text mx-2 my-3">{movie.summary}</p>
      <div className="mt-auto d-flex justify-content-between mx-3 mb-3">
        <button onClick={(event) => handleStarClick(event, movie)} className="btn btn-dark">{checkStarred(movie.id) ? "Unstar": "Star"}</button>
        <button onClick={(event) => handleWatchlistClick(event, movie)} className="btn btn-dark btn-sm">{checkWatchlist(movie.id) ? "Remove from Watchlist" : "Add to Watchlist"}</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}