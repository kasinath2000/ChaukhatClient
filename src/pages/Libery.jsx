import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { AppCard } from "../components/common/index";

const libraryItems = [
  {
    id: 1,
    title: "Books",
    description: "विभिन्न साहित्यिक पुस्तकों का संग्रह",
    path: "/libery/books",
    icon: <MenuBookRoundedIcon />,
  },
  {
    id: 2,
    title: "Text Books",
    description: "पाठ्य एवं अध्ययन से संबंधित पुस्तकें",
    path: "/libery/text-books",
    icon: <SchoolRoundedIcon />,
  },
  {
    id: 3,
    title: "Audio Books",
    description: "साहित्यिक ऑडियो सामग्री का संग्रह",
    path: "/libery/audio-books",
    icon: <HeadphonesRoundedIcon />,
  },
  {
    id: 4,
    title: "Book Reviews",
    description: "पुस्तकों की समीक्षाएं और साहित्यिक विश्लेषण",
    path: "/libery/book-reviews",
    icon: <ReviewsRoundedIcon />,
  },
];

const Libery = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            mb: { xs: 4, md: 5 },
            maxWidth: 760,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#3B060A",
              fontWeight: 800,
              fontSize: {
                xs: "2rem",
                md: "2.8rem",
              },
            }}
          >
            चौखट पुस्तकालय
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              color: "#6B4F45",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            साहित्य, अध्ययन और श्रव्य सामग्री से जुड़े विभिन्न संग्रहों को एक ही
            स्थान पर देखें।
          </Typography>
        </Box>

        {/* Categories */}
        <Grid container spacing={3}>
          {libraryItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <AppCard
                component={Link}
                to={item.path}
                sx={{
                  p: 2.5,
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  color: "inherit",
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 2,
                    color: "#3B060A",
                    backgroundColor: "rgba(234, 166, 77, 0.18)",
                    mb: 2.5,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#3B060A",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: "#6B4F45",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {item.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                    mt: 2.5,
                    color: "#3B060A",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                  }}
                >
                  देखें
                  <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                </Box>
              </AppCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Libery;
