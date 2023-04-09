import Heading from "components/about/Heading";
import Page from "components/utility/Page";
import React from "react";

const About = () => {

  return (
    <Page
      currentPage="About"
      meta={{ title: "About", desc: "A little bit about me." }}
    >
      <Heading />
    </Page>
  );
};

export default About;