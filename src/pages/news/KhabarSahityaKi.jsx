import React from "react";

import NewsCategory from "./NewsCategory";

import { newsItems } from "../../data/newsData";

const KhabarSahityaKi = () => {
  return (
    <NewsCategory
      title="खबर साहित्य की"
      description="साहित्य जगत, साहित्यकारों, पुस्तकों और साहित्यिक गतिविधियों से जुड़ी विशेष खबरें।"
      category="khabar-sahitya-ki"
      items={newsItems}
    />
  );
};

export default KhabarSahityaKi;
