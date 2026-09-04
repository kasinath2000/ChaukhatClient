import React from "react";
import MediaCategory from "./MediaCategory";
import { mediaItems } from "../../data/mediaData";

const Interview = () => {
  return (
    <MediaCategory
      title="साक्षात्कार"
      description="साहित्यकारों, कलाकारों और विभिन्न क्षेत्रों से जुड़े व्यक्तित्वों के साथ विशेष संवाद।"
      category="interview"
      items={mediaItems}
    />
  );
};

export default Interview;