import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";

function Movies({
  isLoading,
  onGetMovies,
  movies,
  onError,
  onErrorServer,
  onNotFound,
  onSearch,
}) {

  return (
    <section className="movies">
      <Header />
      <main>
        <SearchForm onSubmit={onSearch} onError={onError} />
        <MoviesCardList
          movies={movies}
          onLoading={isLoading}
          onErrorServer={onErrorServer}
          onNotFound={onNotFound}
        />
      </main>
      <Footer movies={true} />
    </section>
  );
}

export default Movies;
