import "./FilterCheckbox.css";

function FilterCheckbox({ onChange }) {
  return (
    <label className="filter-checkbox__label" htmlFor="shorts">
      <input
        type="checkbox"
        className="filter-checkbox__input"
        name="shorts"
        id="shorts"
        onChange={onChange}
      ></input>
      <span className="filter-checkbox__pseudo"></span>
    </label>
  );
}

export default FilterCheckbox;
