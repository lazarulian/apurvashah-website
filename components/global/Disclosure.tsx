import React from "react";

const Disclosure = ({ title, children }) => {
  return (
    <div>
      <details className="p-4 rounded-xl shadow-md group mx-auto  max-h-[56px] open:!max-h-[3000px] transition-[max-height] duration-500 overflow-hidden bg-fun-pink-dark">
        <summary className="outline-none cursor-pointer focus:bold focus:text-blue-200 font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center ">
          {title}
        </summary>
        <hr className="my-2 scale-x-150 pb-4" />
        <div className="text-sm -m-4 -mt-2 p-4">{children}</div>
      </details>
    </div>
  );
};

export default Disclosure;
