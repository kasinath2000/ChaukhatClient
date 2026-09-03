import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { EmailRounded, PhoneRounded } from "@mui/icons-material";

const InfoCard = ({ image, alt, name, role, address, email, phone }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 300,
        mx: "auto",
        overflow: "hidden",
        borderRadius: 3,
        backgroundColor: "#FFF8ED",
        border: "1px solid",
        borderColor: "rgba(59, 6, 10, 0.10)",
        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(234, 166, 77, 0.65)",
          boxShadow: "0 12px 30px rgba(59, 6, 10, 0.10)",
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          backgroundColor: "#F3E8D5",
        }}
      >
        <Box
          component="img"
          src={image || "/default-placeholder.png"}
          alt={alt || `${name} photo`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/default-placeholder.png";
          }}
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            opacity: imageLoaded ? 1 : 0.65,
            transition: "transform 0.5s ease, opacity 0.3s ease",

            ".MuiBox-root:hover &": {
              transform: "scale(1.04)",
            },
          }}
        />

        {/* Brand accent */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "55%",
            height: 4,
            backgroundColor: "secondary.main",
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "primary.main",
            lineHeight: 1.4,
          }}
        >
          {name}
        </Typography>

        {role && (
          <Typography
            sx={{
              mt: 0.5,
              fontSize: "0.85rem",
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            {role}
          </Typography>
        )}

        {address && (
          <Typography
            sx={{
              mt: 1.2,
              fontSize: "0.82rem",
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            {address}
          </Typography>
        )}

        {(email || phone) && (
          <Box
            sx={{
              mt: 1.5,
              pt: 1.5,
              borderTop: "1px solid",
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              gap: 0.8,
            }}
          >
            {email && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  minWidth: 0,
                }}
              >
                <EmailRounded
                  sx={{
                    fontSize: 17,
                    color: "secondary.dark",
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: "text.secondary",
                    overflowWrap: "anywhere",
                  }}
                >
                  {email}
                </Typography>
              </Box>
            )}

            {phone && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <PhoneRounded
                  sx={{
                    fontSize: 17,
                    color: "secondary.dark",
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: "text.secondary",
                  }}
                >
                  {phone}
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default InfoCard;
