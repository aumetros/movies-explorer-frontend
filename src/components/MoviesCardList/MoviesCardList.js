import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, savedMovies, onLoading, onErrorServer }) {
  const [isShowMore, setIsShowMore] = React.useState(false);
  const [moviesPerPage, setMoviesPerPage] = React.useState(16);
  const [moviesPerLoad, setMoviesPerLoad] = React.useState(4);
  const [width, setWidth] = React.useState(window.innerWidth);

  function showMoreMovies() {
    setMoviesPerPage((prevValue) => prevValue + moviesPerLoad);
  }

  function handleResizeWindow() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  React.useEffect(() => {
    if (width > 768) {
      setMoviesPerPage(16);
      setMoviesPerLoad(4);
    } else if (width <= 768 && width > 480) {
      setMoviesPerPage(8);
      setMoviesPerLoad(2);
    } else if (width <= 480) {
      setMoviesPerPage(5);
      setMoviesPerLoad(2);
    }
  }, [width]);

  React.useEffect(() => {
    if (movies.length <= moviesPerPage) {
      setIsShowMore(false);
    } else {
      setIsShowMore(true);
    }
  }, [movies.length, moviesPerPage]);

  if (onLoading) {
    return <Preloader />
  }

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
      <div className="movie-cardlist__loader">
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
      {!onErrorServer && (
          <p className="movies__error-load">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>
        )}
    </section>
  );
}

export default MoviesCardList;
