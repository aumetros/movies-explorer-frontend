import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({ isLoading, onGetMovies, movies }) {

  function handleSearchMovies() {
    onGetMovies();
  }

  return (
    <section className="movies">
      <Header />
      <main>
        <SearchForm onSubmit={handleSearchMovies} />
        {!isLoading && <MoviesCardList movies={movies} />}
        {isLoading && <Preloader />}
      </main>
      <Footer movies={true} />
    </section>
  );
}

export default Movies;
