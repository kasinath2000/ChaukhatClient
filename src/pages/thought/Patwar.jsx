
import React from "react";

import ThoughtCategory from "./ThoughtCategory";

import { thoughtItems } from "../../data/thoughtData";

const Patwar = () => {
  return (
    <ThoughtCategory
      title="पतवार"
      description="समकालीन जीवन, समाज और साहित्य से जुड़े विचारों की विशेष प्रस्तुति।"
      category="patwar"
      items={thoughtItems}
    />
  );
};

export default Patwar;
