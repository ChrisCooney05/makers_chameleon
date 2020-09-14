import React from "react";

function Button({ colour, updateColour }) {
  return (
    <button value={colour} onClick={updateColour}>
      {colour}
    </button>
  );
}

export default Button;
