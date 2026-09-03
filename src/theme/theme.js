
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    // =========================================
    // Client Main Background
    // =========================================
    background: {
      default: "#F6F8FC",
    },

    // =========================================
    // Primary - Old Brand Maroon
    // =========================================
    primary: {
      main: "#3B060A",
      light: "#6A2529",
      dark: "#260306",
      contrastText: "#FFFFFF",
    },

    // =========================================
    // Secondary - Old Brand Gold
    // =========================================
    secondary: {
      main: "#EAA64D",
      light: "#FAD59A",
      dark: "#C77D20",
      contrastText: "#3B060A",
    },

    // =========================================
    // Text
    // =========================================
    text: {
      primary: "#3B060A",
      secondary: "#6B4F45",
      disabled: "#9A8580",
    },

    // =========================================
    // Divider / Border
    // =========================================
    divider: "#E8D8C8",

    // =========================================
    // Extra Brand Colors
    // =========================================
    brand: {
      maroon: "#3B060A",
      maroonLight: "#6A2529",
      maroonDark: "#260306",

      gold: "#EAA64D",
      goldLight: "#FAD59A",
      goldDark: "#C77D20",

      cream: "#FFF8ED",
      surface: "#FFFFFF",
    },
  },

  // =========================================
  // Typography
  // =========================================
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    button: {
      fontWeight: 600,
    },
  },

  // =========================================
  // Global Shape
  // =========================================
  shape: {
    borderRadius: 12,
  },

  // =========================================
  // Component Customization
  // =========================================
  components: {
    // -----------------------------------------
    // CssBaseline
    // -----------------------------------------
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100%",
        },

        body: {
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#F6F8FC",
        },

        "#root": {
          minHeight: "100vh",
          backgroundColor: "#F6F8FC",
        },

        "*": {
          boxSizing: "border-box",
        },

        "::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },

        "::-webkit-scrollbar-track": {
          backgroundColor: "#F6F8FC",
        },

        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#D6B98A",
          borderRadius: "10px",
        },

        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#EAA64D",
        },
      },
    },

    // -----------------------------------------
    // Button
    // -----------------------------------------
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
        },

        containedPrimary: {
          backgroundColor: "#3B060A",

          "&:hover": {
            backgroundColor: "#260306",
          },
        },

        containedSecondary: {
          backgroundColor: "#EAA64D",
          color: "#3B060A",

          "&:hover": {
            backgroundColor: "#C77D20",
          },
        },

        outlinedPrimary: {
          borderColor: "#3B060A",
          color: "#3B060A",

          "&:hover": {
            borderColor: "#260306",
            backgroundColor: "rgba(59, 6, 10, 0.06)",
          },
        },

        outlinedSecondary: {
          borderColor: "#EAA64D",
          color: "#3B060A",

          "&:hover": {
            borderColor: "#C77D20",
            backgroundColor: "rgba(234, 166, 77, 0.10)",
          },
        },
      },
    },

    // -----------------------------------------
    // TextField
    // -----------------------------------------
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },

    // -----------------------------------------
    // Input
    // -----------------------------------------
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,

          backgroundColor: "#FFFFFF",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E8D8C8",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EAA64D",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3B060A",
            borderWidth: 1,
          },
        },
      },
    },

    // -----------------------------------------
    // Card
    // -----------------------------------------
    // Card styling retained for compatibility,
    // but client layouts should prefer Box.
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,

          boxShadow:
            "0 4px 20px rgba(59, 6, 10, 0.06)",

          border: "1px solid #E8D8C8",

          backgroundColor: "#FFFFFF",
        },
      },
    },

    // -----------------------------------------
    // IconButton
    // -----------------------------------------
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,

          "&:hover": {
            backgroundColor:
              "rgba(234, 166, 77, 0.10)",
          },
        },
      },
    },

    // -----------------------------------------
    // Divider
    // -----------------------------------------
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E8D8C8",
        },
      },
    },
  },
});

export default theme;
