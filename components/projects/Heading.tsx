import React from "react";

type HeadingProps = {
  tag?: string;
  altTag?: string;
  description?: string;
};

function Heading({ altTag, tag, description }: HeadingProps) {
  return (
    <div className="py-12 sm:py-15 w-full text-center relative">
      {!tag ? (
        <>
          <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
            {altTag} Projects
          </h1>
          <p className="text-fun-gray text-xl sm:text-2xl max-w-2xl m-auto">
            {description}
          </p>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Projects built with <b>{tag}</b>
          <img
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src="/static/doodles/hero/code.svg"
            />
        </h1>
      )}
    </div>
  );
}

export default Heading;
