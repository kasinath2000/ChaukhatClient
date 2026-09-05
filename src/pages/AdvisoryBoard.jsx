import React from "react";

import FamilyLayout from "../components/Layout/FamilyLayout";
import {ProfileGrid} from "../components/UI/ProfileGrid/index";

import { advisoryBoard } from "../data/chaukhatFamilyMembers";

const AdvisoryBoard = () => {
  return (
    <FamilyLayout
      title="परामर्श मंडल"
      description="चौखट की वैचारिक दिशा, साहित्यिक दृष्टि और रचनात्मक गतिविधियों में परामर्श देने वाले सदस्यों का परिचय।"
      active="advisory-board"
    >
      <ProfileGrid members={advisoryBoard} />
    </FamilyLayout>
  );
};

export default AdvisoryBoard;