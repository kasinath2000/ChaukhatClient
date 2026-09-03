import React from "react";
import { Box, Container, Typography } from "@mui/material";

const CopyrightPolicy = () => {
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
            Copyright Policy
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
            Copyright Notice
          </Typography>

          <Typography paragraph>
            All original content published on Chaukhat India, including
            articles, text, graphics, photographs, videos, logos, designs, and
            other materials, is protected by applicable copyright laws unless
            otherwise stated.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Use of Content
          </Typography>

          <Typography paragraph>
            Content available on this website is provided for personal and
            informational purposes. Reproduction, republication, distribution,
            modification, or commercial use of copyrighted material without
            appropriate permission is not permitted.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Permission to Reproduce
          </Typography>

          <Typography paragraph>
            Requests to reproduce, republish, translate, distribute, or
            otherwise use copyrighted content should be submitted to Chaukhat
            India for prior permission.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Third-Party Content
          </Typography>

          <Typography paragraph>
            Some content may belong to third parties or may be published with
            permission or attribution. The copyright and usage rights for such
            content remain with their respective owners.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Copyright Infringement
          </Typography>

          <Typography paragraph>
            If you believe that copyrighted material has been used on our
            website without authorization, please contact us with sufficient
            information to identify the material and explain the nature of the
            concern.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Policy Changes
          </Typography>

          <Typography paragraph>
            Chaukhat India may update this Copyright Policy when necessary.
            Changes will be published on this page.
          </Typography>

          <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
            Contact
          </Typography>

          <Typography paragraph sx={{ mb: 0 }}>
            For copyright-related questions or permission requests, please
            contact Chaukhat India through the contact information provided on
            the website.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CopyrightPolicy;
