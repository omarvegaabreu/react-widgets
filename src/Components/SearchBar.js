import React, { useState, useEffect } from "react";
import {
  Form,
  Container,
  Input,
  Button,
  Image,
  Segment,
  Header,
} from "semantic-ui-react";
import axios from "axios";
import upSplashApiKey from "../util/apikey";

const SearchBar = () => {
  const [term, setTerm] = useState(""); //TERM BEING LOOKED UP
  const [searchResponse, setSearchResponse] = useState(""); //WIKIPEDIA RESPONSE
  const [image, setImage] = useState(""); //UPSPLASH IMAGE

  useEffect(() => {
    const onSearchSubmit = async () => {
      //WIKIPEDIA API CALL
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

      //UPSPLASH API CALL
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: term },
          headers: {
            Authorization: `Client-ID ${upSplashApiKey()}`,
          },
        }
      );

      //DO NOT REMOVE APP WILL BREAK,NO RESULTS ON INITIAL RENDER
      try {
        const responseData = response.data.results[1].urls.small;
        setImage(responseData);
      } catch (error) {}
    };

    //condition there for smoother render, and for faster initial search
    if (term && !searchResponse.length && !image.length) {
      onSearchSubmit();
    } else {
      const timer = setTimeout(() => {
        if (term) {
          onSearchSubmit();
        }
      }, 600);

      return () => {
        //return to allow timer to reset
        clearTimeout(timer);
      };
    }
  }, [term, searchResponse, image]);

  const renderedSearch = searchResponse
    ? searchResponse.map((search) => {
        const regex = /(<([^>]+)>)/gi; //NEW from web result
        const cleanSnippet = search.snippet.replace(regex, ""); //NEW

        return (
          <Segment.Group key={search.pageid}>
            <Button
              icon="external alternate"
              floated="right"
              href={`  https://en.wikipedia.org?curid=${search.pageid}`}
              color="facebook"
            ></Button>
            <Header>{search.title}</Header>
            <p>{cleanSnippet}</p>
          </Segment.Group>
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
      <Segment vertical>
        <Image src={image} size="large" centered />
        {renderedSearch}
      </Segment>
    </Container>
  );
};

export default SearchBar;
