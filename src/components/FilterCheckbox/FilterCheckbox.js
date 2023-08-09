import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onChange }) {
  const [isChecked, setIsChecked] = React.useState(true);

  function handleCheckShorts() {
    onChange(!isChecked);    
    setIsChecked(!isChecked);
  }

  return (
    <label className="filter-checkbox__label" htmlFor="shorts">
      <input
        type="checkbox"
        className="filter-checkbox__input"
        name="shorts"
        id="shorts"
        checked={isChecked}
        onChange={handleCheckShorts}
      ></input>
      <span className="filter-checkbox__pseudo"></span>
    </label>
  );
}

export default FilterCheckbox;
