// src/components/Common/AppChip/AppChip.jsx

import React from "react";
import { Chip } from "@mui/material";

const AppChip = ({
  label,
  icon,
  avatar,
  clickable = false,
  active = false,
  color = "primary",
  variant = "outlined",
  size = "medium",
  onClick,
  component,
  to,
  href,
  disabled = false,
  sx = {},
  ...props
}) => {
  return (
    <Chip
      label={label}
      icon={icon}
      avatar={avatar}
      clickable={clickable}
      color={color}
      variant={active ? "filled" : variant}
      size={size}
      onClick={onClick}
      component={component}
      to={to}
      href={href}
      disabled={disabled}
      sx={{
        height: 38,
        px: 0.5,
        borderRadius: 2,
        fontWeight: 600,
        fontSize: "0.88rem",
        borderColor: "#eed5bd",
        // color: "#3B060A",
        // backgroundColor: active ? "#3B060A" : "#FFF8ED",

        "& .MuiChip-label": {
          px: 1.5,
        },

        "&:hover": {
          backgroundColor: active ? "#260306" : "rgba(234, 166, 77, 0.18)",
          borderColor: "#EAA64D",
        },

        "&.Mui-disabled": {
          opacity: 0.55,
        },

        ...sx,
      }}
      {...props}
    />
  );
};

export default AppChip;
