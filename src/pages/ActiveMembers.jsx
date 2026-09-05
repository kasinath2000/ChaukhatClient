import React from "react";

import FamilyLayout from "../components/Layout/FamilyLayout";
import {ProfileGrid} from "../components/UI/ProfileGrid/index";

import { activeMembers } from "../data/chaukhatFamilyMembers";

const ActiveMembers = () => {
  return (
    <FamilyLayout
      title="सक्रिय सहयोगी सदस्य"
      description="चौखट की विभिन्न साहित्यिक, सांस्कृतिक और डिजिटल गतिविधियों में सक्रिय सहयोग देने वाले सदस्यों का परिचय।"
      active="active-members"
    >
      <ProfileGrid members={activeMembers} />
    </FamilyLayout>
  );
};

export default ActiveMembers;