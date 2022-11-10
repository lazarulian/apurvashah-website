import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section className="react-contact">
        <Container>
            <div className="contact-bx">
                <Row>
                    <Col md = {7} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Let's grab a  <span className="purple"> Coffee </span> sometime!
                        </h1>
                        <p>
                            Feel free to <span className="purple">reach out</span> to me on any of my platforms. I would love to get to know you.
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                            <a
                                href="https://github.com/lazarulian"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                            </li>
                            <li className="social-icons">
                            <a
                                href="https://twitter.com/apurvashahhh"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                            </li>
                            <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/apurvashahh/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                            </li>
                            <li className="social-icons">
                            <a
                                href="https://www.instagram.com/apurvashahh/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                    <div class="container-coffee">
                        <div class="coffee-header">
                            <div class="coffee-header__buttons coffee-header__button-one"></div>
                            <div class="coffee-header__buttons coffee-header__button-two"></div>
                            <div class="coffee-header__display"></div>
                            <div class="coffee-header__details"></div>
                        </div>
                        <div class="coffee-medium">
                            <div class="coffe-medium__exit"></div>
                            <div class="coffee-medium__arm"></div>
                            <div class="coffee-medium__liquid"></div>
                            <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
                            <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
                            <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
                            <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
                            <div class="coffee-medium__cup"></div>
                        </div>
                        <div class="coffee-footer"></div>
                    </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}
export default Contact;