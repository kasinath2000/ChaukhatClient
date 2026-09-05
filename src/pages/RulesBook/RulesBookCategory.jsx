import React from "react";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import {
  AppCard,
  AppChip,
} from "../../components/common/index";

import {
  rulesLinks,
  rulesBookData,
} from "../../data/rulesBookData";

import RulesBookDocument from "./RulesBookDocument";

const RulesBookCategory = ({
  title,
  description,
  category,
}) => {
  const data = rulesBookData[category];

  if (!data) {
    return null;
  }

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

        {/* =========================
            PAGE HEADER
        ========================== */}
        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 4,
              md: 5,
            },
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              mx: "auto",
              mb: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "secondary.main",
              color: "primary.main",
            }}
          >
            <MenuBookRoundedIcon />
          </Box>

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
              maxWidth: 720,
              mx: "auto",
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* =========================
            CATEGORY NAVIGATION
        ========================== */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mb: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              maxWidth: "100%",
              overflowX: "auto",
              pb: 1,
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
            {rulesLinks.map((item) => {
              const active = item.href.includes(category);

              return (
                <AppChip
                  key={item.href}
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
        </Box>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 1.5fr) minmax(300px, 0.7fr)",
            },
            gap: {
              xs: 3,
              lg: 4,
            },
            alignItems: "start",
          }}
        >

          {/* =========================
              TEXT CONTENT
          ========================== */}
          <AppCard
            hover={false}
            sx={{
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                mb: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 5,
                  height: 28,
                  borderRadius: 5,
                  backgroundColor: "secondary.main",
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,
                }}
              >
                {title}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {data.content.map((paragraph, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.9,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </AppCard>

          {/* =========================
              DOCUMENTS
          ========================== */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                mb: 0.5,
              }}
            >
              संबंधित दस्तावेज
            </Typography>

            <RulesBookDocument
              type="pdf"
              name={data.pdf.name}
              url={data.pdf.url}
            />

            <RulesBookDocument
              type="word"
              name={data.word.name}
              url={data.word.url}
            />
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default RulesBookCategory;