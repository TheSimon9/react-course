import React from "react";

const Weather = props => {
  return (
    <div>
      <div><img src={props.icon} /></div>
      <div>Temperatura in gradi: {props.temperature}</div>
      <div>Ti trovi qui: {props.city}, {props.country}</div>
    </div>
  );
};

export default Weather;