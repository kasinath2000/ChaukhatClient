import React from "react";
import { Box, Typography } from "@mui/material";
import { GroupsRounded } from "@mui/icons-material";

const LeftEditorsSection = ({ editors = [] }) => {
  return (
    <Box>
      <SectionHeader title="संपादकीय परिवार" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {editors.map((editor) => (
          <Box
            key={editor.id}
            sx={{
              overflow: "hidden",
              borderRadius: 3,
              backgroundColor: "#FFF8ED",
              border: "1px solid rgba(59,6,10,0.09)",
              transition: "all 0.25s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "rgba(234,166,77,0.55)",
                boxShadow: "0 12px 30px rgba(59,6,10,0.08)",
              },
            }}
          >
            <Box
              sx={{
                height: 225,
                backgroundColor: "#F3E8D5",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={editor.image}
                alt={editor.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box sx={{ p: 2 }}>
              <Typography
                sx={{
                  color: "secondary.dark",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                {editor.role}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color: "primary.main",
                  fontSize: "1rem",
                  fontWeight: 800,
                }}
              >
                {editor.name}
              </Typography>

              <Typography
                sx={{
                  mt: 0.8,
                  color: "text.secondary",
                  fontSize: "0.74rem",
                  lineHeight: 1.6,
                }}
              >
                साहित्य, समाज और संस्कृति के प्रति समर्पित रचनात्मक व्यक्तित्व।
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 1.5,
      }}
    >
      <Box
        sx={{
          width: 34,
          height: 34,
          display: "grid",
          placeItems: "center",
          borderRadius: 1.5,
          color: "primary.main",
          backgroundColor: "rgba(234,166,77,0.15)",
        }}
      >
        <GroupsRounded sx={{ fontSize: 19 }} />
      </Box>

      <Typography
        sx={{
          color: "primary.main",
          fontSize: "0.95rem",
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default LeftEditorsSection;
