import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";

function MoviesCardList({ movies, savedMovies }) {
  const [isShowMore, setIsShowMore] = React.useState(false);
  const [moviesPerPage, setMoviesPerPage] = React.useState(16);
  const [moviesPerLoad, setMoviesPerLoad] = React.useState(4);

  function showMoreMovies() {
    setMoviesPerPage((prevValue) => prevValue + moviesPerLoad);
  }

  React.useEffect(() => {
    if (movies.length <= moviesPerPage) {
      setIsShowMore(false);
    } else {
      setIsShowMore(true);
    }
  }, [movies.length, moviesPerPage]);

  return (
    <section className="movies-cardlist">
      <ul
        className={`movies-cardlist__container ${
          savedMovies && "movies-cardlist__container_saved"
        }`}
      >
        {movies.slice(0, moviesPerPage).map((movie) => {
          return <MoviesCard key={movie.id} movie={movie} />;
        })}
      </ul>
      <div
        className={`movie-cardlist__loader ${
          savedMovies && "movie-cardlist__loader_hide"
        }`}
      >
        {isShowMore && (
          <button
            type="button"
            className="movie-cardlist__loader-btn"
            onClick={showMoreMovies}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
