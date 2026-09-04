import React from "react";
import { Box } from "@mui/material";

const AppCard = ({
  children,
  padding = 2,
  borderRadius = 3,
  backgroundColor = "#FFF8ED",
  borderColor = "rgba(59, 6, 10, 0.10)",
  hover = true,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        p: padding,

        backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius,

        transition: "all 0.25s ease",

        ...(hover && {
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "rgba(234, 166, 77, 0.65)",
            boxShadow: "0 12px 30px rgba(59, 6, 10, 0.10)",
          },
        }),

        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default AppCard;
