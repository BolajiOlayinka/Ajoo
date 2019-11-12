import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div className="buttonContainer">{props.ButtonContainer}
    <button className="cardButton" id={props.ButtonId} onClick={props.onClick}>{props.buttonText}</button>
      
    </div>
  );
};
export default Button;
