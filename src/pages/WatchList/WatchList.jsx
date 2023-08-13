import { useContext } from "react"
import { MovieContext } from "../../main"
import { MovieCard } from "../../components/MovieCard";

export const WatchList = () => {
  const { state } = useContext(MovieContext)

  if(state?.watchList.length < 1){
    return <h3 className="text-center">Empty Watchlist</h3>
  }
  return (
    <div>
      <h3>WatchList</h3>
      <div className="row">
      {
        state?.watchList?.map(movie =>
          <MovieCard key={movie.id} movie={movie} />
        )
      }
      </div>
    </div>
  )
}