import MovieCard from "./Moviecard";


function MovieList (props) {
    // const {title, plot,poster, price, rating, stars, fav, addCart} = this.state.movies

    const { movies, addStars, decStars, handleFav, handleCart } = props;

    return (
      <>
        {movies.map((movie) => <MovieCard movies={movie}
                                          addStars={addStars}
                                          decStars={decStars}
                                          handleFav={handleFav}
                                          handleCart={handleCart}
                                          key={movie.id} />)}

      </>
    )
  }

export default MovieList;