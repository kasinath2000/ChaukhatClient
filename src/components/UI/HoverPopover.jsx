import React, { useRef, useState } from "react";
import { Box, Popper } from "@mui/material";

const HoverPopover = ({ trigger, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const closeTimer = useRef(null);

  const handleOpen = (event) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setAnchorEl(null);
    }, 120);
  };

  const handleMenuEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  const handleMenuLeave = () => {
    handleClose();
  };

  return (
    <>
      <Box
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        sx={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {trigger}
      </Box>

      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal={false}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 6],
            },
          },
        ]}
        sx={{
          zIndex: 1500,
        }}
      >
        <Box
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
          sx={{
            minWidth: 210,
            p: 1,

            backgroundColor: "#FFFFFF",

            border: "1px solid",
            borderColor: "divider",

            borderRadius: 2,

            boxShadow:
              "0 12px 32px rgba(15, 23, 42, 0.12)",
          }}
        >
          {children}
        </Box>
      </Popper>
    </>
  );
};

export default HoverPopover;