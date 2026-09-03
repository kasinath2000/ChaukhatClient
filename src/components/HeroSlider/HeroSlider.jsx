import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

const HeroSlider = ({ slides = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        backgroundColor: "#E8D8C8",
        border: "1px solid rgba(59,6,10,0.1)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: {
            xs: 230,
            sm: 300,
            md: 400,
          },
        }}
      >
        <Box
          component="img"
          src={activeSlide.image}
          alt={activeSlide.title}
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(59,6,10,0.82), rgba(59,6,10,0.12) 75%)",
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "absolute",
            left: {
              xs: 20,
              md: 35,
            },
            bottom: {
              xs: 25,
              md: 40,
            },
            maxWidth: {
              xs: "75%",
              md: 500,
            },
          }}
        >
          <Typography
            sx={{
              color: "secondary.main",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            चौखट हिंदी पत्रिका
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#fff",
              fontSize: {
                xs: "1.45rem",
                sm: "2rem",
                md: "2.65rem",
              },
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            {activeSlide.title}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.8rem",
              lineHeight: 1.6,
            }}
          >
            {activeSlide.description}
          </Typography>
        </Box>

        {/* Previous */}
        <IconButton
          onClick={previousSlide}
          aria-label="Previous slide"
          sx={{
            position: "absolute",
            left: { xs: 8, md: 14 },
            top: "50%",
            transform: "translateY(-50%)",
            width: 34,
            height: 34,
            color: "#fff",
            backgroundColor: "rgba(59,6,10,0.55)",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          <ArrowBackIosNewRounded sx={{ fontSize: 15 }} />
        </IconButton>

        {/* Next */}
        <IconButton
          onClick={nextSlide}
          aria-label="Next slide"
          sx={{
            position: "absolute",
            right: { xs: 8, md: 14 },
            top: "50%",
            transform: "translateY(-50%)",
            width: 34,
            height: 34,
            color: "#fff",
            backgroundColor: "rgba(59,6,10,0.55)",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          <ArrowForwardIosRounded sx={{ fontSize: 15 }} />
        </IconButton>

        {/* Dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            right: 20,
            display: "flex",
            gap: 0.7,
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: index === activeIndex ? 24 : 7,
                height: 7,
                borderRadius: 5,
                cursor: "pointer",
                backgroundColor:
                  index === activeIndex
                    ? "secondary.main"
                    : "rgba(255,255,255,0.55)",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSlider;
