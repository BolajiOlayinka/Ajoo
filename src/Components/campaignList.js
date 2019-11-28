import React from "react";
import Campaign from "./Campaign";

import { Col } from "reactstrap";

export default function campaignList({ campaignData }) {
  return (
    <React.Fragment>
      {campaignData.map((data, i) => {
        return (
          <Col lg="6 mt-5" md="6" sm="6" xs="6">
            <Campaign
              key={i}
              id={campaignData[i].id}
              cardTitle={campaignData[i].title}
              cardText={campaignData[i].text}
              campaignImage={<img src={campaignData[i].url} alt="Boom" />}
              buttonText={"Submit"}
              campaignViewLink={"View Campaign"}
              linkImg={<img src={campaignData[i].link} alt="arrow" />}
            />
          </Col>
        );
      })}
    </React.Fragment>
  );
}
