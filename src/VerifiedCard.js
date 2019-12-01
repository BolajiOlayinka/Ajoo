import React from "react";
import "./Verified.css";
import "./Components/Button.css";
import {Link} from 'react-router-dom';

const cardStyle = {
  borderStyle: "none",
  backgroundColor: "#F9F9F9",
  height: "25em",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 20px rgba(0, 0, 0, 0.05)",
  borderRadius: "0.5em"
};
const vStyle = {
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 20px rgba(0, 0, 0, 0.05)",
  borderRadius: "0.5em",
  height: "14em"
};
const logoContain = {
 display:"flex",
 alignItems:"center",
//   margin: "1em",
  backgroundColor: "white",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 20px rgba(0, 0, 0, 0.05)",
  height: "18em",
  borderRadius: "0.5em",
  textAlign:"center",
};
const cardTag = {
  paddingTop: "1.3em",
  paddingBottom:"0.5em",
  fontWeight: "bold",
  fontSize:"0.8em",
  height:"2em",
  textTransform:"upperCase",
};

export default function VerifiedCard(props) {
  return (
      <div>
          <div className="card mt-5 mb-3" style={cardStyle}>
            <div className="Vcard" style={vStyle}>
              <div className="logoContainer" style={logoContain}>
              {props.VerifiedImage}
                
              </div>
            </div>
            <p className="cardTag" style={cardTag}>{props.cardTag}
              
            </p>
            <div className="btnBottom">
              <Link to ="/Verified Organizations"> <button className="ashButton">{props.ashButton}</button></Link>
              <button className="blueButton"> {props.blueButton}</button>
            </div>
          </div>
    </div>
  );
}
