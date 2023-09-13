import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I love to build things using the skills at my disposal! Here are some of my favorite projects.",
      }}
    >
      <Heading
        tag="Passion"
        description="Creations from my lab, at hackathons, or just to make my life a little bit easier 😁"
      />
      <Projects projectType="passionProjects" />
      <Heading
        tag="Academic"
        description="These are some of the highlights from the classes I've taken at UCLA 🐻"
      />
      <Projects projectType="academicProjects" />
      <More />
    </Page>
  );
}

export default projects;
