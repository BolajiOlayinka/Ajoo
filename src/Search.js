import React from "react";
import "./Search.css";
import { Container, Row, Col } from "reactstrap";
import { Form, FormGroup, Input, Dropdown } from "reactstrap";
import search from "./images/search.png";
import Campaign from "./Components/Campaign";
import Progress from "./Components/Progress";
import arrow from "./images/arrow-right.png";
import Children from "./images/Rectangle3.png";
import Meeting from "./images/Rectangle10.png";
import Line from "./images/Line3.png";

import Guide from "./Components/campaignGuide";

export default function Search() {
  return (
    <div>
      <div className="searchBanner">
        <div className="verifiedBannerBody">
          <h1>Explore</h1>
          <div class="form-class">
            <a href="index.html">
              <img src={search} className="search" alt="search" />
            </a>
            <input
              className="input-field"
              type="text"
              name="search"
              placeholder=" Search Campaigns"
            />
          </div>
        </div>
      </div>
      <div className="mainPage">
        <div className="filter">
          <Row>
            <Col lg="3 mt-5 mb-5 border-right" md="3" sm="3" xs="4">
              <Container>
                <div className="campaignFilters">
                  <h5 className="filterTitle">Campaign Filters</h5>

                  <div className="filterSub">
                    <h6>CATEGORIES</h6>
                    <hr />
                  </div>
                  {/* <img src={Line} alt="line" className="underLine"/> */}
                  <Form>
                    <FormGroup row>
                      <Col sm={12}>
                        <Input type="select" id="formSearch">
                          <option>All</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </Form>

                  <div className="filterSub">
                    <h6>TIME</h6>
                    <hr />
                    <div className="radioBlock">
                      <span className="inputSection">
                        <input
                          type="radio"
                          className="radioClass"
                          name="verify"
                          value="Top Campaigns"
                        />{" "}
                        Top Campaigns
                      </span>{" "}
                      <br />
                      <span className="inputSection">
                        <input
                          type="radio"
                          className="radioClass"
                          name="verify"
                          value="Campaigns"
                        />{" "}
                        New Campaigns{" "}
                      </span>{" "}
                      <br />
                      <span className="inputSection">
                        <input
                          type="radio"
                          className="radioClass"
                          name="verify"
                          value="Campaigns"
                        />{" "}
                        Closing Campaigns{" "}
                      </span>
                      <br />
                    </div>
                  </div>

                  <div className="filterSub">
                    <h6>VERIFICATION</h6>
                    <hr />
                    <div className="radioBlock">
                      <span className="inputSection">
                        <input
                          type="radio"
                          className="radioClass"
                          name="verify"
                          value="Top Campaigns"
                        />{" "}
                        All
                      </span>{" "}
                      <br />
                      <span className="inputSection">
                        <input
                          type="radio"
                          className="radioClass"
                          name="verify"
                          value="Campaigns"
                        />{" "}
                        Verified Campaigns
                      </span>{" "}
                      <br />
                      <span className="inputSection">
                        <input
                          type="radio"
                          className="radioClass"
                          name="verify"
                          value="Campaigns"
                        />{" "}
                        Non-Verified Campaigns{" "}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </Container>
            </Col>
            <Col lg="9 mb-5" md="9" sm="9" xs="8">
              <Container>
                <Row>
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Children} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Meeting} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Children} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Meeting} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Children} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Meeting} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Children} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Meeting} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Children} alt="Rect" />}
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
                  <Col lg="6 mt-5" md="6" sm="6" xs="6">
                    <Campaign
                      campaignImage={<img src={Meeting} alt="Rect" />}
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
              </Container>
            </Col>
          </Row>
        </div>
      </div>

      <Guide />
    </div>
  );
}
