import React from "react";

import ArchiveCategory from "./ArchiveCategory";

import { archiveItems } from "../../data/archiveData";

const ArchiveLinks = [
  { label: "लेखक का घर", href: "/archive/authors-home" },
  { label: "लेखक की यादें", href: "/archive/authors-memories" },
  { label: "अतीत", href: "/archive/past" },
  { label: "संग्रहालयों की स्मृतियाँ", href: "/archive/museum-memories" },
];

const Past = () => {
  return (
    <ArchiveCategory
      title="अतीत"
      description="बीते समय, इतिहास और साहित्य से जुड़े महत्वपूर्ण प्रसंगों का दस्तावेज।"
      category="past"
      items={archiveItems}
      links={ArchiveLinks}
    />
  );
};

export default Past;