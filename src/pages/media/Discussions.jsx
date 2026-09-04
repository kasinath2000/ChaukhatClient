import React from "react";
import MediaCategory from "./MediaCategory";
import { mediaItems } from "../../data/mediaData";

const Discussions = () => {
  return (
    <MediaCategory
      title="चर्चा-परिचर्चा"
      description="समकालीन साहित्य, समाज और संस्कृति से जुड़े विषयों पर विचार-विमर्श।"
      category="discussions"
      items={mediaItems}
    />
  );
};

export default Discussions;