import React from "react";

import {
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { Link } from "react-router-dom";

import { AppCard } from "../../components/common/index";

const RulesBookDocument = ({
  type = "pdf",
  name,
  url,
}) => {
  const isPdf = type === "pdf";

  const previewUrl = `/rulesbook/preview?type=${type}&file=${encodeURIComponent(
    url,
  )}&title=${encodeURIComponent(name)}`;

  return (
    <AppCard
      hover
      sx={{
        p: 0,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {/* File Icon */}
        <Box
          sx={{
            width: 48,
            height: 48,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2.5,
            backgroundColor: isPdf
              ? "rgba(217, 44, 84, 0.10)"
              : "rgba(37, 99, 235, 0.10)",
            color: isPdf
              ? "#D92C54"
              : "primary.main",
          }}
        >
          {isPdf ? (
            <PictureAsPdfRoundedIcon />
          ) : (
            <DescriptionRoundedIcon />
          )}
        </Box>

        {/* Name */}
        <Box
          sx={{
            minWidth: 0,
            flex: 1,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
            }}
          >
            {isPdf ? "PDF Document" : "Word Document"}
          </Typography>
        </Box>

        {/* Preview */}
        <Tooltip title="Preview">
          <IconButton
            component={Link}
            to={previewUrl}
            size="small"
            sx={{
              color: "primary.main",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <VisibilityRoundedIcon
              sx={{
                fontSize: 19,
              }}
            />
          </IconButton>
        </Tooltip>

        {/* Download */}
        <Tooltip title="Download">
          <IconButton
            component="a"
            href={url}
            download
            size="small"
            sx={{
              color: "secondary.main",
              backgroundColor:
                "rgba(234, 166, 77, 0.12)",

              "&:hover": {
                backgroundColor: "secondary.main",
                color: "primary.main",
              },
            }}
          >
            <DownloadRoundedIcon
              sx={{
                fontSize: 20,
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </AppCard>
  );
};

export default RulesBookDocument;