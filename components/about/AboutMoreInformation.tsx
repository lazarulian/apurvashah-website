import React from "react";
import Map from "../art/Map";
import Disclosure from "../global/Disclosure";
import AffiliationTimeline from "../art/timeline/AffiliationTimeline";

const AboutMoreInformation = () => {
  return (
    <div className="m-4 mx-auto md:w-2/3">
      <div className="text-left text-xl flex flex-col space-y-2">
        {/* Travel Goals */}
        <Disclosure title="Travel Goals 🛩️">
          <ul className="text-base px-4">
            Most recently, I had the time of my life in the Dominican Republic
            🇩🇴 Hopefully this summer, I hit Greece 🇬🇷, Czechia 🇨🇿, Türkiye 🇹🇷,
            and Hungary 🇭🇺.
          </ul>
          <Map />
        </Disclosure>
        {/* Book Recommendations */}
        <Disclosure title="Book Recommendations 📚">
          <p className="text-base px-4">
            In college, I took the time to get back into reading after a long
            dry spell and I really started to enjoy it. Here are some of my
            favorite reads of all time!
            <ul className="list-disc pl-9 pt-2 pb-2">
              <li>When Breath Becomes Air 🧘</li>
              <li>Circe 🏺</li>
              <li>Between the World and Me 🌍</li>
              <li>The Hitchhiker's Guide to the Galaxy 🚀</li>
            </ul>
            If you are looking for more recommendations, check out the{" "}
            <a
              href="https://blog.apurvashah.org/tags/reading"
              className="text-blue-400 hover:text-blue-100 duration-300"
            >
              reading
            </a>{" "}
            section of my blog!
          </p>
        </Disclosure>
        {/* Affiliations (Present-Past)*/}
        <Disclosure title="Affiliations 👔">
          <AffiliationTimeline />
        </Disclosure>
      </div>
    </div>
  );
};

export default AboutMoreInformation;
