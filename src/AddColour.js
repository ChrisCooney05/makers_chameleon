import React from "react";

function AddColour({ addNewColour, updateInput }) {
  return (
    <form>
      <label />
      Add a new Colour:
      <input type="text" onChange={updateInput}></input>
      <input type="submit" value="Submit" onClick={addNewColour}></input>
    </form>
  );
}

export default AddColour;
