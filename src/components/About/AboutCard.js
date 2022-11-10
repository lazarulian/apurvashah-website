import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{}}>
            Hi everyone, I'm <span className="purple">Apurva</span>! I'm currently a Junior at UCLA studying Cognitive Science Specializing in Computer Science.
            <br />
            <br />
            Where to start? In my free time, I love journaling, listening to music, reading, and budgeting! Being raised in the 
            <span className="purple"> Bay Area</span>, being a <span className="purple">49ers/Warriors</span> fan is a part of my identity.
            <br />
            <br />
            On campus, I am involved in a few organizations that I really care about. I work within the <span className="purple">Campus Events Comission</span>, 
            organizing events like Bruin Bash and Ultra Bloom. I also was involved with <span className="purple">The Mobile Clinic Project</span>, providing free
            care to the unhoused within Los Angeles. Lastly, I am a member of the <span className="purple">UCLA Digital Health Lab</span>, which works with 
            companies such as Meta, Oura, and Apple to validate their device accuracy and provide assessments to the sports teams at UCLA.
            <br />
            <br />
            Professionally and academically, I have worked in Software Engineering, ML, and Clinical Research. At school, I work as a
            <span className="purple"> photographer & videographer</span> for UCLA and <span className="purple"> clinical research assistant</span>, 
            at a Digital Health Lab in the School of Medicine.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
