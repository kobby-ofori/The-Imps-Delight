import React from "react";
import "./Navs.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import dwarf from "../../images/dwarf.png";
import wine from "../../images/wine.png";
import { Link } from "react-scroll";

const Navs = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className="brand-detail">
          <img src={dwarf} alt="" className="nav-dwarf-img" />
          <span>
            <img src={wine} alt="" className="nav-wine-img" />
          </span>
          <Link to="home" span={true} smooth={true}>
            <h3>THE IMPS DELIGHT</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav.Link href="#action1">
            <Link to="home" span={true} smooth={true} className="nav-link-text">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#action2" className="nav-link-text">
            <Link to="description" span={true} smooth={true}>
              Info-Section
            </Link>
          </Nav.Link>
          <Nav.Link href="#action2" className="nav-link-text">
            <Link to="extra" span={true} smooth={true}>
              Contact
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
