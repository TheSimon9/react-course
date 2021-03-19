import * as React from "react";

function Form() {
  const [name, setName] = React.useState("");

  return (
    <div>
      <label htmlFor="name-input">Name: </label>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
}

export default Form;
