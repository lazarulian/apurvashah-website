import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Graduating from UCLA",
          "Software Engineering",
          "Racing at Duffl",
          "Photography and Videography",
          "Caseworking for Mobile Clinic",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
