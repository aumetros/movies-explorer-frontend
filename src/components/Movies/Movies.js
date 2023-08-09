import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";

function Movies({
  isLoading,
  movies,
  onError,
  onErrorServer,
  onNotFound,
  onSearch,
}) {
  const [isShortsChecked, setIsShortsCheked] = React.useState(true);
  const [renderMovies, setRenderMovies] = React.useState([]);

  function handleCheckShorts(status) {
    setIsShortsCheked(status);
    console.log(status);
  }

  React.useEffect(() => {
    if (isShortsChecked) {
      setRenderMovies(movies);
    } else {
      const moviesLongplay = movies.filter((movie) => {
        return movie.duration < 60;
      });
      setRenderMovies(moviesLongplay);
    }
  }, [movies, isShortsChecked]);

  return (
    <section className="movies">
      <Header />
      <main>
        <SearchForm
          onSubmit={onSearch}
          onError={onError}
          onShorts={handleCheckShorts}
        />
        <MoviesCardList
          movies={renderMovies}
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
