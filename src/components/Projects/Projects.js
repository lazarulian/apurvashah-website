import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ScaleCPET from "../../Assets/Projects/ScaleCPET.png";
import licensePlate from "../../Assets/Projects/license-plate.png";
import portfolio from "../../Assets/Projects/personal-portfolio.png";
import blog from "../../Assets/Projects/blog.png";

import hopeinitiative from "../../Assets/Projects/hopeinitiative.png";
import lsla from "../../Assets/Projects/lsla.png";
import homekit from "../../Assets/Projects/homekit.png";
import bruinden from "../../Assets/Projects/bruinden.png";

function Projects() {
  return (
    (
      <head>
        <title>Projects</title>
        <meta
          name="description"
          content="Explore some of the projects I have worked on in the realm of software and social services."
        ></meta>
      </head>
    ),
    (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>What I've been working on recently!</p>
          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ScaleCPET}
                // isBlog={false}
                title="ScaleCPET"
                description="A scalable Cardiopulmonary exercise testing suite that delivers brief analytical reports containing meaningful patient analysis and insight."
                ghLink="https://github.com/lazarulian/ScaleCPET"
                demoLink="https://github.com/lazarulian/ScaleCPET"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blog}
                isBlog={false}
                title="Cheat Codes"
                description="My personal blog created using Next.js, Tailwind.css, GraphCMS, and GraphQL. Please check it out below!"
                ghLink="https://github.com/lazarulian/cheatcodes"
                demoLink="https://blog.apurvashah.org/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bruinden}
                isBlog={false}
                title="Bruin den"
                description="A platform to find historical rent prices increasing housing accessibility within Westwood, Los Angeles. Please check it out below!"
                ghLink="https://github.com/lazarulian/bruin-den"
                demoLink="https://bruinden.tech/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={licensePlate}
                isBlog={false}
                title="License Plate Identifier"
                description="A fully functional standalone flask application that will automatically detect and interpret license plate information when it is presented in real time. Models trained with Deep Learning through Yolov5."
                ghLink="https://github.com/lazarulian/ObjectDetectionTesting"
                demoLink="https://github.com/lazarulian/ObjectDetectionTesting"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="Personal Portfolio"
                description="Used react, node, html, css to create the beautiful personal portfolio website you are looking at right now."
                ghLink="https://github.com/lazarulian/apurvashah-website"
                demoLink="https://apurvashah.org/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={homekit}
                isBlog={false}
                title="HomekitAPI"
                description="A simple command line tool to control a garage door using a Raspberry Pi."
                ghLink="https://github.com/lazarulian/GarageDoorHomekitAPI"
                demoLink="https://github.com/lazarulian/GarageDoorHomekitAPI"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={lsla}
                isBlog={false}
                title="Lost Stories of LA"
                description="Work with the unhoused population of Los Angeles to understand systematic failures within our modern care-delivery system."
                // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hopeinitiative}
                isBlog={false}
                title="The Hope Initiative"
                description="Work with the unhoused population of Los Angeles to understand systematic failures within our modern care-delivery system."
                // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
              />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  );
}

export default Projects;
