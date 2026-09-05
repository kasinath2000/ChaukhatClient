import React from "react";

import { Box, Typography } from "@mui/material";

import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

import { Link } from "react-router-dom";

import { AppChip } from "../common/index";

import chaukhatFamilyLinks from "../../data/chaukhatFamilyData";

const ChaukhatFamily = () => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#FFF8ED",
        border: "1px solid rgba(59, 6, 10, 0.10)",
        boxShadow: "0 4px 18px rgba(59, 6, 10, 0.04)",
      }}
    >
      {/* Header */}
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
            flexShrink: 0,
            display: "grid",
            placeItems: "center",
            borderRadius: 2,
            backgroundColor: "secondary.main",
            color: "primary.main",
          }}
        >
          <GroupsRoundedIcon fontSize="small" />
        </Box>

        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 800,
            fontSize: "1rem",
          }}
        >
          चौखट परिवार
        </Typography>
      </Box>

      {/* Family Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.7,
        }}
      >
        {chaukhatFamilyLinks.map((item) => (
          <AppChip
            key={item.value}
            label={item.label}
            clickable
            component={Link}
            to={item.href}
            size="small"
            sx={{
              width: "100%",
              justifyContent: "flex-start",
              height: 34,

              "& .MuiChip-label": {
                width: "100%",
                px: 1.2,
                textAlign: "left",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ChaukhatFamily;