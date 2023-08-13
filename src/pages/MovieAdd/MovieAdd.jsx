import { useContext } from "react";
import { useNavigate } from "react-router-dom"

import { MovieContext } from "../../main";
import { addMovieAction } from "../../actions/movieActions";

export const MovieAdd = () => {
  const {state, dispatch} = useContext(MovieContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const movieData = {
      id: state.movies[state.movies.length - 1].id + 1,
      title: formData.get("title"),
      year: parseInt(formData.get("year")),
      genre: formData.get("genre").split(","),
      rating: parseInt(formData.get("rating")),
      director: formData.get("director"),
      writer: formData.get("writer"),
      cast: formData.get("cast").split(","),
      summary: formData.get("summary"),
      imageURL: formData.get("imageURL"),
    };
    dispatch(addMovieAction(movieData))
    navigate("/", {replace: true})
  }

  return (
    <div className="mx-auto w-75">
      <h3 className="text-center">Add Movie</h3>
      <form onSubmit={handleSubmit} className="mb-5">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" />
          </div>

          <div className="mb-3">
            <label htmlFor="year" className="form-label">Year</label>
            <input type="number" className="form-control" id="year" step="any" name="year" />
          </div>

          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre (comma-separated)</label>
            <input type="text" className="form-control" id="genre" name="genre" />
          </div>

          <div className="mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <input type="number" className="form-control" id="rating" step="any" name="rating" />
          </div>

          <div className="mb-3">
            <label htmlFor="director" className="form-label">Director</label>
            <input type="text" className="form-control" id="director" name="director" />
          </div>

          <div className="mb-3">
            <label htmlFor="writer" className="form-label">Writer</label>
            <input type="text" className="form-control" id="writer" name="writer" />
          </div>

          <div className="mb-3">
            <label htmlFor="cast" className="form-label">Cast (comma-separated)</label>
            <input type="text" className="form-control" id="cast" name="cast" />
          </div>

          <div className="mb-3">
            <label htmlFor="summary" className="form-label">Summary</label>
            <input type="text" className="form-control" id="summary" name="summary" />
          </div>

          <div className="mb-3">
            <label htmlFor="imageURL" className="form-label">Image URL</label>
            <input type="text" className="form-control" id="imageURL" name="imageURL" />
          </div>

          <button type="submit" className="btn btn-dark mb-3 mt-3 w-100">Add Movie</button>
        </form>
    </div>
  )
}