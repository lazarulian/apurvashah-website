import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I love to build things using the skills at my disposal! Here are some of my favorite projects." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
