import React from "react";
import "./Button.css";
import "./Banner.css";
import { Row, Col } from "reactstrap";
import father from "../images/father.png";
import nurse from "../images/nurse.png";
import Nurse from "../images/Nursee.png";
import blue from "../images/Blue.png";
import child from "../images/Children.png";
import lightBlue from "../images/lightBlue.png";
import yellow from "../images/Yellow.png";
import transparent from "../images/ashTransp.png";
import mouse from "../images/mouse.png";
import headPhone from "../images/headphone.png";
import badge from "../images/badge.png";
import shield from "../images/shield.png";
import line from "../images/Line2.png";
import rect from "../images/Rectangle.png";
import Progress from "./Progress";
import arrow from "../images/arrow-right.png";
import Rectangle from "../images/Rectangle1.png";
import sickBed from "../images/Rectangle8.png";
import villageChild from "../images/Rectangle9.png";
import Campaign from "../Components/Campaign";
import background from "../images/ashCircle.png";
import doctor from "../images/childCare.png";
import preg from "../images/preg.png";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import Blog from "./Blog";
import Trust1 from "../images/Trust1.png";
import Trust2 from "../images/Trust2.png";
import Trust3 from "../images/Trust3.png";
import Trust4 from "../images/Trust4.png";
import Guide from "./campaignGuide";

