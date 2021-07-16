import React, { useState } from "react";
import { Container } from "semantic-ui-react";
// import Accordion from "./Accordion";
// import SearchBar from "./SearchBar";
// import ButtonExampleToggle from "./ButtonToggle";
import DropdownMenu from "./Dropdown";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(false);
  const clickForOptions = showDropDown ? null : "Click for Options";
  const buttonDropDown = !showDropDown ? (
    <button onClick={() => setShowDropDown(!showDropDown)}>
      {clickForOptions}
    </button>
  ) : null;
  return (
    <Container className="app-container">
      {buttonDropDown}
      {showDropDown ? (
        <DropdownMenu
          selected={selected}
          onChangeSelected={setSelected}
          options={options}
        />
      ) : null}
    </Container>
  );
};

export default App;
