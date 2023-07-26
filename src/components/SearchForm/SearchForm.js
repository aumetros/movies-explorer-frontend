import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section>
      <form className="search-form">
        <div className="search-form__container">
          <div className="search-form__icon"></div>
          <div className="search-form__input-container">
            <input className="search-form__input" placeholder="Фильм" />
            <button type="submit" className="search-form__button-submit">
              Найти
            </button>
          </div>
          <div className="search-form__vertical-line"></div>
          <div className="search-form__shorts-container">
            <FilterCheckbox />
            <span className="search-form__shorts-text">Короткометражки</span>
          </div>
        </div>
        <div className="search-form__line"></div>
      </form>
    </section>
  );
}

export default SearchForm;
