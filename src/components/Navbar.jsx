import { useContext } from "react"
import {NavLink} from "react-router-dom"
import { MovieContext } from "../main"
import { handleSearchAction } from "../actions/movieActions"

export const Navbar = () => {
  const { state, dispatch } = useContext(MovieContext)
  const handleSearch = (event) => {
    dispatch(handleSearchAction(event.target.value))
  }

  return (
    <div className="d-flex justify-content-between px-4 py-2 bg-dark w-100">
      <>
        <h3 className="fw-bold text-light">IMDB</h3>
      </>
      <>
        <input onChange={handleSearch} value={state.filters.searchParam} placeholder="Search movies by title, cast, and director..." className="w-50 form-text" />
      </>
      <div className="pt-2">
        <NavLink to="/" className="text-decoration-none text-white pe-3">Movies</NavLink>
        <NavLink to="/watch-list" className="text-decoration-none text-white pe-3">Watch List</NavLink>
        <NavLink to="/starred-list" className="text-decoration-none text-white pe-2">Starred Movies</NavLink>
      </div>
    </div>
  )
}