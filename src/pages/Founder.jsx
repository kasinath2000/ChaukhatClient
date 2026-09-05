import React from "react";

import FamilyLayout from "../components/Layout/FamilyLayout";
import {ProfileGrid} from "../components/UI/ProfileGrid/index";

import { founders } from "../data/chaukhatFamilyMembers";

const Founder = () => {
  return (
    <FamilyLayout
      title="संस्थापक"
      description="चौखट की स्थापना और उसकी वैचारिक यात्रा से जुड़े संस्थापकों का परिचय।"
      active="founder"
    >
      <ProfileGrid members={founders} />
    </FamilyLayout>
  );
};

export default Founder;