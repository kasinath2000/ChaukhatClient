import React from "react";
import { Box, Divider } from "@mui/material";

import ProfileCard from "../ProfileCard";

const ProfileGrid = ({ members = [] }) => {
  return (
    <>
      <Divider sx={{ mb: 3 }} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: 3,
        }}
      >
        {members.map((member) => (
          <ProfileCard
            key={member.id}
            {...member}
          />
        ))}
      </Box>
    </>
  );
};

export default ProfileGrid;