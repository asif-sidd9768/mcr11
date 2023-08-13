import { Routes, Route, NavLink } from "react-router-dom"

import './App.css'
import { MovieList } from "./pages/MovieList/MovieList"
import { MovieDetail } from "./pages/MovieDetail/MovieDetail"
import { WatchList } from "./pages/WatchList/WatchList"
import { StarredList } from "./pages/StarredList/StarredList"
import { Navbar } from "./components/Navbar"
import { MovieAdd } from "./pages/MovieAdd/MovieAdd"

function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" m-3">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:movieId" element={<MovieDetail />} />
          <Route path="/watch-list" element={<WatchList />} />
          <Route path="/starred-list" element={<StarredList />} />
          <Route path="/movies/add" element={<MovieAdd />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
