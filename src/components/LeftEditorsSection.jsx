import React from "react";
import { Box, Typography } from "@mui/material";

import InfoCard from "./UI/InfoCard";
import SkeletonLoader from "./common/SkeletonLoader";

const LeftEditorsSection = ({ editors = [] }) => {
  const visibleEditors = editors.filter(
    (editor) => editor.type === "chief" || editor.type === "editor",
  );

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: 2, md: 2.5 },
        borderRadius: 3,
        backgroundColor: "#FFF8ED",
        border: "1px solid",
        borderColor: "rgba(59, 6, 10, 0.10)",
      }}
    >
      <Typography
        sx={{
          mb: 2,
          fontSize: { xs: "1.05rem", md: "1.15rem" },
          fontWeight: 700,
          color: "primary.main",
        }}
      >
        चौखट संपादकीय परिवार
      </Typography>

      <Box
        sx={{
          width: 42,
          height: 3,
          mb: 3,
          borderRadius: 5,
          backgroundColor: "secondary.main",
        }}
      />

      {visibleEditors.length === 0 ? (
        <SkeletonLoader type="card" count={2} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {visibleEditors.map((editor) => (
            <Box key={editor._id}>
              <Typography
                sx={{
                  mb: 1.2,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "secondary.dark",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {editor.type === "chief" ? "प्रधान संपादक" : "संपादक"}
              </Typography>

              <InfoCard
                image={editor.image}
                alt={editor.name}
                name={editor.name}
                role={editor.role}
                address={editor.address}
                email={editor.email}
                phone={editor.phone}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default LeftEditorsSection;
