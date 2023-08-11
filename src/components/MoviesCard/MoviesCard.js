import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, savedMovies, onSaveMovie, userMovies }) {
  const [isSavedCliked, setIsSavedCliked] = React.useState(false);

  function handleSaveClick() {
    setIsSavedCliked(!isSavedCliked);
    onSaveMovie(movie);
  }

  React.useEffect(() => {
    const hasMovieSaved = userMovies.find((saved) => {
      return saved.movieId === movie.id;
    });
    if (hasMovieSaved) {
      setIsSavedCliked(true);
    } else {
      setIsSavedCliked(false);
    }
  }, [userMovies, movie]);

  function handleTypeButton() {
    if (!savedMovies) {
      return (
        <button
          className={`movie-card__save-btn ${
            isSavedCliked && "movie-card__save-btn_saved"
          }`}
          type="button"
          onClick={handleSaveClick}
        ></button>
      );
    } else {
      return <button type="button" className="movie-card__delete-btn"></button>;
    }
  }

  function convertDuration(dur) {
    const minutes = dur % 60;
    const hours = (dur - minutes) / 60;
    return `${hours.toString()}ч${
      minutes < 10 ? "0" : ""
    }${minutes.toString()} `;
  }

  return (
    <li className="movie-card">
      <a
        href={movie.trailerLink}
        className="portfolio__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="movie-card__photo"
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>
      <div className="movie-card__container">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <span className="movie-card__duration">
            {convertDuration(movie.duration)}
          </span>
        </div>
        {handleTypeButton()}
      </div>
    </li>
  );
}

export default MoviesCard;
