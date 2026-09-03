import React from "react";
import { Box, Typography } from "@mui/material";

const ImageCard = ({ src, alt, title, width = 170, height = 245, onClick }) => {
  return (
    <Box
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(event) => {
        if (onClick && (event.key === "Enter" || event.key === " ")) {
          onClick();
        }
      }}
      sx={{
        width,
        flex: "0 0 auto",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.3s ease",

        "&:hover": {
          transform: onClick ? "translateY(-6px)" : "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width,
          height,
          p: 0.6,
          borderRadius: 2.5,
          backgroundColor: "#FFF8ED",
          border: "1px solid",
          borderColor: "rgba(59, 6, 10, 0.12)",
          boxShadow: "0 5px 18px rgba(59, 6, 10, 0.08)",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={src}
          alt={alt || title || "Patrika"}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/default-placeholder.png";
          }}
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      </Box>

      {title && (
        <Typography
          sx={{
            mt: 1,
            px: 0.5,
            color: "primary.main",
            fontSize: "0.82rem",
            fontWeight: 700,
            lineHeight: 1.4,
            textAlign: "center",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>
      )}
    </Box>
  );
};

export default ImageCard;
