import React from 'react'




export default function Blog(props) {
    return (
        <div>
            <div className="card">
        {props.campaignImage}
      <div style={props.cardStyle}>
        
        <div className="card-body p-4">       
          <h5 className="cardTitle">{props.cardTitle}</h5>
          <p className="cardBody">{props.cardText}</p>
          {props.children}

          <div className="BlogLink">{props.BlogLink}
          <a href="index.html" className= "BlogReadLink">{props.ReadLink}
              </a>
          </div>
        </div>
        
      </div>
    </div>
    </div>
        
    )
}





