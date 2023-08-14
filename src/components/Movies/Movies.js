import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import { getMovies } from "../../utils/MoviesApi";

function Movies({
  onOpenModal,
  onSaveMovie,
  userMovies,
  onDeleteMovie,
  onFilter,
}) {
  const [isShortsChecked, setIsShortsCheked] = React.useState(false);
  const [renderMovies, setRenderMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isServerResponse, setIsServerResponse] = React.useState(true);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isMoviesFound, setIsMoviesFound] = React.useState(true);
  const [isMovieCardListShow, setIsMovieCardListShow] = React.useState(false);

  function handleSearchMovies(request) {
    localStorage.setItem("request", request);
    localStorage.setItem("shorts", isShortsChecked);
    if (movies.length === 0) {
      setIsMovieCardListShow(true);
      setIsLoading(true);
      getMovies()
        .then((movies) => {
          setMovies(movies);
          setIsServerResponse(true);
          handleFilter(movies, request);
        })
        .catch((err) => {
          console.log(err);
          setIsServerResponse(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleFilter(movies, request);
    }
  }

  function handleFilter(arr, request) {
    const filteredMovies = onFilter(arr, request);
    setFilteredMovies(filteredMovies);
    handleNotFoundMessage(filteredMovies);
    localStorage.setItem("movies", JSON.stringify(filteredMovies));
  }

  function handleNotFoundMessage(result) {
    if (result.length === 0) {
      setIsMoviesFound(false);
    } else {
      setIsMoviesFound(true);
    }
  }

  function handleCheckShorts(status) {
    localStorage.setItem("shorts", status);
    setIsShortsCheked(status);
  }

  React.useEffect(() => {
    if (!isShortsChecked) {
      setRenderMovies(filteredMovies);
      handleNotFoundMessage(filteredMovies);
    } else {
      const shorts = filteredMovies.filter((movie) => {
        return movie.duration < 40;
      });
      setRenderMovies(shorts);
      handleNotFoundMessage(shorts);
    }
  }, [filteredMovies, isShortsChecked]);

  React.useEffect(() => {
    if (localStorage.getItem("movies")) {
      setFilteredMovies(JSON.parse(localStorage.getItem("movies")));
      setIsShortsCheked(localStorage.getItem("shorts") === "true");
      setIsMovieCardListShow(true);
    }
  }, []);

  return (
    <section className="movies">
      <Header />
      <main>
        <SearchForm
          onSubmit={handleSearchMovies}
          onError={onOpenModal}
          onShorts={handleCheckShorts}
        />
        <MoviesCardList
          movies={renderMovies}
          onLoading={isLoading}
          onErrorServer={isServerResponse}
          onNotFound={isMoviesFound}
          isShowed={isMovieCardListShow}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          userMovies={userMovies}
        />
      </main>
      <Footer movies={true} />
    </section>
  );
}

export default Movies;
