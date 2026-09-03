import React from "react";
import { Box, Skeleton } from "@mui/material";

const SkeletonLoader = ({
  type = "text",
  count = 1,
  width = "100%",
  height,
  variant = "rectangular",
  animation = "wave",
  spacing = 1.5,
  sx = {},
}) => {
  const renderSkeleton = (_, index) => {
    switch (type) {
      // Simple text
      case "text":
        return (
          <Skeleton
            key={index}
            variant="text"
            animation={animation}
            width={width}
            height={height || 24}
            sx={{
              ...sx,
            }}
          />
        );

      // Multiple text lines
      case "paragraph":
        return (
          <Box key={index} sx={{ width }}>
            <Skeleton
              variant="text"
              animation={animation}
              width="100%"
              height={22}
            />
            <Skeleton
              variant="text"
              animation={animation}
              width="92%"
              height={22}
            />
            <Skeleton
              variant="text"
              animation={animation}
              width="68%"
              height={22}
            />
          </Box>
        );

      // Image / avatar
      case "image":
        return (
          <Skeleton
            key={index}
            variant={variant === "circular" ? "circular" : "rectangular"}
            animation={animation}
            width={width}
            height={height || 220}
            sx={{
              borderRadius: variant === "circular" ? "50%" : 2,
              ...sx,
            }}
          />
        );

      // Avatar
      case "avatar":
        return (
          <Skeleton
            key={index}
            variant="circular"
            animation={animation}
            width={width || 56}
            height={height || width || 56}
            sx={sx}
          />
        );

      // Generic card
      case "card":
        return (
          <Box
            key={index}
            sx={{
              width,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "rgba(59, 6, 10, 0.08)",
              backgroundColor: "#FFF8ED",
              overflow: "hidden",
              ...sx,
            }}
          >
            <Skeleton
              variant="rectangular"
              animation={animation}
              width="100%"
              height={height || 220}
            />

            <Box sx={{ p: 2 }}>
              <Skeleton
                variant="text"
                animation={animation}
                width="75%"
                height={28}
              />

              <Skeleton
                variant="text"
                animation={animation}
                width="95%"
                height={20}
              />

              <Skeleton
                variant="text"
                animation={animation}
                width="60%"
                height={20}
              />
            </Box>
          </Box>
        );

      // Profile card
      case "profile":
        return (
          <Box
            key={index}
            sx={{
              width,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "rgba(59, 6, 10, 0.08)",
              backgroundColor: "#FFF8ED",
              overflow: "hidden",
              ...sx,
            }}
          >
            <Skeleton
              variant="rectangular"
              animation={animation}
              width="100%"
              height={height || 260}
            />

            <Box sx={{ p: 2 }}>
              <Skeleton
                variant="text"
                animation={animation}
                width="70%"
                height={28}
              />

              <Skeleton
                variant="text"
                animation={animation}
                width="50%"
                height={20}
              />

              <Skeleton
                variant="text"
                animation={animation}
                width="90%"
                height={20}
              />

              <Skeleton
                variant="text"
                animation={animation}
                width="80%"
                height={20}
              />
            </Box>
          </Box>
        );

      // Magazine / Patrika cover
      case "cover":
        return (
          <Box
            key={index}
            sx={{
              width: width || 170,
              flexShrink: 0,
              ...sx,
            }}
          >
            <Skeleton
              variant="rectangular"
              animation={animation}
              width="100%"
              height={height || 245}
              sx={{
                borderRadius: 2.5,
              }}
            />

            <Skeleton
              variant="text"
              animation={animation}
              width="85%"
              height={24}
              sx={{
                mx: "auto",
                mt: 1,
              }}
            />
          </Box>
        );

      // Hero slider
      case "hero":
        return (
          <Skeleton
            key={index}
            variant="rectangular"
            animation={animation}
            width={width}
            height={height || { xs: 220, sm: 300, md: 400 }}
            sx={{
              borderRadius: 3,
              ...sx,
            }}
          />
        );

      // List item
      case "list":
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              width,
              ...sx,
            }}
          >
            <Skeleton
              variant="circular"
              animation={animation}
              width={42}
              height={42}
            />

            <Box sx={{ flex: 1 }}>
              <Skeleton
                variant="text"
                animation={animation}
                width="75%"
                height={22}
              />

              <Skeleton
                variant="text"
                animation={animation}
                width="50%"
                height={18}
              />
            </Box>
          </Box>
        );

      // Button
      case "button":
        return (
          <Skeleton
            key={index}
            variant="rounded"
            animation={animation}
            width={width || 120}
            height={height || 40}
            sx={sx}
          />
        );

      // Custom rectangular skeleton
      case "rectangular":
      default:
        return (
          <Skeleton
            key={index}
            variant="rectangular"
            animation={animation}
            width={width}
            height={height || 100}
            sx={{
              borderRadius: 2,
              ...sx,
            }}
          />
        );
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: spacing,
      }}
    >
      {Array.from({ length: count }, (_, index) => renderSkeleton(null, index))}
    </Box>
  );
};

export default SkeletonLoader;
