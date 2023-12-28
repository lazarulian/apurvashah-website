import React from "react";
import Affiliations from "@/data/content/affiliationTimeline";
import TimelineContent from "./TimelineContent";

const AffiliationTimeline = () => {
  return (
    <div>
      <div className="-my-6">
        {Affiliations.slice(0)
          .reverse()
          .map((item) => {
            return <TimelineContent key={item.id} affiliation={item} />;
          })}
      </div>
    </div>
  );
};

export default AffiliationTimeline;
