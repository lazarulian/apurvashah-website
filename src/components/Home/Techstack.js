import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiDjango
} from "react-icons/di";
import {
  SiPytorch,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiGo,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Container fluid>
      <Row style={{ justifyContent: "center",}}>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://cplusplus.com/"><CgCPlusPlus /></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://www.python.org/"><DiPython /></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://www.javascript.com/"><DiJavascript1></DiJavascript1></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://go.dev/"><SiGo></SiGo></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://www.mysql.com/"><SiMysql></SiMysql></a>
        </Col>
      </Row>
      <Row className = "tech-row2" style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://www.djangoproject.com/"><DiDjango/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://pytorch.org/"><SiPytorch/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://reactjs.org/"><DiReact/></a>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://nodejs.org/en/"><DiNodejs/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://www.mongodb.com/"><DiMongodb/></a>
        </Col>
        {/* Photography Icons */}
        
        {/* <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://www.adobe.com/products/premiere.html"><SiAdobepremierepro/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <a className = "icon-anchor" href="https://www.adobe.com/products/photoshop-lightroom.html"><SiAdobelightroom/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a className = "icon-anchor" href="https://www.adobe.com/products/illustrator.html"><SiAdobeillustrator/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a className = "icon-anchor" href="https://www.adobe.com/products/indesign.html"><SiAdobeindesign/></a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a className = "icon-anchor" href="https://www.adobe.com/products/photoshop-lightroom.html"><SiAdobephotoshop/></a>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Techstack;
