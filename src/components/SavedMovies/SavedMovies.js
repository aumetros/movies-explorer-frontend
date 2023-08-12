import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({onOpenModal, }) {
  return (
    <section className="saved-movies">
      <Header />
      <main>
        {/* <SearchForm
          onSubmit={handleSearchMovies}
          onError={onOpenModal}
          onShorts={handleCheckShorts}
        /> */}
        {/* <MoviesCardList
          savedMovies={true}
          movies={renderMovies}
          onLoading={isLoading}
          onErrorServer={isServerResponse}
          onNotFound={isMoviesFound}
          isShowed={isMovieCardListShow}
        /> */}
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
