import { useContext } from "react"
import { useParams } from "react-router-dom"
import { MovieContext } from "../../main"

export const MovieDetail = () => {
  const { state } = useContext(MovieContext)
  const { movieId } = useParams()

  const foundMovie = state?.movies?.find(({id}) => id === Number(movieId))

  return (
    <div className="row shadow m-5 p-3 rounded-2">
      <div className="col-md-5">
        <img src={foundMovie.imageURL} className="w-100 rounded-2" />
      </div>
      <div className="col-md-7 mt-3">
        <h3 className="fw-bold">{foundMovie.title}</h3>
        <p>{foundMovie.summary}</p>
        <p>Year: {foundMovie.year}</p>
        <p>
          Genre: {foundMovie.genre.join(", ")}
        </p>
        <p>Rating: {foundMovie.rating}</p>
        <p>Director: {foundMovie.director}</p>
        <p>Writer: {foundMovie.writer}</p>
        <p>Cast: {foundMovie.cast.join(", ")}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-dark">Star</button>
          <button className="btn btn-dark">Add to Watchlist</button>
        </div>
      </div>
    </div>
  )
}