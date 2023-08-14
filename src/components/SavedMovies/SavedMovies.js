import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React from "react";

function SavedMovies({ onOpenModal, userMovies, onServerResponse, onDeleteMovie }) {
  const [isSavedMovies, setIsSavedMovies] = React.useState(false);

  React.useEffect(() => {
    if (userMovies.length !== 0) {
      setIsSavedMovies(true);
    }
  }, [userMovies]);

  return (
    <section className="saved-movies">
      <Header />
      <main>
        {/* <SearchForm
          onSubmit={handleSearchMovies}
          onError={onOpenModal}
          onShorts={handleCheckShorts}
        /> */}
        <MoviesCardList
          savedMovies={true}
          movies={userMovies}
          onErrorServer={onServerResponse}
          onNotFound={isSavedMovies}
          isShowed={isSavedMovies}
          onDeleteMovie={onDeleteMovie}
        />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
