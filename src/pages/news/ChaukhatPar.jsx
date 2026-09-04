import React from "react";

import NewsCategory from "./NewsCategory";


import { newsItems } from "../../data/newsData";

const ChaukhatPar = () => {
  return (
    <NewsCategory
      title="चौखट पर"
      description="समाज, संस्कृति और समकालीन घटनाओं से जुड़ी महत्वपूर्ण खबरें और विशेष प्रस्तुतियां।"
      category="chaukhat-par"
      items={newsItems}
    />
  );
};

export default ChaukhatPar;
