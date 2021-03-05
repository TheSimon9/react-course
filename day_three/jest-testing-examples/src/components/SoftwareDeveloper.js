import React from "react";

const SoftwareDeveloper = props => {

  return (
    <div>
      <div data-testid={"name"}>
        <label><b>Nome: </b></label>
        {props.name}
      </div>
      <div data-testid={"surname"}>
        <label><b>Cognome: </b></label>
        {props.surname}
      </div>
      <div data-testid={"role"}>
        <label><b>Ruolo: </b></label>
        {props.role}
      </div>
      {props.onClick && <button onClick={() => props.onClick && props.onClick()} data-testid={"contact-me"}>Contattami!</button>}
    </div>
  );
};

export default SoftwareDeveloper;