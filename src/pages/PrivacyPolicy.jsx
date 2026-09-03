import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        py: { xs: 5, md: 8 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            backgroundColor: "#FFF8ED",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 3,
            p: { xs: 3, sm: 4, md: 6 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 4,
            }}
          >
            Last updated: September 3, 2026
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5 }}>
            Introduction
          </Typography>

          <Typography paragraph>
            Chaukhat India respects your privacy and is committed to protecting
            the personal information of visitors to our website. This Privacy
            Policy explains how information may be collected, used, and
            protected when you use our website.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Information We Collect
          </Typography>

          <Typography paragraph>
            We may collect information that you voluntarily provide when you
            contact us, subscribe to our services, submit feedback, or interact
            with features available on our website.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            How We Use Information
          </Typography>

          <Typography paragraph>
            Information may be used to respond to your requests, improve our
            website and services, communicate with users, and maintain the
            security and functionality of the website.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Cookies
          </Typography>

          <Typography paragraph>
            Our website may use cookies or similar technologies to improve user
            experience, understand website usage, and provide essential
            functionality.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Third-Party Services
          </Typography>

          <Typography paragraph>
            Some website features may use third-party services. Such services
            may have their own privacy policies and terms that govern how they
            process information.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Data Security
          </Typography>

          <Typography paragraph>
            We take reasonable measures to protect information from unauthorized
            access, alteration, disclosure, or destruction. However, no method
            of transmission or electronic storage is completely secure.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Changes to This Policy
          </Typography>

          <Typography paragraph>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated revision date.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Contact Us
          </Typography>

          <Typography paragraph sx={{ mb: 0 }}>
            If you have any questions regarding this Privacy Policy, please
            contact us through the contact information available on our website.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
