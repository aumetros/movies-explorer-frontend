import React from "react";
import "./MoviesCard.css";

function MoviesCard({ photo, tab, mob, savedMovies }) {
  const [isSavedCliked, setIsSavedCliked] = React.useState(false);
  function handleSaveClick() {
    setIsSavedCliked(!isSavedCliked);
  }

  function handleTypeButton() {
    if (!savedMovies) {
      return (
        <div
          className={`movie-card__save-btn ${
            isSavedCliked && "movie-card__save-btn_saved"
          }`}
          onClick={handleSaveClick}
        ></div>
      );
    } else {
      return (
        <div className="movie-card__delete-btn"></div>
      )
    }
  }

  return (
    <li
      className={`movie-card ${tab && "movie-card_hide_tab"} ${
        mob && "movie-card_hide_mob"} ${(savedMovies && mob) && "movie-card_hide_mob"}`}
    >
      <img className="movie-card__photo" src={photo} alt="33 слова о дизайне" />
      <div className="movie-card__container">
        <div className="movie-card__info">
          <p className="movie-card__title">33 слова о дизайне</p>
          <span className="movie-card__duration">1ч42м</span>
        </div>
        {handleTypeButton()}
      </div>
    </li>
  );
}

export default MoviesCard;
