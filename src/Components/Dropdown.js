import React, { useState, useEffect, useRef } from "react";
// import { Dropdown, Menu } from "semantic-ui-react";

const DropdownMenu = ({ options, selected, onChangeSelected }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      //event listener to be able to click out side to close drop down.
      "click",

      (event) => {
        //check in order to be able to close modal without rendering body object
        if (ref.current.contains(event.target)) {
          //.contains is used to check if one dom element contains another dom element
          return;
        }
        setToggleDropdown(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      //will not render if both values are the same
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onChangeSelected(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            setToggleDropdown(!toggleDropdown);
          }}
          className={`ui selection dropdown ${
            toggleDropdown ? "visible active" : ""
          }`}
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
