import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";

function SearchForm({ onSubmit, onError, onShorts }) {
  const [value, setValue] = React.useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (value) {
      onSubmit(value);
     
    } else {
      onError("Нужно ввести ключевое слово");
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem("request")) {
      setValue(localStorage.getItem("request"));
    }
  }, [])

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
              value={value}
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
