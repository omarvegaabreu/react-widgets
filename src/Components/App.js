import React from "react";
import { Container } from "semantic-ui-react";
import Accordion from "./Accordion";

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

const App = () => {
  return (
    <Container className="app-container">
      <Accordion items={items} />
    </Container>
  );
};

export default App;
