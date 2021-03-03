import React from "react";

const SoftwareDeveloper = props => {

  return (
    <div>
      <div>
        <label><b>Nome: </b></label>
        {props.name}
      </div>
      <div>
        <label><b>Cognome: </b></label>
        {props.surname}
      </div>
      <div>
        <label><b>Ruolo: </b></label>
        {props.role}
      </div>
      {props.onClick && <button onClick={() => props.onClick && props.onClick()}>Contattami!</button>}
    </div>
  );
};

export default SoftwareDeveloper;