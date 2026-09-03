import React from "react";

import { Box } from "@mui/material";

import Navbar from "../Nav/NavBar";
import Footer from "../Footer/Footer";

const LayoutWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
      }}
    >
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          minWidth: 0,
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LayoutWrapper;
