import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, savedMovies }) {
  return (
    <section className="movies-cardlist">
      <ul
        className={`movies-cardlist__container ${
          savedMovies && "movies-cardlist__container_saved"
        }`}
      >
        {movies.map((movie) => {
          return (
            <MoviesCard 
            key={movie.id}
            movie={movie}
            />
          )
        })}
      </ul>
      <div className={`movie-cardlist__loader ${savedMovies && "movie-cardlist__loader_hide"}`}>
        <button type="button" className="movie-cardlist__loader-btn">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
