import React from "react";
import Link from "next/link";

const TimelineContent = ({ affiliation }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-3 group">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
          {affiliation.date}
        </time>
        <div className="text-md font-bold text-slate-900">
          {affiliation.title}
        </div>
      </div>
      <div className="text-slate-500 text-sm">{affiliation.desc}</div>
      {affiliation.link && (
        <Link href={affiliation.link}>
          <button className="my-2 py-1 px-2 text-xs bg-gray-700 rounded-md hover:bg-gray-500 duration-300 transition">
            Learn More
          </button>
        </Link>
      )}
    </div>
  );
};

export default TimelineContent;
