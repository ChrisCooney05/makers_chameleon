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
  render() {
    const buttons = this.state.buttons.map((button, i) => {
      return <Button colour={button} key={i} />;
    });
    return (
      <div>
        <h1>I am a Chameleon</h1>
        {buttons}
      </div>
    );
  }
}

export default Chameleon;
