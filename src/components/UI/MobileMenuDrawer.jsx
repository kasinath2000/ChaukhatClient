import React, { useEffect, useState } from "react";

import {
  Modal,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Collapse,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileMenuDrawer = ({
  open,
  onClose,
  navItems = [],
}) => {
  const { t, i18n } = useTranslation();

  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    if (!open) {
      setExpandedMenu(null);
    }
  }, [open]);

  const toggleSubmenu = (label) => {
    setExpandedMenu((prev) =>
      prev === label ? null : label
    );
  };

  const handleLanguageToggle = () => {
    const newLanguage =
      i18n.language === "hi" ? "en" : "hi";

    i18n.changeLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="mobile-menu"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "88%",
            sm: 380,
          },

          maxWidth: 380,

          height: "100vh",

          backgroundColor: "background.default",

          outline: "none",

          display: "flex",
          flexDirection: "column",

          boxShadow:
            "-10px 0 35px rgba(15, 23, 42, 0.12)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            minHeight: 72,

            px: 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            backgroundColor: "#FFFFFF",

            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            id="mobile-menu"
            sx={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            {t("menu")}
          </Typography>

          <IconButton
            onClick={onClose}
            aria-label="Close menu"
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,

              color: "text.primary",

              "&:hover": {
                color: "primary.main",
                backgroundColor:
                  "rgba(37, 99, 235, 0.06)",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",

            px: 1.5,
            py: 2,
          }}
        >
          {navItems.map((item) => {
            const hasSubmenu =
              Array.isArray(item.submenu) &&
              item.submenu.length > 0;

            const isExpanded =
              expandedMenu === item.label;

            return (
              <Box key={item.label}>
                {hasSubmenu ? (
                  <>
                    <Box
                      component="button"
                      type="button"
                      onClick={() =>
                        toggleSubmenu(item.label)
                      }
                      sx={{
                        width: "100%",
                        minHeight: 50,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",

                        px: 1.5,

                        border: 0,
                        borderRadius: 2,

                        backgroundColor:
                          isExpanded
                            ? "rgba(37, 99, 235, 0.06)"
                            : "transparent",

                        color:
                          isExpanded
                            ? "primary.main"
                            : "text.primary",

                        cursor: "pointer",

                        fontFamily: "inherit",
                        fontSize: "0.95rem",
                        fontWeight: 600,

                        textAlign: "left",

                        "&:hover": {
                          backgroundColor:
                            "rgba(37, 99, 235, 0.06)",
                          color: "primary.main",
                        },
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "inherit",
                          fontWeight: "inherit",
                        }}
                      >
                        {t(item.label)}
                      </Typography>

                      <ExpandMoreRoundedIcon
                        sx={{
                          transition:
                            "transform 0.2s ease",

                          transform: isExpanded
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </Box>

                    <Collapse
                      in={isExpanded}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box
                        sx={{
                          ml: 1.5,
                          pl: 1,

                          borderLeft: "2px solid",
                          borderColor: "divider",

                          py: 0.5,
                        }}
                      >
                        {item.submenu.map(
                          (subItem) => (
                            <Box
                              key={subItem.href}
                              component={NavLink}
                              to={subItem.href}
                              onClick={onClose}
                              sx={({ palette }) => ({
                                display: "flex",
                                alignItems: "center",

                                minHeight: 44,

                                px: 1.5,

                                borderRadius: 1.5,

                                textDecoration: "none",

                                color:
                                  location.pathname ===
                                  subItem.href
                                    ? palette.primary
                                        .main
                                    : palette.text
                                        .secondary,

                                fontSize: "0.9rem",

                                fontWeight:
                                  location.pathname ===
                                  subItem.href
                                    ? 700
                                    : 500,

                                "&:hover": {
                                  color:
                                    palette.primary
                                      .main,

                                  backgroundColor:
                                    "rgba(37, 99, 235, 0.06)",
                                },
                              })}
                            >
                              {t(subItem.label)}
                            </Box>
                          )
                        )}
                      </Box>
                    </Collapse>
                  </>
                ) : (
                  <Box
                    component={NavLink}
                    to={item.href}
                    onClick={onClose}
                    sx={({ palette }) => ({
                      display: "flex",
                      alignItems: "center",

                      minHeight: 50,

                      px: 1.5,

                      borderRadius: 2,

                      textDecoration: "none",

                      color:
                        location.pathname ===
                        item.href
                          ? palette.primary.main
                          : palette.text.primary,

                      backgroundColor:
                        location.pathname ===
                        item.href
                          ? "rgba(37, 99, 235, 0.08)"
                          : "transparent",

                      fontSize: "0.95rem",

                      fontWeight:
                        location.pathname ===
                        item.href
                          ? 700
                          : 600,

                      "&:hover": {
                        color:
                          palette.primary.main,

                        backgroundColor:
                          "rgba(37, 99, 235, 0.06)",
                      },
                    })}
                  >
                    {t(item.label)}
                  </Box>
                )}

                <Divider
                  sx={{
                    mx: 1,
                    my: 0.5,
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* Bottom Controls */}
        <Box
          sx={{
            p: 2,

            backgroundColor: "#FFFFFF",

            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={handleLanguageToggle}
            sx={{
              minHeight: 44,

              borderRadius: 999,

              borderColor: "divider",

              color: "text.primary",

              "&:hover": {
                borderColor: "primary.main",

                backgroundColor:
                  "rgba(37, 99, 235, 0.06)",
              },
            }}
          >
            {i18n.language === "hi"
              ? "English"
              : "हिन्दी"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MobileMenuDrawer;