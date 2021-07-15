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

  const clickEventDropdown = () => {
    console.log("click bitch");
  };

  return (
    <Container className="app-container">
      {/* <Accordion items={items} /> */}
      {/* <SearchBar /> */}
      {/* <SearchBar /> */}

      <DropdownMenu
        selected={selected}
        onChangeSelected={setSelected}
        options={options}
      />
    </Container>
  );
};

export default App;
