import React from "react";

import FamilyLayout from "../components/Layout/FamilyLayout";
import {ProfileGrid} from "../components/UI/ProfileGrid/index";

import { editorialBoard } from "../data/chaukhatFamilyMembers";

const EditorialBoard = () => {
  return (
    <FamilyLayout
      title="संपादक मण्डल"
      description="चौखट की संपादकीय योजना, सामग्री चयन और प्रकाशन प्रक्रिया से जुड़े सदस्यों का परिचय।"
      active="editorial-board"
    >
      <ProfileGrid members={editorialBoard} />
    </FamilyLayout>
  );
};

export default EditorialBoard;