import React, { Component } from "react";
import "./Search.css";
import { Container, Row, Col } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";
import CampaignList from "./Components/campaignList";
import SearchBox from "./searchBox";
import { campaignData } from "./Data";

import Guide from "./Components/campaignGuide";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      campaign: campaignData,
      searchfield: ""
    };
  }
  onChange = e => {
    this.setState({ searchfield: e.target.value });
    console.log(e.target.value);

  };
  render() {
    const searchCampaign = this.state.campaign.filter(campaignData => {
      return (campaignData.title 
        .toLowerCase())
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(searchCampaign)
    return (
      <div>
        <div className="searchBanner">
          <div className="verifiedBannerBody">
            <h1>Explore</h1>
            <SearchBox onchange={this.onChange} />
          </div>
        </div>
        <div className="mainPage">
          <div className="filter">
            <Row>
              <Col lg="3 mt-5 mb-5 border-right" md="12" sm="12" xs="12">
                <Container>
                  <div className="campaignFilters">
                    <h5 className="filterTitle">Campaign Filters</h5>

                    <div className="filterSub">
                      <h6>CATEGORIES</h6>
                      <hr />
                    </div>

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
              <Col lg="9 mb-5" md="12" sm="12" xs="12">
                <Container>
                  <Row>
                    <CampaignList campaignData={searchCampaign}/>
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

  }