export const getFilteredMovies = (state) => {
  return state?.movies?.filter((movie) => {
    const genreFilter = state.filters.genre === "All" || movie.genre.includes(state.filters.genre);
    const yearFilter = !state.filters.year || movie.year === parseInt(state.filters.year);
    const ratingFilter = !state.filters.rating || movie.rating >= parseInt(state.filters.rating);

    return genreFilter && yearFilter && ratingFilter;
  });
}