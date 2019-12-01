import React from 'react'

export default function VolunteerCard(props) {
    return (
        <div>
             <div className="volunteerCard">
                                <div className="img-top">
                                {props.cardImage}
                                   
                                </div>
                                <div className="volunteer-card-footer">
                                    <div className="starSection">{props.cardStar} </div>
                                    <div className="nameSection"> <b>{props.cardName}</b></div>
                                </div>
                                <div className="warningArea">
                                    <div className="warningImage">
                                        {props.warningImage}
                                    </div>
                                    <div className="warningText">
                                        <a href="/Volunteer">{props.warningText}</a>
                                    </div>
                                </div>
                            </div>
        </div>
    )
}


