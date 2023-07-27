import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "../../hooks/UseForm";
import React from "react";

function SearchForm() {
  const { values, handleChange } = useForm();
  const [isShortsChecked, setIsShortsChecked] = React.useState(true);

  function handleChangeShorts() {
    setIsShortsChecked(!isShortsChecked);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log(values.search);
    console.log(isShortsChecked);
    event.target.reset();
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
              name="search"
              value={values.name}
              onChange={handleChange}
              required
            />
            <button type="submit" className="search-form__button-submit">
              Найти
            </button>
          </div>
          <div className="search-form__vertical-line"></div>
          <div className="search-form__shorts-container">
            <FilterCheckbox onChange={handleChangeShorts}/>
            <span className="search-form__shorts-text">Короткометражки</span>
          </div>
        </div>
        <div className="search-form__line"></div>
      </form>
    </section>
  );
}

export default SearchForm;
