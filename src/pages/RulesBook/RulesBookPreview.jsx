import React from "react";

import { useSearchParams } from "react-router-dom";

import DocumentPreview from "./DocumentPreview";

const RulesBookPreview = () => {
  const [searchParams] = useSearchParams();

  const fileUrl = searchParams.get("file");
  const title = searchParams.get("title") || "Document Preview";
  const type = searchParams.get("type") || "pdf";

  return (
    <DocumentPreview
      title={title}
      fileUrl={fileUrl}
      fileType={type}
      backUrl="/rulesbook/membership"
    />
  );
};

export default RulesBookPreview;
