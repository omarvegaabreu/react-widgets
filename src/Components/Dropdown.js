import React, { useState } from "react";
// import { Dropdown, Menu } from "semantic-ui-react";

const DropdownMenu = ({ options, selected, onChangeSelected }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const removeDropDownOutSideClick = document.body.addEventListener(
    ("click", () => console.log("click"))
  );

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      //will not render if both values are the same
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onChangeSelected(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setToggleDropdown(!toggleDropdown)}
          className={`ui selection dropdown ${
            toggleDropdown ? "visible active" : ""
          }`}
          checkThis={removeDropDownOutSideClick}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${toggleDropdown ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
