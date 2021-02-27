import React, { useState, useEffect } from "react";
import { Form, Container, Input, List } from "semantic-ui-react";
import axios from "axios";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [searchResponse, setSearchResponse] = useState("");

  useEffect(() => {
    const onSearchSubmit = async () => {
      const { data } = await axios.get(` https://en.wikipedia.org/w/api.php`, {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });

      setSearchResponse(data.query.search);
    };
    if (term) {
      onSearchSubmit();
    }
  }, [term]);

  const renderedSearch = searchResponse
    ? searchResponse.map((search) => {
        return (
          <List.Item key={search.pageid}>
            <List.Content>
              <List.Header>{search.title}</List.Header>
              {search.snippet}
            </List.Content>
          </List.Item>
        );
      })
    : null;

  return (
    <Container>
      <Form>
        <Form.Field>
          <Input
            type="text"
            value={term}
            className="search-input"
            loading
            icon="user"
            placeholder="Search..."
            onChange={(e) => setTerm(e.target.value)}
          />
        </Form.Field>
      </Form>
      <List>{renderedSearch}</List>
    </Container>
  );

  // console.log(error);

  // const setSecondTermElement = (e) => {
  //   //to prevent error this function will run
  //   e.preventDefault();
  //   setTerm(e.target.value);
  // };
  // console.log(term);
  // return (
  //   <Container>
  //     <Form>
  //       <Form.Field>
  //         <Input
  //           type="text"
  //           value={term}
  //           className="search-input"
  //           loading
  //           icon="user"
  //           placeholder="Search..."
  //           onChange={setSecondTermElement}
  //         />
  //       </Form.Field>
  //     </Form>
  //   </Container>
  // );
};

export default SearchBar;
