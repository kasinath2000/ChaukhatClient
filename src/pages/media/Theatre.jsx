import React from "react";
import MediaCategory from "./MediaCategory";
import { mediaItems } from "../../data/mediaData";

const Theatre = () => {
  return (
    <MediaCategory
      title="रंगमंच"
      description="रंगमंच, नाट्य प्रस्तुतियों और अभिनय से जुड़ी विशेष सामग्री।"
      category="theatre"
      items={mediaItems}
    />
  );
};

export default Theatre;