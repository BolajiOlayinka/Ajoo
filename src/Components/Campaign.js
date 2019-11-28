import React, { Component } from 'react'
import './Button.css';
import Progress from './Progress';
import './CampaignCard.css';



export default class Campaign extends Component {
  render() {
    
    return (
      <div>
      
          <div className="card">
      {this.props.campaignImage}
     {this.props.campaignMark}
    <div style={this.props.cardStyle}>
      
      <div className="card-body">
      <div className="buttonContainer">{this.props.ButtonContainer}
      <button className="campaignButton" id={this.props.buttonId} onClick={this.props.onClick}>{this.props.buttonText}</button>
       </div>    
          <div className="cardProgress"><Progress/></div>
        <h5 className="cardTitle">{this.props.cardTitle}</h5>
        <p className="cardBody">{this.props.cardText}</p>
        {this.props.children}
        <div className="campaignLink">{this.props.campaignLink}
      <a href="index.html" className="campaignViewLink">{this.props.campaignViewLink}</a> 
      {this.props.linkImg}
      </div>
      </div>
      
    </div>
  </div>
 
  </div>
      
  )
  }
}







