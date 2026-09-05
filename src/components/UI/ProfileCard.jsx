import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const ProfileCard = ({
  name,
  position,
  title,
  desc,
  location,
  email,
  phone,
  image,
  imageAlt,
  children,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        background: "linear-gradient(145deg, #FFFDF8 0%, #FFF8ED 100%)",
        border: "1px solid rgba(59, 6, 10, 0.10)",
        transition: "all 0.3s ease",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 4,
          background: "linear-gradient(90deg, #3B060A, #EAA64D, #3B060A)",
        },

        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "rgba(234, 166, 77, 0.65)",
          boxShadow: "0 18px 40px rgba(59, 6, 10, 0.10)",
        },

        ...sx,
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 250, md: 280 },
          overflow: "hidden",
          backgroundColor: "#F6EBD9",
        }}
      >
        {image && (
          <Box
            component="img"
            src={image}
            alt={imageAlt || name || "Profile"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s ease",

              ".MuiBox-root:hover &": {
                transform: "scale(1.04)",
              },
            }}
          />
        )}

        {/* Image overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 45%, rgba(59,6,10,0.72) 100%)",
          }}
        />

        {/* Position badge */}
        {(position || title) && (
          <Box
            sx={{
              position: "absolute",
              left: 18,
              bottom: 16,
              px: 1.5,
              py: 0.65,
              borderRadius: 10,
              backgroundColor: "rgba(234,166,77,0.95)",
              color: "primary.main",
              fontSize: "0.78rem",
              fontWeight: 800,
              backdropFilter: "blur(8px)",
            }}
          >
            {position || title}
          </Box>
        )}
      </Box>

      {/* Content */}
      <Box sx={{ p: { xs: 2.2, md: 2.7 } }}>
        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            fontWeight: 800,
            fontSize: "1.15rem",
            mb: 0.8,
          }}
        >
          {name}
        </Typography>

        {title && position && (
          <Typography
            sx={{
              color: "secondary.dark",
              fontWeight: 700,
              fontSize: "0.9rem",
              lineHeight: 1.6,
              mb: 1.2,
            }}
          >
            {title}
          </Typography>
        )}

        {desc && (
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            {desc}
          </Typography>
        )}

        {(location || email || phone) && (
          <>
            <Divider sx={{ mb: 1.5 }} />

            <Stack spacing={0.9}>
              {location && (
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <LocationOnRoundedIcon
                    sx={{
                      fontSize: 18,
                      color: "secondary.dark",
                      mt: 0.2,
                    }}
                  />

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {location}
                  </Typography>
                </Stack>
              )}

              {email && (
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <EmailRoundedIcon
                    sx={{
                      fontSize: 18,
                      color: "secondary.dark",
                      mt: 0.2,
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      wordBreak: "break-word",
                    }}
                  >
                    {email}
                  </Typography>
                </Stack>
              )}

              {phone && (
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneRoundedIcon
                    sx={{
                      fontSize: 18,
                      color: "secondary.dark",
                    }}
                  />

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {phone}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </>
        )}

        {children}
      </Box>
    </Box>
  );
};

export default ProfileCard;
