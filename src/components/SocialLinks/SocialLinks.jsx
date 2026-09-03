import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Facebook,
  Instagram,
  Telegram,
  WhatsApp,
  YouTube,
  EmailRounded,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

const socialPlatforms = [
  {
    name: "Facebook",
    icon: <Facebook />,
  },
  {
    name: "Instagram",
    icon: <Instagram />,
  },
  {
    name: "X",
    icon: <XIcon />,
  },
  {
    name: "YouTube",
    icon: <YouTube />,
  },
  {
    name: "Telegram",
    icon: <Telegram />,
  },
  {
    name: "WhatsApp",
    icon: <WhatsApp />,
  },
  {
    name: "Email",
    icon: <EmailRounded />,
  },
];

const SocialLinks = () => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#FFF8ED",
        border: "1px solid rgba(59,6,10,0.09)",
      }}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "0.95rem",
          fontWeight: 800,
          mb: 1.5,
        }}
      >
        सोशल मीडिया
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {socialPlatforms.map((platform) => (
          <Box
            key={platform.name}
            title={platform.name}
            sx={{
              width: 36,
              height: 36,
              display: "grid",
              placeItems: "center",
              borderRadius: 2,
              color: "primary.main",
              backgroundColor: "rgba(234,166,77,0.13)",
              border: "1px solid rgba(234,166,77,0.2)",
              cursor: "pointer",
              transition: "all 0.2s ease",

              "&:hover": {
                color: "#fff",
                backgroundColor: "primary.main",
                transform: "translateY(-2px)",
              },

              "& svg": {
                fontSize: 18,
              },
            }}
          >
            {platform.icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SocialLinks;
