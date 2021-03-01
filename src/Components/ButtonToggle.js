import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class ButtonExampleToggle extends Component {
  state = { active: true };
  handleClick = () =>
    this.setState((prevState) => ({ active: !prevState.active }));

  render() {
    const { active } = true;

    return (
      <Button toggle active={active} onClick={this.handleClick}>
        Toggle
      </Button>
    );
  }
}

export default ButtonExampleToggle;
