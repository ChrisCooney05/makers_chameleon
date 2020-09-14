import React, { Component } from "react";
import Button from "./Button";
import AddColour from "./AddColour";

class Chameleon extends Component {
  constructor() {
    super();
    this.state = {
      colour: "black",
      buttons: ["red", "blue", "yellow"],
      input: "",
    };
  }

  updateColour = e => {
    this.setState({ colour: e.target.value });
  };

  updateInput = e => {
    this.setState({ input: e.target.value });
  };

  addNewColour = e => {
    e.preventDefault();
    const newColourArray = [...this.state.buttons, this.state.input];
    this.setState({
      buttons: newColourArray,
      input: "",
    });
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
        <AddColour
          addNewColour={this.addNewColour}
          updateInput={this.updateInput}
          value={this.state.input}
        />
        <br />
        {buttons}
      </div>
    );
  }
}

export default Chameleon;
