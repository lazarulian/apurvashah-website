import React from "react";
import AboutCard from "./AboutCard";

function AboutInformation() {
  return (
    <div className="mx-auto md:w-2/3">
      <div className="text-left">
        <p className="">
          Hi everyone, I'm Apurva. I'm currently living in San Francisco, CA. In
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
            title="Tanium"
            img_url="https://www.tanium.com/wp-content/uploads/Thumbnail_Logo_Primary-Red.png"
            text="I'm currently a Software Engineer at Tanium working to manage endpoints near you."
          />
          <AboutCard
            title="San Francisco"
            img_url="https://www.parksconservancy.org/sites/default/files/styles/hero/public/hero/A_FOFU_150104_RCW_1-TU-3_Hero.jpg?itok=fqz6ZKm5&timestamp=1721753844"
            text="I currently volunteer at Glide Memorial on Sundays & am trying to document all of the parks in this wonderful city."
          />
        </div>
      </div>
    </div>
  );
}

export default AboutInformation;
