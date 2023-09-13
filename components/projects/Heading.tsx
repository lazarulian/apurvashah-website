import React from "react";

type HeadingProps = {
  tag: string;
  description: string;
};

function Heading({ tag, description }: HeadingProps) {
  return (
    <div className="py-12 sm:py-15 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
        {tag} Projects
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl max-w-2xl m-auto">
        {description}
      </p>
    </div>
  );
}

export default Heading;
