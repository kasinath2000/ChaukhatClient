import React from "react";

import FamilyLayout from "../components/Layout/FamilyLayout";
import {ProfileGrid} from "../components/UI/ProfileGrid/index";

import { technicalTeam } from "../data/chaukhatFamilyMembers";

const TechnicalTeam = () => {
  return (
    <FamilyLayout
      title="तकनीकी टीम"
      description="चौखट के डिजिटल प्लेटफॉर्म, वेबसाइट और तकनीकी संचालन से जुड़े सदस्यों का परिचय।"
      active="technical-team"
    >
      <ProfileGrid members={technicalTeam} />
    </FamilyLayout>
  );
};

export default TechnicalTeam;