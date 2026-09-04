import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { AppCard, AppButton } from "../components/common/index";


const audioBooks = [
  {
    id: 1,
    title: "हिंदी साहित्य की चुनिंदा रचनाएं",
    audioUrl: "",
  },
  {
    id: 2,
    title: "कविता पाठ — समकालीन हिंदी कविता",
    audioUrl: "",
  },
  {
    id: 3,
    title: "कहानी संग्रह — हिंदी कहानियां",
    audioUrl: "",
  },
  {
    id: 4,
    title: "साहित्य संवाद",
    audioUrl: "",
  },
];

const AudioBooks = () => {
  const handleDownload = (url, title) => {
    if (!url) return;

    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}.mp3`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
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
            Audio Books
          </Typography>

          <Typography sx={{ mt: 1, color: "#6B4F45" }}>
            चौखट के ऑडियो साहित्य का संग्रह
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {audioBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <AppCard
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 2,
                    color: "#3B060A",
                    backgroundColor: "rgba(234, 166, 77, 0.18)",
                    mb: 2,
                  }}
                >
                  <HeadphonesRoundedIcon />
                </Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "#3B060A",
                    lineHeight: 1.5,
                  }}
                >
                  {book.title}
                </Typography>

                <Box sx={{ mt: "auto", pt: 3 }}>
                  {book.audioUrl ? (
                    <>
                      <audio
                        controls
                        style={{
                          width: "100%",
                          display: "block",
                        }}
                      >
                        <source src={book.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>

                      <AppButton
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        startIcon={<DownloadRoundedIcon />}
                        onClick={() =>
                          handleDownload(book.audioUrl, book.title)
                        }
                        sx={{ mt: 1.5 }}
                      >
                        Download
                      </AppButton>
                    </>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "0.82rem",
                        color: "#8A756D",
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: "rgba(59, 6, 10, 0.04)",
                      }}
                    >
                      ऑडियो जल्द उपलब्ध होगा।
                    </Typography>
                  )}
                </Box>
              </AppCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AudioBooks;
