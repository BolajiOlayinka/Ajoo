import React from "react";
import { Row, Col } from "reactstrap";
import logo from "./images/logo_1.png";
import twitter from "./images/twitter.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";

import Appstore from "./images/playStore.png";
import Googleplay from "./images/googlePlay.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footerTitle">
            <a href="index.html">Solutions</a>
          </div>
          <div className="footerBody">
            <p>
              <a href="index.html">FEDPAY</a>
            </p>
            <p>
              <a href="index.html">Online Application</a>
            </p>
            <p>
              <a href="index.html">Financial Planning</a>
            </p>
            <p>
              <a href="index.html">Collateral Free Loan</a>
            </p>
            <p>
              <a href="index.html">Affordable interest rates</a>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footerTitle">
            <a href="index.html">Resources</a>
          </div>
          <div className="footerBody">
            <p>
              <a href="index.html">Blog</a>
            </p>
            <p>
              <a href="index.html">Privacy Policy</a>
            </p>
            <p>
              <a href="index.html">Terms of Service</a>
            </p>
            <p>
              <a href="index.html">Press</a>
            </p>
            <p>
              <a href="index.html">Contact Us</a>
            </p>
            <p>
              <a href="index.html">Fraud ALERTS</a>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footerTitle">
            <a href="index.html">Support</a>
          </div>
          <div className="footerBody">
            <p>
              <a href="index.html">+2348021810034</a>
            </p>
            <p>
              <a href="index.html">hello@arvofinance.com</a>
            </p>
            <p>
              <a href="index.html">ombudsman</a>
            </p>
            <p>
              <a href="index.html">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr className="footerLine" />
      <div className="footerEnd">
      <Row>
        <Col lg="4" md="4" sm="4" xs="12">
        <p>
          <a href="index.html">Download Our Mobile App</a>
         
        </p>
        <p> <a href="index.html"> 
        <img src={Appstore} alt="Appstore" className="app"/>
          <img src={Googleplay} alt="googleplay" className="google"/></a></p>
        </Col>
        <Col lg="4" md="4" sm="4" xs="12">
        <a href="index.html" className="copyRight">
          <p>© Bolaji Olayinka 2019</p>
        </a>
        </Col>
        <Col lg="4 pr-5" md="4 pr-3" sm="4" xs="12 pr-0">
        <a href="index.html">
                <img src={twitter} alt="twitter" className="" />
                <img src={facebook} alt="facebook" className=""/>
                <img src={instagram} alt="instagram" className=""/>
                
              </a>
      </Col>
      </Row>
       
        <div className="footerEndIcon">
         
        </div>
        
      </div>
    </div>
  );
}
