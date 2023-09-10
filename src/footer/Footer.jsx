import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import dwarf from "../images/dwarf.png";
import wine from "../images/wine.png";
import snapchat from "../images/snapchat.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <div className="empty-div"></div>
      <br />
      <hr />

      <Row>
        <Col xs lg="2">
          <p className="text-start"><a href="httpsexample" target="_blank">Company Information</a></p>
          <p className="text-start"><a href="httpsexample" target="_blank">Privacy Policy</a></p>
        </Col>
        <Col md="auto">
          {" "}
          <p className="text-start"><a href="httpsexample" target="_blank">Where we are</a></p>
          <p className="text-start"><a href="httpsexample" target="_blank">Work with us</a></p>
          <p className="text-start"><a href="httpsexample" target="_blank">Contact</a></p>
        </Col>
        <Col>
          <p className="text-end">STAY UP TO DATE</p>
          <p className="text-end">
            Sign up to our newsletter for a weekly round-up of news and stories
            delivered direct to your inbox.
          </p>
          <br />
          <p className="text-end"><a href="httpsexample" target="_blank">SUBSCRIBE</a></p>
        </Col>
      </Row>

      <Row className="justify-content-md-center footer-logo-row">
        <hr />
        <Col xs="12" md="4" className="footer-logo-column">
          <img src={dwarf} alt="" className="dwarf-img" />
          <span>
            <img src={wine} alt="" className="wine-img" />
          </span>
          <h3>THE IMPS DELIGHT</h3>
        </Col>
        <Col xs="12" md="4">
          <h5 className="text-center">follow Us</h5>
          <div className="socials-div justify-content-center">
            <img src={snapchat} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </Col>
        <Col xs="12" md="4" className="text-end copyright-text">&copy; Created by Elijah Ofori, 2023</Col>
      </Row>
    </Container>
  );
};

export default Footer;
