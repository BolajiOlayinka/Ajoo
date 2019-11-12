import React from 'react';
import './Verified.css';
import '../src/Components/Button.css';
import { Container, Row, Col } from "reactstrap";
import { Input } from 'reactstrap';
import checkList from './images/checklist.png';
import VerifiedCard from './VerifiedCard';
import log1 from './images/log1.png';
import log2 from './images/log2.png';
import log3 from './images/log3.png';
import log4 from './images/log4.png';
import log5 from './images/log5.png';
import log6 from './images/log6.png';
import log7 from './images/log7.png';
import log8 from './images/log8.png';
import Guide from './Components/campaignGuide';

export default function Verified() {
    return (
        <div>
        <div className="verifiedBanner">
        <div className="verifiedBannerBody">
           <h1>Ajoo Verified Organisations</h1>
           <p>Ajoo takes an additional step to verify the organisations 
           that sign up on the platform and makes them stand out from others.</p>
           </div>
           <div className="centerButton">
          <button className="blueButton">View Verified Organisations</button>
        </div>
           </div>
           <div className="mainPage">
           <div className="verify">
           <Row>
               <Col lg="6" md="6" sm="12" xs="12">
                    <h3>What it means to be verified.</h3>
                    <p className="verifyPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Quisque sapien velit, aliquet eget commodo nec, auctor a 
                     sapien. Nam eu neque vulputate diam rhoncus faucibus. 
                     Curabitur quis varius libero. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit. Aliquam placerat sem at mauris 
                     suscipit porta. Cras metus velit, elementum sed pellentesque,</p>
               </Col>
               <Col lg="6" md="6" sm="12" xs="12">
                   <img src={checkList} alt="checklist" className="checkList"/>
               </Col>
           </Row>
           </div>
        </div>
        <div className="verifiedHead">
     
        <Col lg={6}>
         
            <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
          
        </Col>
        <Col lg={6}>
        <p className="verifiedHeadpara">28 Verified Organization</p> 
        </Col>
       
        

        </div>
        <div className="verifiedOrganization">
        <h2>Verified Organization</h2>
        <Container>
        <Row>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log1} alt="log1"/>}
            cardTag="E-HEALTH AFriCA"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log2} alt="log2"/>}
            cardTag="RED CROSS ASSOCIATION"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log3} alt="log3"/>}
            cardTag="BILL & MELINDA GATES FOUNDATION"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log4} alt="log4"/>}
            cardTag="AJOO"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log5} alt="log5"/>}
            cardTag="LAGOS UNIVERSITY TEACHING HOSPITAL"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log6} alt="log6"/>}
            cardTag="FOOD CONCEPTS"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log7} alt="log7"/>}
            cardTag="BIT BUCKET"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log8} alt="log8"/>}
            cardTag="SLACK"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log1} alt="log1"/>}
            cardTag="E-HEALTH AFriCA"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log2} alt="log2"/>}
            cardTag="RED CROSS ASSOCIATION"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log3} alt="log3"/>}
            cardTag="BILL & MELINDA GATES FOUNDATION"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log4} alt="log4"/>}
            cardTag="AJOO"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log5} alt="log5"/>}
            cardTag="LAGOS UNIVERSITY TEACHING HOSPITAL"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log6} alt="log6"/>}
            cardTag="FOOD CONCEPTS"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log7} alt="log7"/>}
            cardTag="BIT BUCKET"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        <Col lg="3" md="6" sm="6" xs="12"> 
        <VerifiedCard
            VerifiedImage={<img src={log8} alt="log8"/>}
            cardTag="SLACK"
            ashButton="VIEW CAMPAIGNS"
            blueButton="DONATE"
        />
        </Col>
        </Row>
        
        </Container>
        
        </div>
        <Guide/>
        </div>
    )
}
