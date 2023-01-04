import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutproblems from "../../Assets/about-problems.svg";
import aboutduffl from "../../Assets/about-duffl.svg";
import aboutbackpacking from "../../Assets/about-backpacking.svg";

function Toolstack() {
  return (
    <Container className="container-mobile-hide">
      <Row className="about-interests-rows">
        <Col md={6} className="about-interests-cols">
          <h1 className="about-interests-title">
            One Bagging <span className="purple">Around the World</span>
          </h1>
          <p>
            One-Bagging is an incredibly rewarding experience. There's something
            exhilarating about packing up all of your essentials for 2+ weeks
            and heading out to a new destination to explore. Without having to
            carry any luggage you are free to stay at hostels and fly with
            budget airlines like easyjet and ryanair. When doing this, it is
            incredibly easy to travel accross many countries in a short period
            of time rather than tying yourself down in a singular destination.
          </p>
          <p>
            With one-bagging, you can make new friends, learn valuable skills,
            and test your limits. It's truly an amazing way to spend your time,
            and I can't recommend it enough. So far, I have one-bagged to
            Chicago, DC, Austin, NYC, and Vegas. Looking forward to my next
            destination: London!
          </p>
        </Col>
        <Col md={6} style={{}}>
          <img
            className="about-interests-imgs"
            alt="one-bagging"
            src={aboutbackpacking}
          ></img>
        </Col>
      </Row>
      <Row className="about-interests-rows">
        <Col md={6} style={{}}>
          <img
            className="about-interests-imgs"
            alt="racing at duffl"
            src={aboutduffl}
          ></img>
        </Col>
        <Col md={6} className="about-interests-cols">
          <h1 className="about-interests-title">
            Racing <span className="purple">at Duffl</span>
          </h1>
          <p>
            Riding an electric scooter is so fun because it's fast and
            convenient. I feel the thrill of zooming around on my scooter,
            without having to worry about changing gears or pumping the pedals.
            It's a great way to get around town quickly, while still feeling the
            wind in my hair and the sun on my face. Plus, scootering is super
            easy to learn, so even if you don't have any experience, you can
            still have a blast. I'm always having a great time riding my
            electric scooter!
          </p>
          {/* <br></br> */}
          <p>
            Furthermore, working at a startup is incredibly fun because I get to
            be part of something that is growing and evolving. I get to use my
            skills and creativity to help shape the direction of the company,
            and I get to work with other passionate and innovative people. I
            also get to learn a lot, since there are a lot of new experiences
            and challenges that come with working in a startup environment.
            Plus, I get to be part of something that could potentially change
            the world!
          </p>
        </Col>
      </Row>
      <Row className="about-interests-rows">
        <Col md={6} className="about-interests-cols">
          <h1 className="about-interests-title">
            Solving <span className="purple">Problems</span> with Computer
            Science
          </h1>
          <p>
            As a computer scientist, I find problem solving to be one of the
            most fascinating and challenging aspects of my field. From designing
            algorithms that can process large amounts of data efficiently to
            creating programs that can automate mundane tasks, I'm constantly
            looking for ways to use my knowledge and skills to create innovative
            solutions.
          </p>
          <p>
            I'm constantly inspired by the potential of computer science to make
            people's lives easier and more efficient. Whether I'm helping to
            streamline the work process of a business or developing a program to
            help people learn a new language, I'm always striving to find the
            best possible solution to a problem. It's incredibly satisfying to
            take a complex problem and find a creative solution that can be used
            to benefit others.
          </p>
        </Col>
        <Col md={6} style={{}}>
          <img
            className="about-interests-imgs"
            alt="solving-with-computerscience"
            src={aboutproblems}
          ></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Toolstack;
