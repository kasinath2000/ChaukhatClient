import React from "react";

import ArchiveCategory from "./ArchiveCategory";

import { archiveItems } from "../../data/archiveData";

const ArchiveLinks = [
  { label: "लेखक का घर", href: "/archive/authors-home" },
  { label: "लेखक की यादें", href: "/archive/authors-memories" },
  { label: "अतीत", href: "/archive/past" },
  { label: "संग्रहालयों की स्मृतियाँ", href: "/archive/museum-memories" },
];

const AuthorsMemories = () => {
  return (
    <ArchiveCategory
      title="लेखक की यादें"
      description="साहित्यकारों की अनमोल यादों, संस्मरणों और आत्मीय अनुभवों का संग्रह।"
      category="authors-memories"
      items={archiveItems}
      links={ArchiveLinks}
    />
  );
};

export default AuthorsMemories;