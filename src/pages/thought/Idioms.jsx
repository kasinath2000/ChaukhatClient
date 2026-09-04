import React from "react";

import ThoughtCategory from "./ThoughtCategory";

import { thoughtItems } from "../../data/thoughtData";

const Idioms = () => {
  return (
    <ThoughtCategory
      title="मुहावरे और लोकोक्तियाँ"
      description="हिंदी भाषा की समृद्ध परंपरा से जुड़े मुहावरों और लोकोक्तियों का अर्थ, संदर्भ और परिचय।"
      category="idioms"
      items={thoughtItems}
    />
  );
};

export default Idioms;