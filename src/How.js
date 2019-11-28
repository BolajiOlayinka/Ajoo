import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './How.css';
import Task1 from './images/Task1.png';
import Task2 from './images/Task2.png';
import Task3 from './images/Task3.png';
import Guide from './Components/campaignGuide';




class How extends Component {
    render() {
        return (
        <div>
        <div className="searchBanner">
             <div className="verifiedBannerBody">
           <h1>Crowd Funding On Ajoo</h1>
           <p>Raise money for charity and 
           causes you’re passionate about online.
            Ajoo is an innovative, cost-effective 
            online fundraising website for personal 
            and innovative projects.</p>
           </div>
           </div>
           
           <div className="howSection">
           <h3 className="howTitle"> How it Works</h3>
               <Container>
                   <Row>
                       <Col lg="6" md="6" sm="6 " xs="12 mb-2 mt-2">
                       <div className="content">
                       <h5 >Donations</h5>
                       <p className="space">Individual/organisations can support or back 
                       projects of interest here by offering non-equity based funding. </p>

                       </div>

                       </Col>
                       <Col lg="6" md="6" sm="6" xs="12 mb-2 mt-2">
                       <div className="content">
                           <h5>Rewards</h5>
                           <p className="space">Individuals/organization can support or back projects of 
                           interest here by offering reward based funding. </p>
                       </div>

                       </Col>
                   </Row>
               </Container>
           </div>
           <div className="howSection">
           <h3 className="howTitle"> How to get Started</h3>
           <Container>
               <Row>
                   <Col lg="6 mt-2 mb-3" md="6" sm="6">
                   <div className="steps">
                   <h5>Step One</h5>
                   <img src={Task1} alt="task1" className="howImg"/>
                   <p>Submit Campaign Title, Picture, and Story</p>
                   </div>

                   </Col>
                   <Col lg="6 mt-2 mb-3" md="6" sm="6">
                   <div className="steps">
                   <h5>Step Two</h5>
                   <img src={Task2} alt="task2"  className="howImg"/>
                   <p>Submit Campaign Title, Picture, and Story</p>
                   </div>
                   </Col>
                   <Col lg="6 mt-2 mb-3" md="6" sm="6">
                   <div className="steps">
                   <h5>Step Three</h5>
                   <img src={Task3} alt="task3"  className="howImg"/>
                   <p>Submit Campaign Title, Picture, and Story</p>
                   </div>
                   </Col>
                   <Col lg="6 mt-2 mb-3" md="6" sm="6">
                   <div className="steps">
                   <h5>Step Four</h5>
                   <img src={Task1} alt="task1"  className="howImg"/>
                   <p>Submit Campaign Title, Picture, and Story</p>
                   </div>
                   </Col>
               </Row>
           </Container>

           </div>
           <Guide/>
        </div>
    )
    }
}

export default How;
