import React from "react";

import FamilyLayout from "../components/Layout/FamilyLayout";
import {ProfileGrid} from "../components/UI/ProfileGrid/index";

import { patrons } from "../data/chaukhatFamilyMembers";

const Patron = () => {
  return (
    <FamilyLayout
      title="संरक्षक"
      description="चौखट की साहित्यिक एवं सांस्कृतिक यात्रा में मार्गदर्शन और सहयोग देने वाले संरक्षकों का परिचय।"
      active="patron"
    >
      <ProfileGrid members={patrons} />
    </FamilyLayout>
  );
};

export default Patron;