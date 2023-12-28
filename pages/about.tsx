import Heading from "components/about/Heading";
import AboutInformation from "@/components/about/AboutInformation";
import AboutMoreInformation from "@/components/about/AboutMoreInformation";
import Page from "components/utility/Page";
import React from "react";

const About = () => {
  return (
    <Page
      currentPage="About"
      meta={{
        title: "About",
        desc: "Hi, my name is Apurva and I am a student at UCLA studying Cognitive Science. In my free time, I love to backpack & solve complex problems with computer science.",
      }}
    >
      <Heading />
      <AboutInformation />
      <AboutMoreInformation />
    </Page>
  );
};

export default About;
