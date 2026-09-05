import React from "react";

import ArchiveCategory from "./ArchiveCategory";

import { archiveItems } from "../../data/archiveData";

const ArchiveLinks = [
  { label: "लेखक का घर", href: "/archive/authors-home" },
  { label: "लेखक की यादें", href: "/archive/authors-memories" },
  { label: "अतीत", href: "/archive/past" },
  { label: "संग्रहालयों की स्मृतियाँ", href: "/archive/museum-memories" },
];

const AuthorsHome = () => {
  return (
    <ArchiveCategory
      title="लेखक का घर"
      description="साहित्यकारों के जीवन, उनके घर और उनसे जुड़ी स्मृतियों की विशेष प्रस्तुति।"
      category="authors-home"
      items={archiveItems}
      links={ArchiveLinks}
    />
  );
};

export default AuthorsHome;