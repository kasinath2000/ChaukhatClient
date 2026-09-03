import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 140px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            px: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "6rem", sm: "9rem", md: "11rem" },
              lineHeight: 0.9,
              fontWeight: 800,
              color: "primary.main",
              letterSpacing: "-0.06em",
            }}
          >
            404
          </Typography>

          <Box
            sx={{
              width: 70,
              height: 4,
              mx: "auto",
              my: 3,
              borderRadius: 10,
              backgroundColor: "secondary.main",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              mb: 1,
              fontSize: { xs: "1.75rem", sm: "2.125rem" },
            }}
          >
            Page Not Found
          </Typography>

          <Typography
            sx={{
              maxWidth: 520,
              mx: "auto",
              color: "text.secondary",
              fontSize: { xs: "0.95rem", sm: "1rem" },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            The page you are looking for may have been moved, removed, or the
            URL may be incorrect.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeRoundedIcon />}
            onClick={() => navigate("/")}
            sx={{
              px: 3,
              py: 1.2,
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
