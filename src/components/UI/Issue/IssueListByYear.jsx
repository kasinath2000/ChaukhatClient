import React from "react";

import { Box, Typography } from "@mui/material";

import IssueItem from "./IssueItem";

const IssueListByYear = ({ year, issues = [] }) => {
  return (
    <Box>
      {/* ================= YEAR HEADING ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          mb: 2.5,
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 28,
            borderRadius: 10,
            backgroundColor: "secondary.main",
          }}
        />

        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            fontWeight: 800,
            fontSize: {
              xs: "1.35rem",
              md: "1.6rem",
            },
          }}
        >
          {year} के अंक
        </Typography>
      </Box>

      {/* ================= DECORATIVE LINE ================= */}
      <Box
        sx={{
          width: 110,
          height: 3,
          borderRadius: 10,
          backgroundColor: "secondary.main",
          mb: 3,
        }}
      />

      {/* ================= ISSUES ================= */}
      {issues.length > 0 ? (
        <Box
          sx={{
            display: "grid",

            // Mobile: 1 card
            gridTemplateColumns: "1fr",

            // Tablet/Desktop: exactly 2 cards
            "@media (min-width: 600px)": {
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            },

            gap: {
              xs: 2,
              md: 2.5,
            },

            alignItems: "stretch",
          }}
        >
          {issues.map((issue, index) => (
            <Box
              key={issue.id || issue._id || index}
              sx={{
                minWidth: 0,
                display: "flex",
              }}
            >
              <IssueItem
                title={issue.title}
                pdfUrl={issue.pdfUrl}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            py: 5,
            px: 2,
            textAlign: "center",
            border: "1px dashed",
            borderColor: "divider",
            borderRadius: 3,
            backgroundColor: "background.default",
          }}
        >
          <Typography
            color="text.secondary"
            sx={{
              fontWeight: 500,
            }}
          >
            इस वर्ष का कोई अंक उपलब्ध नहीं है।
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default IssueListByYear;