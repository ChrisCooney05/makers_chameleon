import React from "react";

function AddColour({ addNewColour, updateInput, value }) {
  return (
    <form>
      <label />
      Add a new Colour:
      <br />
      <input type="text" onChange={updateInput} value={value}></input>
      <input type="submit" value="Submit" onClick={addNewColour}></input>
    </form>
  );
}

export default AddColour;
