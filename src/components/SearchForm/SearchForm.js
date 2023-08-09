import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "../../hooks/UseForm";
import React from "react";

function SearchForm({ onSubmit, onError, onShorts }) {
  const { values, handleChange, setValues } = useForm();

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (values.searchMovies) {
      onSubmit(values.searchMovies);
      setValues({ searchMovies: "" });
      event.target.reset();
    } else {
      onError("Нужно ввести ключевое слово");
    }
  }

  return (
    <section>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className="search-form__container">
          <div className="search-form__icon"></div>
          <div className="search-form__input-container">
            <input
              type="text"
              className="search-form__input"
              placeholder="Фильм"
              name="searchMovies"
              value={values.name}
              onChange={handleChange}
              noValidate
            />
            <button type="submit" className="search-form__button-submit">
              Найти
            </button>
          </div>
          <div className="search-form__vertical-line"></div>
          <div className="search-form__shorts-container">
            <FilterCheckbox onChange={onShorts} />
            <span className="search-form__shorts-text">Короткометражки</span>
          </div>
        </div>
        <div className="search-form__line"></div>
      </form>
    </section>
  );
}

export default SearchForm;
