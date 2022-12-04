import React from "react";
import 'animate.css';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about-pfp.png";
import Interests from "./Interests";

function About() {
  return (
    <head>
        <title>About Me</title>
        <meta name="description" content="I am currently a student at the University of California, Los Angeles studying Cognitive Science."></meta>
    </head>,
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 class="animate__animated animate__fadeInDown" style={{ fontSize: "2.4em", paddingBottom: "0px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{paddingTop: "50px"}}
            className="about-img-block"
            >
            <img src={laptopImg} alt="about" className="img-fluid" style={{maxWidth: "100%", maxHeight: "65%"}}/>
          </Col>
        </Row>
        <h1 className="project-heading-mobile">
          <strong>My</strong> <strong className="purple">Interests</strong>
        </h1>
        <Interests />
      </Container>
    </Container>
  );
}

export default About;
