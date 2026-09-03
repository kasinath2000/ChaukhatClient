import React from "react";
import { Button } from "@mui/material";

const AppButton = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  startIcon,
  endIcon,
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  component,
  to,
  href,
  target,
  rel,
  sx = {},
  ...props
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      component={component}
      to={to}
      href={href}
      target={target}
      rel={rel}
      disableElevation
      sx={{
        minHeight: 40,
        px: 2,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
        whiteSpace: "nowrap",

        "&.MuiButton-containedPrimary": {
          backgroundColor: "#3B060A",
          color: "#FFFFFF",

          "&:hover": {
            backgroundColor: "#260306",
          },
        },

        "&.MuiButton-containedSecondary": {
          backgroundColor: "#EAA64D",
          color: "#3B060A",

          "&:hover": {
            backgroundColor: "#C77D20",
          },
        },

        "&.MuiButton-outlinedPrimary": {
          borderColor: "#3B060A",
          color: "#3B060A",

          "&:hover": {
            borderColor: "#260306",
            backgroundColor: "rgba(59, 6, 10, 0.06)",
          },
        },

        "&.MuiButton-outlinedSecondary": {
          borderColor: "#EAA64D",
          color: "#3B060A",

          "&:hover": {
            borderColor: "#C77D20",
            backgroundColor: "rgba(234, 166, 77, 0.10)",
          },
        },

        "&.Mui-disabled": {
          opacity: 0.6,
        },

        ...sx,
      }}
      {...props}
    >
      {loading ? "लोड हो रहा है..." : children}
    </Button>
  );
};

export default AppButton;
