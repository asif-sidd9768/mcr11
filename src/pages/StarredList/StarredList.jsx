import { useContext } from "react"
import { MovieContext } from "../../main"
import { MovieCard } from "../../components/MovieCard"

export const StarredList = () => {
  const {state} = useContext(MovieContext)

  if(state?.starred.length < 1){
    return <h3 className="text-center">Nothing to show...</h3>
  }

  return (
    <div>
      <h3>Starred Movies</h3>
      <div className="row">
      {
        state?.starred?.map(movie =>
          <MovieCard key={movie.id} movie={movie} />
        )
      }
      </div>
    </div>
  )
}