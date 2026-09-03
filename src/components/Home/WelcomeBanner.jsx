import React from "react";
import { Box, Container, Typography } from "@mui/material";

const WelcomeBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF8ED",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: { xs: 110, md: 88 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr auto 1fr",
            },
            alignItems: "center",
            gap: 2,
            py: 2,
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "0.78rem",
                fontWeight: 700,
              }}
            >
              साहित्यिक सामाजिक बहुभाषी ऑनलाइन ई-पत्रिका
            </Typography>

            <Typography
              sx={{
                mt: 0.4,
                color: "text.secondary",
                fontSize: "0.7rem",
              }}
            >
              साहित्य • समाज • कला • संस्कृति
            </Typography>
          </Box>

          {/* CENTER */}
          <Box
            sx={{
              px: { md: 4 },
              textAlign: "center",
              borderLeft: {
                xs: "none",
                md: "1px solid",
              },
              borderRight: {
                xs: "none",
                md: "1px solid",
              },
              borderColor: "divider",
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.18rem",
                },
                fontWeight: 800,
                lineHeight: 1.4,
              }}
            >
              साहित्य, समाज, कला और संस्कृति संसार की{" "}
              <Box
                component="span"
                sx={{
                  color: "secondary.dark",
                }}
              >
                दहलीज़ ही चौखट है।
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 0.4,
                color: "text.secondary",
                fontSize: "0.7rem",
              }}
            >
              आपका अपना साहित्यिक मंच
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "right",
              },
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "0.76rem",
                fontWeight: 700,
              }}
            >
              प्रकाशन : चौखट
            </Typography>

            <Typography
              sx={{
                mt: 0.3,
                color: "text.secondary",
                fontSize: "0.68rem",
              }}
            >
              साहित्य • समाज • संस्कृति
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WelcomeBanner;
