import React, { useState } from "react";
import { Accordion, Icon, Container } from "semantic-ui-react";

const AccordionComponent = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState({ activeIndex: 0 });

  const itemToRender = items.map((item, index) => {
    const title = item.title;
    const content = item.content;
    const myRnId = Math.floor(Math.random() * 1000);
    const newIndex = activeIndex === index ? -1 : index;

    const onAccordionClick = () => {
      setActiveIndex(newIndex);
    };

    return (
      <Accordion onClick={onAccordionClick} styled key={myRnId}>
        <Accordion.Title index={index}>
          <Icon name="dropdown" />
          {title}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === index}>
          <p>{content}</p>
        </Accordion.Content>
      </Accordion>
    );
  });

  return <Container className="accordion-container">{itemToRender}</Container>;
};

export default AccordionComponent;
