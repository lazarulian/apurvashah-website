import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading() {
  return (
    <div
      className={"pb-5 pt-20 w-full text-center relative"}
    >
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto relative">
          About
          <img
            className="sqD w-10 -top-8 -right-8 absolute"
            src="/static/doodles/hero/code.svg"
          />
        </h1>
    </div>
  );
}

export default Heading;