const style = {
  display: "flex"
};
export default function Banner() {
  return (
    <div>
      <div className="banner">
        <img src={blue} className="blue" alt="blue" />

        <img src={father} className="father" alt="father" />
        <img src={yellow} className="yellow" alt="yellow" />
        <img src={nurse} className="nurse" alt="nurse" />
        <img src={Nurse} className="Nurse" alt="nurse" />
        <img src={child} className="child" alt="child" />
        <img src={lightBlue} className="lightBlue" alt="lightBlue" />
        <img
          src={transparent}
          className="transparent xs-d-none"
          alt="transparent"
        />
        <div className="bannerLeft">
          <h2 class="bannerTitle">Donations, Rewards. Community</h2>
          <p>
            We are building a community where people with critical financial
            needs get the necessary assistance from well meaning Nigerians.{" "}
          </p>
          <button className="blueButton">Explore Campaigns</button>
        </div>
        <h3 className="whyTitle">Why Ajoo ?</h3>
        <div className="why">
          <Row>
            <Col lg="3" md="6 mb-2" sm="6 mb-3" xs="12">
              <img src={mouse} alt="mouse" />
              <h6 className="subheading"> Free and Simple Set-Up</h6>
              <img src={line} alt="line" />
              <p className="subheadingPara">
                Start fundraising in minutes, no goal requirements, no
                deadlines.
              </p>
            </Col>
            <Col lg="3" md="6 mb-2" sm="6 mb-3" xs="12">
              <img src={badge} alt="badge" />
              <h6 className="subheading"> Free and Simple Set-Up</h6>
              <img src={line} alt="line" />
              <p className="subheadingPara">
                Partnership with reliable and trusted organizations and
                volunteers
              </p>
            </Col>
            <Col lg="3" md="6 mb-2" sm="6 mb-3" xs="12">
              <img src={headPhone} alt="headPhone" />
              <h6 className="subheading"> Free and Simple Set-Up</h6>
              <img src={line} alt="line" />
              <p className="subheadingPara">
                Our Campaign coaches will answer your questions in 5 mins, day
                or night
              </p>
            </Col>
            <Col lg="3" md="6 mb-2" sm="6 mb-2" xs="12">
              <img src={shield} alt="shield" />
              <h6 className="subheading"> Free and Simple Set-Up</h6>
              <img src={line} alt="line" />
              <p className="subheadingPara">
                The Ajoo Safety Guarantee Protects your donations and supporters
              </p>
            </Col>
          </Row>
          <div className="centerButton">
            <button className="blueButton">Start a Campaign</button>
          </div>
          <h2 className="campaignTitle">Top Campaign</h2>

          <Row>
            <Col lg="8" md="8" sm="6">
              <img src={rect} alt="mother" className="mother" />
            </Col>
            <Col lg="4" md="4" sm="6">
              <div style={style}>
                <button className="campaignButton" id="lightBlue">
                  Support
                </button>
              </div>
              <h5 className="cardTitle">Children Learning</h5>
              <p className="cardBody">
                Neque dolore iucunda transferre fuga solent vocant perciperet
                iucunditatis nemore appellantur suas contentam ficta; Turpius
                molestum deorsus urbane emolumento nomini vester quae an aeterno
                vivi studio delectus, Eram singulos improborum molestia sine
                scribendi declinationem verissimum dolore inanium laetitia sero
                erant inviti Siculis.
              </p>
              <Progress />
              <div className="campaignLink">
                <a href="index.html"> View Campaign</a>{" "}
                <img src={arrow} alt="" />
              </div>
            </Col>
          </Row>
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
                  campaignImage={<img src={sickBed} alt="Rect" />}
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
                  campaignImage={<img src={villageChild} alt="Rect" />}
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
          <div className="centerButton">
            <button className="blueButton">View All Campaigns</button>
          </div>
        </div>
        <h2 className="campaignTitle">New Campaign</h2>
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
                campaignImage={<img src={sickBed} alt="Rect" />}
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
                campaignImage={<img src={villageChild} alt="Rect" />}
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
        <div className="centerButton">
          <button className="blueButton">View More</button>
        </div>
        <h2 className="campaignTitle">Closing Campaign</h2>
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
                campaignImage={<img src={sickBed} alt="Rect" />}
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
                campaignImage={<img src={villageChild} alt="Rect" />}
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
          <div className="centerButton">
            <button className="blueButton">View More</button>
          </div>
        </div>

        <div className="seekFunds">
          <div className="seekFundsBody">
            <p>Asking for funds is hard.</p>
            <h3>Ajoo makes it easier</h3>
            <p>
              It can be difficult asking for money from strangers. Ajoo isn’t a
              stranger, it is a community of well meaning individuals ready to
              help you when you need it. You can be a campaigner today and be a
              donor tomorrow, this is a community of people helping each other
              to solve financial problems.
            </p>
          </div>
          <img src={background} className="seekFundsBackground" alt="ash" />
          <img src={preg} alt="preg" className="pregnant" />
          <img src={doctor} alt="doc" className="doctor" />
        </div>

        <div className="blog">
          <h2 className="campaignTitle">From Our Blog</h2>
          <div className="campaigns">
            <Row>
              <Col lg="4 mt-4" md="6" sm="6">
                <Blog
                  campaignImage={<img src={blog1} alt="blog1" />}
                  cardTitle={
                    "Miseram sedulitatem Democritea accessio honesto discordant permagna Platonisrenovata?"
                  }
                  cardText={
                    "  Miseram sedulitatem Democritea accessio honesto discordant permagna Platonis ingenii Graecos praetermittenda assiduitas queo sit renovata?"
                  }
                  ReadLink={"Read More"}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Blog
                  campaignImage={<img src={blog2} alt="blog2" />}
                  cardTitle={
                    "Miseram sedulitatem Democritea accessio honesto discordant permagna Platonisrenovata?"
                  }
                  cardText={
                    " Miseram sedulitatem Democritea accessio honesto discordant permagna Platonis ingenii Graecos praetermittenda assiduitas queo sit renovata?"
                  }
                  ReadLink={"Read More"}
                />
              </Col>
              <Col lg="4 mt-4" md="6" sm="6">
                <Blog
                  campaignImage={<img src={blog3} alt="blog3" />}
                  cardTitle={
                    "Miseram sedulitatem Democritea accessio honesto discordant permagna Platonisrenovata?"
                  }
                  cardText={
                    " Miseram sedulitatem Democritea accessio honesto discordant permagna Platonis ingenii Graecos praetermittenda assiduitas queo sit renovata?"
                  }
                  ReadLink={"Read More"}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="centerButton">
          <button className="blueButton">Visit Blog</button>
        </div>
        <div className="logoArea">
          <h2>Trusted by Nigeria’s biggest Non-profit organizations</h2>
          <Row>
            <Col lg="3" md="3" sm="3" xs="3">
              <img src={Trust1} alt="Trust1" />
            </Col>
            <Col lg="3" md="3" sm="3" xs="3">
              <img src={Trust2} alt="Trust2" />
            </Col>
            <Col lg="3" md="3" sm="3" xs="3">
              <img src={Trust3} alt="Trust3" />
            </Col>
            <Col lg="3" md="3" sm="3" xs="3">
              <img src={Trust4} alt="Trust4" />
            </Col>
          </Row>
        </div>
      </div>
      <Guide />
    </div>
  );
}
