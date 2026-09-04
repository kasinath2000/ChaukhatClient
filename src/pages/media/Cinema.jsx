import React from "react";
import MediaCategory from "./MediaCategory";
import { mediaItems } from "../../data/mediaData";

const Cinema = () => {
  return (
    <MediaCategory
      title="सिनेमा"
      description="सिनेमा, साहित्य और समाज से जुड़े विषयों पर विशेष सामग्री।"
      category="cinema"
      items={mediaItems}
    />
  );
};

export default Cinema;