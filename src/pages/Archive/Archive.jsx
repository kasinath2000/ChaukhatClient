import React from "react";

import ArchiveCategory from "./ArchiveCategory";

import { archiveItems } from "../../data/archiveData";

const ArchiveLinks = [
  {
    label: "लेखक का घर",
    href: "/archive/authors-home",
  },
  {
    label: "लेखक की यादें",
    href: "/archive/authors-memories",
  },
  {
    label: "अतीत",
    href: "/archive/past",
  },
  {
    label: "संग्रहालयों की स्मृतियाँ",
    href: "/archive/museum-memories",
  },
];

const Archive = () => {
  return (
    <ArchiveCategory
      title="अभिलेखागार"
      description="साहित्य, इतिहास और संस्कृति से जुड़ी स्मृतियों एवं महत्वपूर्ण सामग्री का विशेष संग्रह।"
      category="authors-home"
      items={archiveItems}
      links={ArchiveLinks}
    />
  );
};

export default Archive;