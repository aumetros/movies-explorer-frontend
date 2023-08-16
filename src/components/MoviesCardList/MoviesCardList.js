import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {
  MOVIES_PER_PAGE_WIDE,
  MOVIES_PER_PAGE_STAN,
  MOVIES_PER_PAGE_TAB,
  MOVIES_PER_PAGE_MOB,
  MOVIES_PER_LOAD_WIDE,
  MOVIES_PER_LOAD_STAN,
  MOVIES_PER_LOAD_TAB,
  RES_WIDE,
  RES_STAN,
  RES_TAB,
} from "../../utils/constants";

function MoviesCardList({
  movies,
  savedMovies,
  onLoading,
  onErrorServer,
  onNotFound,
  isShowed,
  onSaveMovie,
  userMovies,
  onDeleteMovie,
}) {
  const [isShowMore, setIsShowMore] = React.useState(false);
  const [moviesPerPage, setMoviesPerPage] = React.useState(MOVIES_PER_PAGE_WIDE);
  const [moviesPerLoad, setMoviesPerLoad] = React.useState(MOVIES_PER_LOAD_WIDE);
  const [width, setWidth] = React.useState(window.innerWidth);

  function showMoreMovies() {
    setMoviesPerPage((prevValue) => prevValue + moviesPerLoad);
  }

  function handleResizeWindow() {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 1000);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  React.useEffect(() => {
    if (width === RES_WIDE) {
      setMoviesPerPage(MOVIES_PER_PAGE_WIDE);
      setMoviesPerLoad(MOVIES_PER_LOAD_WIDE);
    } else if (width < RES_WIDE && width >= RES_STAN) {
      setMoviesPerPage(MOVIES_PER_PAGE_STAN);
      setMoviesPerLoad(MOVIES_PER_LOAD_STAN);
    } else if (width < RES_STAN && width >= RES_TAB) {
      setMoviesPerPage(MOVIES_PER_PAGE_TAB);
      setMoviesPerLoad(MOVIES_PER_LOAD_TAB);
    } else if (width < RES_TAB) {
      setMoviesPerPage(MOVIES_PER_PAGE_MOB);
      setMoviesPerLoad(MOVIES_PER_LOAD_TAB);
    }
    setWidth(window.innerWidth);
  }, [movies, width]);

  React.useEffect(() => {
    if (movies.length <= moviesPerPage) {
      setIsShowMore(false);
    } else if (movies.length > moviesPerPage && !savedMovies) {
      setIsShowMore(true);
    }
  }, [movies.length, moviesPerPage, savedMovies]);

  if (onLoading) {
    return <Preloader />;
  }

  return (
    <section
      className={`movies-cardlist ${isShowed && "movies-cardlist_show"}`}
    >
      <ul
        className={`movies-cardlist__container ${
          savedMovies && "movies-cardlist__container_saved"
        }`}
      >
        {!savedMovies &&
          movies.slice(0, moviesPerPage).map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                onSaveMovie={onSaveMovie}
                userMovies={userMovies}
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
              />
            );
          })}
        {savedMovies &&
          movies.map((movie) => {
            return (
              <MoviesCard
                key={movie._id}
                movie={movie}
                onSaveMovie={onSaveMovie}
                userMovies={userMovies}
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
              />
            );
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
        <p className="movie-cardlist__error-load">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      {!onNotFound && (
        <p className="movie-cardlist__not-found">Ничего не найдено.</p>
      )}
    </section>
  );
}

export default MoviesCardList;
