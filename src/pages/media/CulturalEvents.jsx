import React from "react";
import MediaCategory from "./MediaCategory";
import { mediaItems } from "../../data/mediaData";

const CulturalEvents = () => {
  return (
    <MediaCategory
      title="सांस्कृतिक कार्यक्रम"
      description="साहित्य, कला और संस्कृति से जुड़े विशेष कार्यक्रमों की झलक।"
      category="cultural-events"
      items={mediaItems}
    />
  );
};

export default CulturalEvents;