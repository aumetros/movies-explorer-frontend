import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import photo1 from "../../images/card-photo-1.png";
import photo2 from "../../images/card-photo-2.png";
import photo3 from "../../images/card-photo-3.png";
import photo4 from "../../images/card-photo-4.png";
import photo5 from "../../images/card-photo-5.png";
import photo6 from "../../images/card-photo-6.png";
import photo7 from "../../images/card-photo-7.png";
import photo8 from "../../images/card-photo-8.png";
import photo9 from "../../images/card-photo-9.png";
import photo10 from "../../images/card-photo-10.png";
import photo11 from "../../images/card-photo-11.png";
import photo12 from "../../images/card-photo-12.png";
import photo13 from "../../images/card-photo-13.png";
import photo14 from "../../images/card-photo-14.png";
import photo15 from "../../images/card-photo-15.png";
import photo16 from "../../images/card-photo-16.png";

function Movies() {
  return (
    <section className="movies">
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList>
          <MoviesCard photo={photo1} />
          <MoviesCard photo={photo2} />
          <MoviesCard photo={photo3} />
          <MoviesCard photo={photo4} />
          <MoviesCard photo={photo5} />
          <MoviesCard photo={photo6} mob={"hide"} />
          <MoviesCard photo={photo7} mob={"hide"} />
          <MoviesCard photo={photo8} mob={"hide"} />
          <MoviesCard photo={photo9} tab={"hide"} />
          <MoviesCard photo={photo10} tab={"hide"} />
          <MoviesCard photo={photo11} tab={"hide"} />
          <MoviesCard photo={photo12} tab={"hide"} />
          <MoviesCard photo={photo13} tab={"hide"} />
          <MoviesCard photo={photo14} tab={"hide"} />
          <MoviesCard photo={photo15} tab={"hide"} />
          <MoviesCard photo={photo16} tab={"hide"} />
        </MoviesCardList>
      </main>
      <Footer movies={true} />
    </section>
  );
}

export default Movies;
