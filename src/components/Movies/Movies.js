import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isLoading, onGetMovies, movies, onError, onErrorServer }) {
  function handleSearchMovies() {
    onGetMovies();
  }

  return (
    <section className="movies">
      <Header />
      <main>
        <SearchForm onSubmit={handleSearchMovies} onError={onError} />
        <MoviesCardList movies={movies} onLoading={isLoading} onErrorServer={onErrorServer}/>
      </main>
      <Footer movies={true} />
    </section>
  );
}

export default Movies;
