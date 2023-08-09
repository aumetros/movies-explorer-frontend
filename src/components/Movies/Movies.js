import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import { getMovies } from "../../utils/MoviesApi";
import Modal from "../Modal/Modal";

function Movies() {
  const [isShortsChecked, setIsShortsCheked] = React.useState(true);
  const [renderMovies, setRenderMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isServerResponse, setIsServerResponse] = React.useState(true);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isMoviesFound, setIsMoviesFound] = React.useState(true);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");

  function handleSearchMovies(request) {
    if (movies.length === 0) {
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
    const result = arr.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(request.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(request.toLowerCase())
      );
    });
    setFilteredMovies(result);
    handleNotFoundMessage(result);
  } 

  function handleNotFoundMessage(result) {
    if (result.length === 0) {
      setIsMoviesFound(false);
    } else {
      setIsMoviesFound(true);
    }
  }

  function handleCheckShorts(status) {
    setIsShortsCheked(status);
  }

  function handleOpenModal(msg) {
    setModalMessage(msg);
    setIsOpenModal(!isOpenModal);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  React.useEffect(() => {
    if (isShortsChecked) {
      setRenderMovies(filteredMovies);
      handleNotFoundMessage(filteredMovies);
    } else {
      const moviesLongplay = filteredMovies.filter((movie) => {
        return movie.duration < 60;
      });
      setRenderMovies(moviesLongplay);
      handleNotFoundMessage(moviesLongplay);
    }
  }, [filteredMovies, isShortsChecked]);

  return (
    <section className="movies">
      <Header />
      <main>
        <SearchForm
          onSubmit={handleSearchMovies}
          onError={handleOpenModal}
          onShorts={handleCheckShorts}
        />
        <MoviesCardList
          movies={renderMovies}
          onLoading={isLoading}
          onErrorServer={isServerResponse}
          onNotFound={isMoviesFound}
        />
      </main>
      <Footer movies={true} />
      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        modalMessage={modalMessage}
      />
    </section>
  );
}

export default Movies;
