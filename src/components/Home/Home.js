import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Techstack from "./Techstack";
import Contact from "./contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi, I'm Apurva!{" "}
              </h1>
              <h1 className="heading-name">
                I'm currently working on
              </h1>

              <div style={{paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 0 }}>
              <img 
                src={homeLogo}
                alt="home pic"
                className="home-image"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container> {/*home banner*/}

      <Container style={{paddingTop: 60, paddingBottom: 50}}>
        <Row>
          <h1 className="h1-line">
            Professional&nbsp;<strong className="purple"> Skillset</strong>
          </h1>
          <Techstack />
        </Row>
      </Container> {/*home supplement information*/}
      <Contact />
    </section>
  );
}

export default Home;