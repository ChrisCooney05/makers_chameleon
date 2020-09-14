import React, { Component } from "react";
import Button from "./Button";

class Chameleon extends Component {
  constructor() {
    super();
    this.state = {
      colour: "black",
      buttons: ["red", "blue", "yellow"],
    };
  }

  updateColour = e => {
    this.setState({ colour: e.target.value });
  };

  render() {
    const buttons = this.state.buttons.map((button, i) => {
      return (
        <Button colour={button} key={i} updateColour={this.updateColour} />
      );
    });

    const textColour = {
      color: this.state.colour,
    };
    return (
      <div>
        <h1 style={textColour}>I am a Chameleon</h1>
        {buttons}
      </div>
    );
  }
}

export default Chameleon;
