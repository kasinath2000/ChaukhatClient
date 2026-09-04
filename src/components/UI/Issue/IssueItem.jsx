import React, { useState } from "react";

import { Box, Chip, IconButton, Typography, Tooltip } from "@mui/material";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { AppCard } from "../../common/index";

const IssueItem = ({ title, pdfUrl }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const hasPdf = Boolean(pdfUrl);

  const handleDownload = async (event) => {
    event.stopPropagation();

    if (!hasPdf || isDownloading) return;

    try {
      setIsDownloading(true);

      const response = await fetch(pdfUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = `${title}.pdf`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AppCard
      sx={{
        width: "100%",
        height: "100%",

        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        overflow: "hidden",

        backgroundColor: "background.paper",

        transition: "all 0.25s ease",

        "&:hover": {
          borderColor: "secondary.main",
          transform: "translateY(-4px)",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          minHeight: 190,

          p: {
            xs: 2,
            sm: 2.5,
          },

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* ================= TOP SECTION ================= */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 1.5,
            }}
          >
            {/* Magazine Icon */}
            <Box
              sx={{
                width: 48,
                height: 48,
                flexShrink: 0,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: 2.5,

                backgroundColor: "rgba(234, 166, 77, 0.14)",
                color: "primary.main",
              }}
            >
              <MenuBookRoundedIcon />
            </Box>

            {/* Published */}
            <Chip
              label="Published"
              size="small"
              sx={{
                height: 26,

                backgroundColor: "#4CAF50",
                color: "#fff",

                fontWeight: 600,
                fontSize: "0.72rem",

                "& .MuiChip-label": {
                  px: 1.2,
                },
              }}
            />
          </Box>

          {/* ================= TITLE ================= */}
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,

              fontWeight: 750,
              color: "text.primary",

              lineHeight: 1.55,

              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* ================= BOTTOM SECTION ================= */}
        <Box
          sx={{
            mt: 2.5,
            pt: 1.5,

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
            }}
          >
            डिजिटल अंक
          </Typography>

          <Tooltip
            title={
              hasPdf
                ? isDownloading
                  ? "डाउनलोड हो रहा है..."
                  : "PDF डाउनलोड करें"
                : "PDF उपलब्ध नहीं है"
            }
          >
            <span>
              <IconButton
                size="small"
                aria-label={`Download ${title}`}
                disabled={!hasPdf || isDownloading}
                onClick={handleDownload}
                sx={{
                  width: 40,
                  height: 40,

                  border: "1px solid",
                  borderColor: "secondary.main",

                  color: "primary.main",

                  backgroundColor: "rgba(234, 166, 77, 0.10)",

                  transition: "all 0.2s ease",

                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    transform: "scale(1.05)",
                  },

                  "&.Mui-disabled": {
                    opacity: 0.45,
                  },
                }}
              >
                <DownloadRoundedIcon
                  sx={{
                    fontSize: 20,
                  }}
                />
              </IconButton>
            </span>
          </Tooltip>
        </Box>
      </Box>
    </AppCard>
  );
};

export default IssueItem;
