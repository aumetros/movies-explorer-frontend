import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React from "react";

function SavedMovies({
  onOpenModal,
  userMovies,
  onServerResponse,
  onDeleteMovie,
  onFilter,
}) {
  const [isSavedMovies, setIsSavedMovies] = React.useState(false);
  const [renderMovies, setRenderMovies] = React.useState([]);
  const [isShortsChecked, setIsShortsCheked] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isSearched, setIsSearched] = React.useState(false);

  function handleSearchUserMovies(request) {
    const filteredMovies = onFilter(userMovies, request);
    setFilteredMovies(filteredMovies);
    setIsSearched(true);
  }

  function handleCheckShorts(status) {
    setIsShortsCheked(status);
  }

  React.useEffect(() => {
    setFilteredMovies([]);
    setRenderMovies(userMovies);
  }, [userMovies]);

  React.useEffect(() => {
    if (renderMovies.length !== 0) {
      setIsSavedMovies(false);
    } else {
      setIsSavedMovies(true);
    }
  }, [renderMovies]);

  React.useEffect(() => {
    if (!isSearched && isShortsChecked && filteredMovies.length !== 0) {
      setRenderMovies(filteredMovies);
    } else if (!isSearched && !isShortsChecked && filteredMovies.length !== 0) {
      const moviesLongplay = filteredMovies.filter((movie) => {
        return movie.duration < 40;
      });
      setRenderMovies(moviesLongplay);
    } else if (isSearched && !isShortsChecked && filteredMovies.length !== 0) {
      setRenderMovies(filteredMovies);
    } else if (isSearched && isShortsChecked && filteredMovies.length !== 0) {
      const moviesLongplay = filteredMovies.filter((movie) => {
        return movie.duration < 40;
      });
      setRenderMovies(moviesLongplay);
    } else if (!isSearched && !isShortsChecked && filteredMovies.length === 0) {
      setRenderMovies(userMovies);
    } else if (!isSearched && isShortsChecked && filteredMovies.length === 0) {
      const moviesLongplay = userMovies.filter((movie) => {
        return movie.duration < 40;
      });
      setRenderMovies(moviesLongplay);
    } else if (isSearched && !isShortsChecked && filteredMovies.length === 0) {
      setRenderMovies(filteredMovies);
    } else if (isSearched && isShortsChecked && filteredMovies.length === 0) {
      const moviesLongplay = filteredMovies.filter((movie) => {
        return movie.duration < 40;
      });
      setRenderMovies(moviesLongplay);
    }
  }, [userMovies, isShortsChecked, filteredMovies, isSearched]);

  return (
    <section className="saved-movies">
      <Header />
      <main>
        <SearchForm
          savedMovies={true}
          onSubmit={handleSearchUserMovies}
          onError={onOpenModal}
          onShorts={handleCheckShorts}
        />
        <MoviesCardList
          savedMovies={true}
          movies={renderMovies}
          onErrorServer={onServerResponse}
          onNotFound={!isSavedMovies}
          isShowed={true}
          onDeleteMovie={onDeleteMovie}
        />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
