import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import photo1 from "../../images/card-photo-1.png";
import photo2 from "../../images/card-photo-2.png";
import photo3 from "../../images/card-photo-3.png";

function SavedMovies() {
  return (
    <div className="saved-movies">
      <Header />
      <SearchForm />
      <MoviesCardList savedMovies={true}>
        <MoviesCard photo={photo1} savedMovies={true} />
        <MoviesCard photo={photo2} savedMovies={true} />
        <MoviesCard photo={photo3} savedMovies={true} mob={true} />
      </MoviesCardList>
      <Footer />
    </div>
  );
}

export default SavedMovies;
