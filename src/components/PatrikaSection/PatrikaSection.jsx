import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  AutoStoriesRounded,
} from "@mui/icons-material";

const INITIAL_COUNT = 10;

const PatrikaSection = ({ patrikaItems = [] }) => {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded
    ? patrikaItems
    : patrikaItems.slice(0, INITIAL_COUNT);

  const hasMore = patrikaItems.length > INITIAL_COUNT;

  return (
    <Box
      sx={{
        mt: 3,
        p: { xs: 2, md: 2.5 },
        borderRadius: 3,
        backgroundColor: "#FFF8ED",
        border: "1px solid rgba(59,6,10,0.09)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 2.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
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
            <AutoStoriesRounded sx={{ fontSize: 19 }} />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "0.98rem",
                fontWeight: 800,
              }}
            >
              पत्रिका
            </Typography>

            <Typography
              sx={{
                mt: 0.2,
                color: "text.secondary",
                fontSize: "0.68rem",
              }}
            >
              चौखट के प्रकाशित अंक
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Patrika */}
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "grid",
          },

          gridTemplateColumns: {
            sm: "repeat(4, minmax(0, 1fr))",
            md: "repeat(5, minmax(0, 1fr))",
          },

          gap: { xs: 1.5, sm: 2 },

          overflowX: {
            xs: "auto",
            sm: "visible",
          },

          pb: {
            xs: 1,
            sm: 0,
          },

          scrollSnapType: {
            xs: "x mandatory",
            sm: "none",
          },

          "&::-webkit-scrollbar": {
            height: 5,
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: "#F3E8D5",
            borderRadius: 10,
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#D6B98A",
            borderRadius: 10,
          },
        }}
      >
        {visibleItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              minWidth: {
                xs: 135,
                sm: 0,
              },

              width: {
                xs: 135,
                sm: "auto",
              },

              flexShrink: 0,

              scrollSnapAlign: "start",

              cursor: "pointer",

              transition: "transform 0.25s ease",

              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            {/* Cover */}
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "400 / 560",
                borderRadius: 2,
                backgroundColor: "#F3E8D5",
                border: "1px solid rgba(59,6,10,0.1)",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Title */}
            <Typography
              sx={{
                mt: 1,
                color: "primary.main",
                fontSize: "0.72rem",
                fontWeight: 700,
                lineHeight: 1.4,

                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.title}
            </Typography>

            {item.date && (
              <Typography
                sx={{
                  mt: 0.3,
                  color: "text.secondary",
                  fontSize: "0.63rem",
                }}
              >
                {item.date}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Expand */}
      {hasMore && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2.5,
          }}
        >
          <Button
            onClick={() => setExpanded((value) => !value)}
            variant="outlined"
            color="primary"
            endIcon={
              expanded ? <ArrowUpwardRounded /> : <ArrowDownwardRounded />
            }
            sx={{
              minWidth: 170,
              fontSize: "0.78rem",
            }}
          >
            {expanded ? "कम पत्रिकाएं देखें" : "सभी पत्रिका देखें"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PatrikaSection;
