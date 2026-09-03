import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import {
  ArrowForwardRounded,
  NotificationsNoneRounded,
} from "@mui/icons-material";
import {
  AppButton,
} from "../common/index";
const NoticeScroller = ({ notices = [] }) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#FFF8ED",
        border: "1px solid rgba(59,6,10,0.09)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
        }}
      >
        <Box
          sx={{
            width: 34,
            height: 34,
            display: "grid",
            placeItems: "center",
            borderRadius: 1.5,
            color: "primary.main",
            backgroundColor: "rgba(234,166,77,0.15)",
          }}
        >
          <NotificationsNoneRounded sx={{ fontSize: 19 }} />
        </Box>

        <Typography
          sx={{
            color: "primary.main",
            fontSize: "0.95rem",
            fontWeight: 800,
          }}
        >
          मुख्य सूचनाएं
        </Typography>
      </Box>

      <Box>
        {notices.map((notice, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 1,
              py: 1.2,
              borderBottom: index !== notices.length - 1 ? "1px solid" : "none",
              borderColor: "divider",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                mt: 0.8,
                flexShrink: 0,
                borderRadius: "50%",
                backgroundColor: "secondary.main",
              }}
            />

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.74rem",
                lineHeight: 1.55,
              }}
            >
              {notice}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        component={Link}
        to="/notices"
         variant="outlined"
  color="primary"
        endIcon={<ArrowForwardRounded />}
        sx={{
          mt: 1.5,
          fontSize: "0.74rem",
        }}
      >
        सभी सूचनाएं
      </Button>
    </Box>
  );
};

export default NoticeScroller;
