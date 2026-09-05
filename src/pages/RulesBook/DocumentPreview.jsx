import React from "react";

import {
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { Link } from "react-router-dom";

const DocumentPreview = ({
  title = "Document Preview",
  fileUrl,
  fileType = "pdf",
  backUrl = -1,
}) => {
  const isPdf = fileType === "pdf";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: {
          xs: 2,
          md: 4,
        },
      }}
    >
      {/* =========================
          HEADER
      ========================== */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: {
            xs: 2,
            md: 3,
          },
          mb: 2,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Tooltip title="Back">
          <IconButton
            component={Link}
            to={backUrl}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              color: "primary.main",
            }}
          >
            <ArrowBackRoundedIcon />
          </IconButton>
        </Tooltip>

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            {isPdf
              ? "PDF Preview"
              : "Word Document"}
          </Typography>
        </Box>

        {/* Download */}
        <Tooltip title="Download">
          <IconButton
            component="a"
            href={fileUrl}
            download
            sx={{
              backgroundColor: "secondary.main",
              color: "primary.main",

              "&:hover": {
                backgroundColor: "secondary.main",
                transform: "translateY(-1px)",
              },
            }}
          >
            <DownloadRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* =========================
          PREVIEW
      ========================== */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: {
            xs: 1,
            md: 3,
          },
        }}
      >
        {isPdf ? (
          <Box
            sx={{
              width: "100%",
              height: {
                xs: "75vh",
                md: "82vh",
              },
              overflow: "hidden",
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
            }}
          >
            <Box
              component="iframe"
              src={fileUrl}
              title={title}
              sx={{
                width: "100%",
                height: "100%",
                border: 0,
                display: "block",
              }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              minHeight: "60vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 4,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                mb: 1,
              }}
            >
              Word Document Preview
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                maxWidth: 500,
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              Word documents को browser में native रूप से
              preview करना सभी browsers में reliable नहीं है।
              आप document को download करके Microsoft Word
              या compatible application में खोल सकते हैं।
            </Typography>

            <Box
              component="a"
              href={fileUrl}
              download
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1.2,
                borderRadius: 2,
                backgroundColor: "secondary.main",
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              <DownloadRoundedIcon fontSize="small" />
              Word File Download करें
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DocumentPreview;