import "./MoviesCardList.css";

function MoviesCardList({ children, savedMovies }) {
  return (
    <section className="movies-cardlist">
      <ul
        className={`movies-cardlist__container ${
          savedMovies && "movies-cardlist__container_saved"
        }`}
      >
        {children}
      </ul>
      <div className={`movie-cardlist__loader ${savedMovies && "movie-cardlist__loader_hide"}`}>
        <button className="movie-cardlist__loader-btn">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
