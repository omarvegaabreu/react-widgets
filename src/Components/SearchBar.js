import React, { useState } from "react";
import { Form, Container, Input } from "semantic-ui-react";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  console.log(term);
  return (
    <Container>
      <Form>
        <Form.Field>
          <Input
            className="search-input"
            loading
            icon="user"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Form.Field>
      </Form>
    </Container>
  );
};

export default SearchBar;
