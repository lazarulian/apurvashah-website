import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutproblems from "../../Assets/about-problems.svg";
import aboutduffl from "../../Assets/about-duffl.svg";
import aboutbackpacking from "../../Assets/about-backpacking.svg";


function Toolstack() {
  return (
    <Container className = "container-mobile-hide">
      <Row className = "about-interests-rows">
        <Col md={6} className = "about-interests-cols">
          <h1 className = "about-interests-title">Backpacking <span className = "purple">Across California</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col md={6} style={{}}>
          <img className = "about-interests-imgs" src = {aboutbackpacking}></img>
        </Col>
      </Row>
      <Row className = "about-interests-rows">
        <Col md={6} style={{}}>
          <img className = "about-interests-imgs" src = {aboutduffl}></img>
        </Col>
        <Col md={6} className = "about-interests-cols">
          <h1 className = "about-interests-title">Racing <span className = "purple">at Duffl</span></h1>   
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

 
        </Col>
      </Row>
      <Row className="about-interests-rows">
        <Col md={6} className = "about-interests-cols">
          <h1 className = "about-interests-title">Solving <span className = "purple">Complex Problems</span></h1>
          <p className = "about-interests-cols" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col md={6} style={{}}>
          <img className = "about-interests-imgs" src = {aboutproblems}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Toolstack;
