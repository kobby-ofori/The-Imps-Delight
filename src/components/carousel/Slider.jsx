import React from "react";
import { Carousel, Col } from "react-bootstrap";
import wineslider1 from "../../images/wineslider1.jpg";
import wineslider2 from "../../images/wineslider2.jpg";
import wineslider3 from "../../images/wineslider3.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="custom-carousel">
      <Col className="custom-carousel" md="12" xs="12">
        <Carousel fade>
          <Carousel.Item>
            <img src={wineslider1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={wineslider2} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={wineslider3} alt="" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </div>
  );
};

export default Slider;
