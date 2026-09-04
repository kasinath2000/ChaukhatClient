// src/pages/media/MediaCategory.jsx

import React, { useMemo } from "react";
import { Box, Container, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Link } from "react-router-dom";
import { AppCard, AppChip, AppSlider } from "../../components/common/index";
import { mediaCategories } from "../../data/mediaData";

const MediaCategory = ({ title, description, category, items = [] }) => {
  // Category Items
  const categoryItems = useMemo(
    () => items.filter((item) => item.category === category),
    [items, category],
  );

  return (
    <Box
      sx={{
        py: {
          xs: 4,
          md: 6,
        },
      }}
    >
      <Container maxWidth="xl">
        {/*  Page Header*/}
        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 4,
              md: 5,
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              mb: 1,
            }}
          >
            {title}
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
              maxWidth: 700,
              mx: "auto",
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/*  Category Navigation*/}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            overflowX: "auto",
            pb: 1.5,
            mb: 4,
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              height: 5,
            },

            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#D6B98A",
              borderRadius: 10,
            },
          }}
        >
          {mediaCategories.map((item) => {
            const active = item.value === category;

            return (
              <AppChip
                key={item.value}
                label={item.label}
                active={active}
                clickable
                component={Link}
                to={item.href}
                sx={{
                  flexShrink: 0,
                }}
              />
            );
          })}
        </Box>

        {/*  Featured Slider */}
        {categoryItems.length > 0 && (
          <Box sx={{ mb: 5 }}>
            <AppSlider
              items={categoryItems}
              getSlideLink={(item) => item.link}
              height={{
                xs: 300,
                sm: 400,
                md: 500,
              }}
              renderSlide={(item) => (
                <>
                  {/* Image */}
                  <Box
                    component="img"
                    src={item.imageUrl}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      opacity: 0.72,
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(90deg, rgba(59,6,10,0.94) 0%, rgba(59,6,10,0.55) 48%, rgba(59,6,10,0.08) 100%)",
                      display: "flex",
                      alignItems: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <Box
                      sx={{
                        px: {
                          xs: 3,
                          md: 6,
                        },
                        maxWidth: {
                          xs: "100%",
                          md: "65%",
                        },
                      }}
                    >
                      {/* Media Label */}
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.7,
                          px: 1.3,
                          py: 0.6,
                          borderRadius: 10,
                          backgroundColor: "secondary.main",
                          color: "primary.main",
                          mb: 2,
                          fontSize: "0.8rem",
                          fontWeight: 700,
                        }}
                      >
                        <PlayArrowRoundedIcon
                          sx={{
                            fontSize: 17,
                          }}
                        />
                        मीडिया
                      </Box>
                      {/* Title */}
                      <Typography
                        variant="h4"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 800,
                          fontSize: {
                            xs: "1.7rem",
                            md: "2.5rem",
                          },
                          mb: 1.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.82)",
                          lineHeight: 1.8,
                          maxWidth: 600,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </>
              )}
            />
          </Box>
        )}

        {/* All Items Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              fontWeight: 800,
            }}
          >
            {title} की सभी सामग्री
          </Typography>
        </Box>

        {/*  Content Grid*/}
        {categoryItems.length > 0 ? (
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
            {categoryItems.map((item) => (
              <AppCard key={item.id} padding={0}>
                {/* Image */}
                <Box
                  component="img"
                  src={item.imageUrl}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: {
                      xs: 210,
                      md: 230,
                    },
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "12px 12px 0 0",
                  }}
                />

                {/* Content */}
                <Box sx={{ p: 2.5 }}>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      fontSize: "1.05rem",
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
        ) : (
          //  Empty State
          <AppCard hover={false}>
            <Typography
              sx={{
                textAlign: "center",
                color: "text.secondary",
                py: 4,
              }}
            >
              इस श्रेणी में अभी कोई मीडिया उपलब्ध नहीं है।
            </Typography>
          </AppCard>
        )}
      </Container>
    </Box>
  );
};

export default MediaCategory;
