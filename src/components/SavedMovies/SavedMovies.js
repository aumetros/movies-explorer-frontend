import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";


function SavedMovies() {
  return (
    <section className="saved-movies">
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList savedMovies={true}>
          
        </MoviesCardList>
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
