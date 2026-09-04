import React from "react";
import MediaCategory from "./MediaCategory";
import { mediaItems } from "../../data/mediaData";

const Workshop = () => {
  return (
    <MediaCategory
      title="कार्यशाला"
      description="लेखन, साहित्य और रचनात्मक अभिव्यक्ति से जुड़ी कार्यशालाएं।"
      category="workshop"
      items={mediaItems}
    />
  );
};

export default Workshop;