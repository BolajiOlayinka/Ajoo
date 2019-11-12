import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Guide from './Components/campaignGuide';
import log1 from './images/log1.png';
import Tick from './images/Tick.png';
import './VerifiedOrg.css';
import warning from './images/warning.png';
import verfied1 from './images/Verified1.png';
import verfied2 from './images/Verified2.png';
import verfied3 from './images/Verified3.png';
import gmail from './images/gmail.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import Campaign from './Components/Campaign';
import Progress from './Components/Progress';
import Rectangle from './images/Rectangle4.png';
import arrow from './images/arrow-right.png';



export default function VerifiedOrg() {
    return (
        <div>
        <div className="mainVerifiedOrg">
        
            <div className="verifiedArea">
            <img src={log1} alt="log1"/>
            <div className="tickArea">
            <span className="tickSection">
            <img src={Tick} alt="tick"/> 
            <h2> E-HEALTH AFRICA</h2>
            </span>
            
            </div>
            <h5>Non-Profit</h5>
            
            </div>
            <div className="warning">
                <img src={warning} alt="warning"/>
                <p>Report this Organization</p>
            </div>

            <div className="orgDetailsArea">
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="6" xs="12">
                        <img src={verfied1} alt="verif"/>
                    </Col>
                    <Col lg="4" md="4" sm="6" xs="12">
                        <img src={verfied2} alt="verify"/>
                    </Col>
                    <Col lg="4" md="4" sm="6" xs="12">
                        <img src={verfied3} alt="verifyy"/>
                    </Col>
                </Row>
                </Container>
                <div className="contactArea">
                <Container>
                <Row>
                    <Col lg="4" sm="4" md="4" xs="4">
                    <p> No 123, Victoria Street, Lagos Junction, Abuja.</p>

                    </Col>
                    <Col lg="4" sm="4" md="4" xs="4">
                        
                    </Col>
                    <Col lg="4 text-right" sm="4 text-right" md="4 text-right" xs="4 text-right">
                    <button className="blueButton">Donate to Organization</button>
                    <Row>
                
               </Row>
                    </Col>
                </Row>
                </Container>
               
               
               
                </div>
                <div className="social">
                <div className="socialMedia">
                    
                    <p><a href="gmail.com"><img src={gmail} alt="gmail"/>Send a Mail</a></p>
                    </div>
                    <div className="socialMediaIcons">
                         
                         <p> <a href="twitter.com"><img src={twitter} alt="gmail"/></a></p>
                          <p><a href="gmail.com"><img src={facebook} alt="gmail"/></a></p>
                         <p><a href="instagram.com"><img src={instagram} alt="gmail"/></a></p>
                         
                          
                          </div>
                          </div>
                    
                   

            </div>
            <h3 className="whyTitle" id="verCamp">Campaigns</h3>
            <div className="campaigns">
            <Row>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  buttonId={"lightGreen"}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonId={"babyPink"}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                 campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonId={"lightGreen"}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonId={"babyPink"}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                 campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonId={"lightGreen"}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonId={"babyPink"}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                 campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonId={"lightGreen"}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Campaign
                  campaignImage={<img src={Rectangle} alt="Rect" />}
                  campaignMark={<img src={Tick} alt="tick" className="mark"/>}
                  buttonId={"babyPink"}
                  buttonText={"Submit"}
                  cardProgress={<Progress />}
                  cardTitle={"Fintech Startup"}
                  cardText={
                    " I need help to set up my Fintech startup and I need help with initial funding something something."
                  }
                  campaignViewLink={"View Campaign"}
                  linkImg={<img src={arrow} alt="" />}
                />
              </Col>
            </Row>
          </div>
        </div>
            <Guide/>
        </div>
    )
}
