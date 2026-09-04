import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { AppCard, AppButton } from "../components/common/index";

const books = [
  {
    id: 1,
    title: "हिंदी साहित्य का परिचय",
    imageSrc: "/default-placeholder.png",
    pdfLink: "#",
  },
  {
    id: 2,
    title: "भारतीय साहित्य और संस्कृति",
    imageSrc: "/default-placeholder.png",
    pdfLink: "#",
  },
  {
    id: 3,
    title: "आधुनिक हिंदी कविता",
    imageSrc: "/default-placeholder.png",
    pdfLink: "#",
  },
  {
    id: 4,
    title: "साहित्य और समाज",
    imageSrc: "/default-placeholder.png",
    pdfLink: "#",
  },
];

const Books = () => {
  const handleOpenPdf = (url) => {
    if (!url || url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#3B060A",
            }}
          >
            Books
          </Typography>

          <Typography sx={{ mt: 1, color: "#6B4F45" }}>
            चौखट पुस्तकालय की पुस्तकों का संग्रह
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <AppCard
                sx={{
                  p: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  src={book.imageSrc}
                  alt={book.title}
                  onError={(e) => {
                    e.currentTarget.src = "/default-placeholder.png";
                  }}
                  sx={{
                    width: "100%",
                    height: 280,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    p: 2,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#3B060A",
                      lineHeight: 1.5,
                    }}
                  >
                    {book.title}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1, mt: "auto", pt: 2 }}>
                    <AppButton
                      fullWidth
                      startIcon={<PictureAsPdfRoundedIcon />}
                      onClick={() => handleOpenPdf(book.pdfLink)}
                      sx={{ fontSize: "0.8rem" }}
                    >
                      PDF देखें
                    </AppButton>

                    <AppButton
                      variant="outlined"
                      color="secondary"
                      sx={{ minWidth: 42, px: 0 }}
                    >
                      <DownloadRoundedIcon fontSize="small" />
                    </AppButton>
                  </Box>
                </Box>
              </AppCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Books;
