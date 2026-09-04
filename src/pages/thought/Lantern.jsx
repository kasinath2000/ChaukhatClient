import React from "react";

import ThoughtCategory from "./ThoughtCategory";

import { thoughtItems } from "../../data/thoughtData";

const Lantern = () => {
  return (
    <ThoughtCategory
      title="लालटेन"
      description="जीवन, साहित्य और समाज के विभिन्न पहलुओं को रोशन करते विचार।"
      category="lantern"
      items={thoughtItems}
    />
  );
};

export default Lantern;