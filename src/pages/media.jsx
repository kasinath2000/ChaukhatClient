// src/pages/media/Media.jsx

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { AppCard } from "../components/common/index";
import { mediaCategories, mediaItems } from "../data/mediaData";

const Media = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 1,
            }}
          >
            मीडिया
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: "secondary.main",
              borderRadius: 10,
              mx: "auto",
              mb: 2,
            }}
          />

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            साहित्य, कला, संस्कृति और समाज से जुड़े संवाद, कार्यक्रम एवं
            रचनात्मक प्रस्तुतियां।
          </Typography>
        </Box>

        {/* Categories */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2.5,
            mb: 6,
          }}
        >
          {mediaCategories.map((category) => {
            const count = mediaItems.filter(
              (item) => item.category === category.value,
            ).length;

            return (
              <AppCard
                key={category.value}
                component={Link}
                to={category.href}
                sx={{
                  textDecoration: "none",
                  display: "block",
                  backgroundColor: "#FFF8ED",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(234, 166, 77, 0.18)",
                    color: "primary.main",
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  {count}
                </Box>

                <Typography
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    mb: 0.5,
                  }}
                >
                  {category.label}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  मीडिया सामग्री देखें
                </Typography>
              </AppCard>
            );
          })}
        </Box>

        {/* Featured */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              mb: 2,
            }}
          >
            नवीनतम मीडिया
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {mediaItems.slice(0, 6).map((item) => (
            <AppCard key={item.id} padding={0}>
              <Box
                component="img"
                src={item.imageUrl}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: { xs: 210, md: 230 },
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "12px 12px 0 0",
                }}
              />

              <Box sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </AppCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Media;
