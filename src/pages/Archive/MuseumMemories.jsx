import React from "react";

import ArchiveCategory from "./ArchiveCategory";

import { archiveItems } from "../../data/archiveData";

const ArchiveLinks = [
  { label: "लेखक का घर", href: "/archive/authors-home" },
  { label: "लेखक की यादें", href: "/archive/authors-memories" },
  { label: "अतीत", href: "/archive/past" },
  { label: "संग्रहालयों की स्मृतियाँ", href: "/archive/museum-memories" },
];

const MuseumMemories = () => {
  return (
    <ArchiveCategory
      title="संग्रहालयों की स्मृतियाँ"
      description="संग्रहालयों में सुरक्षित इतिहास, कला और संस्कृति की अनमोल धरोहर।"
      category="museum-memories"
      items={archiveItems}
      links={ArchiveLinks}
    />
  );
};

export default MuseumMemories;