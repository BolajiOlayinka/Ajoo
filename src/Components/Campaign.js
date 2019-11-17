import React from 'react'
import './Button.css';
import Progress from './Progress';


export default function Campaign(props) {
    return (
        <div>
            <div className="card">
        {props.campaignImage}
       {props.campaignMark}
      <div style={props.cardStyle}>
        
        <div className="card-body">
        <div className="buttonContainer">{props.ButtonContainer}
        <button className="campaignButton" id={props.buttonId} onClick={props.onClick}>{props.buttonText}</button>
         </div>    
            <div className="cardProgress"><Progress/></div>
          <h5 className="cardTitle">{props.cardTitle}</h5>
          <p className="cardBody">{props.cardText}</p>
          {props.children}
          <div className="campaignLink">{props.campaignLink}
        <a href="index.html" className="campaignViewLink">{props.campaignViewLink}</a> 
        {props.linkImg}
        </div>
        </div>
        
      </div>
    </div>
    </div>
        
    )
}





