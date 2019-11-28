import React from "react";
import "./Volunteer.css";
import { Container, Row, Col } from "reactstrap";
import volunteers from "./images/diversity_2.png";
import data from "./images/personal_data_1.png";
import Card from './VolunteerCard';
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import avatar3 from './images/avatar3.png';
import avatar4 from './images/avatar4.png';
import star1 from './images/star1.png';
import star2 from './images/start2.png';
import star3 from './images/star3.png';
import warning from './images/warning.png';
import Guide from './Components/campaignGuide';


export default function Volunteer() {
  return (
    <div>
      <div className="volunteerHead">
        <div className="volunteerBanner">
          <h1>Ajoo Volunteers</h1>
          <p>
            {" "}
            For Ajoo, we are not just about crowdfunding, we are about
            community. This is why, beyond raising money, it is important that
            we maintain the integrity of campaigns put up on this platform.
            While we can not do this alone, the community can ensure that
            donations are made towards sincere causes.
          </p>
        </div>
        <img src={volunteers} alt="volunteer" />
      </div>

      <div className="volunteerBody">
        <h4 className="volunteerWork">How Volunteering Works</h4>
      </div>
      <Container>
        <Row>
          <Col lg="6 mt-5" md="12" sm="12" xs="12">
            <p>
              Register as a volunteer and help verify that campaigns are true
              and sincere. Volunteers are assigned to campaigns based on
              location.
            </p>
            <p>
              Once registered as a volunteer, you get notified of campaigns with
              same geo-tag as your registered location. After reviewing the
              campaign details, and if comfortable with the information, you can
              then accept to be assigned to the campaign.
            </p>
            <p>
              {" "}
              Once assigned to the campaign, you can help take further steps to
              help verify the campaign. Such further steps include: Visiting the
              hospital in case of medical emergencies, Phone interviews with the
              campaigner, Where a safe neutral location can be agreed upon,
              meeting the campaigner in person.
            </p>
            <p>
              {" "}
              Once satisfied with the situation and facts available, you can
              then recommend the campaign for a verified status. Campaigns with
              verified status are presumed to be true, sincere and worthy of
              support. Hence, volunteers should not recommend campaigns where
              there is any form of doubt at all.
            </p>
          </Col>
          <Col lg="6 mt-5" md="12" sm="12" xs="12">
            <img src={data} alt="data" className="data"/>
          </Col>
        </Row>
       
      </Container>
      <div className="centerButton">
            <button className="blueButton"> Become A Volunteer</button>
          </div>
          <div className="volunteerArea">
              <Container>
                  <Row>
                      <Col lg="3" md="6"  sm="12" xs="12">
                           <Card
                               cardImage={<img src={avatar4} alt="avatar"/>}
                               cardStar={<img src={star1} alt="star"/>}
                               cardName="Hassan Chukwudi"
                               warningImage={<img src={warning} alt="warning"/>}
                               warningText="Report Volunteer"
                           />
                      </Col>
                      <Col lg="3" md="6"  sm="12" xs="12">
                           <Card
                               cardImage={<img src={avatar1} alt="avatar"/>}
                               cardStar={<img src={star2} alt="star"/>}
                               cardName="Hassan Chukwudi"
                               
                           />
                      </Col>
                      <Col lg="3" md="6"  sm="12" xs="12">
                           <Card
                               cardImage={<img src={avatar2} alt="avatar"/>}
                               cardStar={<img src={star3} alt="star"/>}
                               cardName="Hassan Chukwudi"
                             
                           />
                      </Col>
                      <Col lg="3" md="6" sm="12" xs="12">
                           <Card
                               cardImage={<img src={avatar3} alt="avatar"/>}
                               cardStar={<img src={star2} alt="star"/>}
                               cardName="Hassan Chukwudi"
                               
                           />
                      </Col>
                      <Col lg="3" md="6"  sm="12" xs="12">
                           <Card
                               cardImage={<img src={avatar1} alt="avatar"/>}
                               cardStar={<img src={star3} alt="star"/>}
                               cardName="Hassan Chukwudi"
                               
                           />
                      </Col>
                      <Col lg="3" md="6" sm="12" xs="12">
                           <Card
                               cardImage={<img src={avatar2} alt="avatar"/>}
                               cardStar={<img src={star1} alt="star"/>}
                               cardName="Hassan Chukwudi"
                              
                           />
                      </Col>
                      <Col lg="3" md="6" sm="12" xs="12">
                           <Card
                               cardImage={<img src={avatar4} alt="avatar"/>}
                               cardStar={<img src={star3} alt="star"/>}
                               cardName="Hassan Chukwudi"
                             
                              
                           />
                      </Col>
                      <Col lg="3" md="6" sm="12" xs="12">
                           <Card
                               cardImage={<img src={avatar1} alt="avatar"/>}
                               cardStar={<img src={star1} alt="star"/>}
                               cardName="Hassan Chukwudi"
                             
                           />
                      </Col>
                  </Row>
              </Container>
          </div>
          <Guide/>
    </div>
  );
}
