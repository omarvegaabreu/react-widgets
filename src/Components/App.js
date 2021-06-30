import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import Accordion from "./Accordion";
import SearchBar from "./SearchBar";
// import ButtonExampleToggle from "./ButtonToggle";
import DropdownMenu from "./Dropdown";

const items = [
  {
    title: "title 1",
    content: "content 1",
  },
  {
    title: "title 2",
    content: "content 2",
  },
  {
    title: "title 3",
    content: "content 3",
  },
];

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
  console.log("selected ", selected);

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
