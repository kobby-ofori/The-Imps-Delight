import React from "react";
import "./Extra.css";
import { Col, Container, Row } from "react-bootstrap";

const Extra = () => {
  return (
    <Container fluid className="extra-container" id="extra">
      <Row>
        <Col xs="12" md="6" className="gallery"></Col>
        <Col xs="12" md="6" className="shop">
          <button className="btn extra-btn">
            <h4>Shop</h4>
          </button>
          <button className="btn extra-btn extra-btn-2">
            <h4>Gallery</h4>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Extra;
