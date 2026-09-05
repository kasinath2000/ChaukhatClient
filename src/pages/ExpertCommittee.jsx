import React from "react";

import FamilyLayout from "../components/Layout/FamilyLayout";
import {ProfileGrid} from "../components/UI/ProfileGrid/index";

import { expertCommittee } from "../data/chaukhatFamilyMembers";

const ExpertCommittee = () => {
  return (
    <FamilyLayout
      title="विशेषज्ञ समिति"
      description="विभिन्न साहित्यिक, सांस्कृतिक और रचनात्मक क्षेत्रों के विशेषज्ञों का सहयोग।"
      active="expert-committee"
    >
      <ProfileGrid members={expertCommittee} />
    </FamilyLayout>
  );
};

export default ExpertCommittee;