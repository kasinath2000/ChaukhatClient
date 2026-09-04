import React from "react";
import MediaCategory from "./MediaCategory";
import { mediaItems } from "../../data/mediaData";

const ArtCorner = () => {
  return (
    <MediaCategory
      title="कला कलश"
      description="भारतीय कला, कलाकारों और रचनात्मक अभिव्यक्तियों की विशेष प्रस्तुति।"
      category="art-corner"
      items={mediaItems}
    />
  );
};

export default ArtCorner;
