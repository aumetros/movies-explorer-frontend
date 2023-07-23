import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label
      className="filter-checkbox__label"
      for="shorts"
    >
      <input type="checkbox" className="filter-checkbox__input" name="shorts" id="shorts" value={true}></input>
      <span class="filter-checkbox__pseudo"></span>
    </label>
  );
}

export default FilterCheckbox;
