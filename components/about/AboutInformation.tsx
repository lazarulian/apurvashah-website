import React from "react";
import AboutCard from "./AboutCard";

function AboutInformation() {
  return (
    <div className="mx-auto md:w-2/3">
      <div className="text-left">
        <p className="">
          Hi everyone, I'm Apurva. I'm currently studying in Los Angeles, CA. In
          my free time, I enjoy backpacking, trying new foods, watching
          football, and reading new books.
          <br />
          <br />
          Some things that I am really passionate about are vegetarianism,
          improving my community, and social reform. If you are interested in
          talking with me about any of that or just want to grab a coffee,
          please reach out to me. I would love to get to know you 😁
          <br />
          <br />
        </p>
        <div className="flex flex-wrap md:flex-row flex-col items-center justify-center">
          <AboutCard
            title="UCLA"
            img_url="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bff6c158206223.59f32a9f1f5f8.gif"
            text="I'm currently a Senior at UCLA studying Cognitive Science and Computer Science."
          />
          <AboutCard
            title="Campus Events Commission"
            img_url="https://freight.cargo.site/w/1280/q/94/i/d349db6dff66ea182901c273f9e181af19631b14a749b45cf484aced9ef9b924/UB9.gif"
            text="I currently work at CEC helping to throw big campus events like BruinBash and more!"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutInformation;
