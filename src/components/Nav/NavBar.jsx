import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { Box, IconButton, Typography } from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { NavLink, useLocation } from "react-router-dom";

import navItems from "../../data/navItems.json";
import logo from "../../assets/logo.png";

import HoverPopover from "../UI/HoverPopover";
import MobileMenuDrawer from "../UI/MobileMenuDrawer";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [language, setLanguage] = useState("hi");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang") || "hi";

    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }

    setLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = language === "hi" ? "en" : "hi";

    i18n.changeLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
    setLanguage(newLanguage);
  };

  const isSubmenuActive = (submenu) =>
    submenu?.some((item) => location.pathname === item.href);

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          width: "100%",
          px: {
            xs: 2,
            md: 4,
            lg: 6,
          },
          py: 1.25,
          backgroundColor: "rgba(255, 248, 237, 0.94)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid",
          borderColor: "divider",
          boxShadow: "0 4px 20px rgba(59, 6, 10, 0.08)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1600,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: {
              xs: 58,
              md: 68,
            },
          }}
        >
          {/* Logo */}
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.25,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Chaukhat Logo"
                sx={{
                  width: {
                    xs: 42,
                    md: 48,
                  },
                  height: {
                    xs: 42,
                    md: 48,
                  },

                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid",
                  borderColor: "secondary.main",
                  boxShadow: "0 4px 12px rgba(59, 6, 10, 0.15)",
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: "1.7rem",
                    sm: "2rem",
                    md: "2.2rem",
                  },
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "primary.main",
                  letterSpacing: "-0.5px",
                }}
              >
                चौखट
              </Typography>
            </Box>
          </NavLink>

          {/* Desktop Navigation */}
          <Box
            component="ul"
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: {
                md: 2,
                lg: 2.5,
              },
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {navItems.map((item) => (
              <Box
                component="li"
                key={item.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.submenu ? (
                  <HoverPopover
                    trigger={
                      <Box
                        component="span"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.25,
                          px: 0.75,
                          py: 0.75,
                          cursor: "pointer",
                          color: isSubmenuActive(item.submenu)
                            ? "primary.main"
                            : "text.primary",
                          fontWeight: isSubmenuActive(item.submenu) ? 700 : 500,
                          borderRadius: 1,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "primary.main",
                            backgroundColor: "rgba(234, 166, 77, 0.10)",
                          },
                        }}
                      >
                        {t(item.label)}
                        <KeyboardArrowDownRoundedIcon
                          sx={{
                            fontSize: 19,
                            color: "secondary.dark",
                          }}
                        />
                      </Box>
                    }
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        minWidth: 210,
                      }}
                    >
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.label}
                          to={subItem.href}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          {({ isActive }) => (
                            <Box
                              sx={{
                                px: 1.5,
                                py: 1,
                                borderRadius: 1.5,
                                color: isActive
                                  ? "primary.main"
                                  : "text.primary",
                                fontWeight: isActive ? 700 : 500,
                                backgroundColor: isActive
                                  ? "rgba(59, 6, 10, 0.06)"
                                  : "transparent",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                  color: "primary.main",
                                  backgroundColor: "rgba(234, 166, 77, 0.12)",
                                },
                              }}
                            >
                              {t(subItem.label)}
                            </Box>
                          )}
                        </NavLink>
                      ))}
                    </Box>
                  </HoverPopover>
                ) : (
                  <NavLink
                    to={item.href}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {({ isActive }) => (
                      <Box
                        component="span"
                        sx={{
                          display: "inline-flex",
                          px: 0.75,
                          py: 0.75,
                          borderRadius: 1,
                          color: isActive ? "primary.main" : "text.primary",
                          fontWeight: isActive ? 700 : 500,
                          position: "relative",
                          transition: "all 0.2s ease",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 8,
                            right: 8,
                            bottom: 2,
                            height: 2,
                            borderRadius: 2,
                            backgroundColor: "secondary.main",
                            transform: isActive ? "scaleX(1)" : "scaleX(0)",
                            transformOrigin: "center",
                            transition: "transform 0.2s ease",
                          },

                          "&:hover": {
                            color: "primary.main",
                            backgroundColor: "rgba(234, 166, 77, 0.10)",
                          },
                          "&:hover::after": {
                            transform: "scaleX(1)",
                          },
                        }}
                      >
                        {t(item.label)}
                      </Box>
                    )}
                  </NavLink>
                )}
              </Box>
            ))}
          </Box>

          {/* Right Controls */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              ml: 2,
            }}
          >
            {/* Desktop Language */}
            <Box
              component="button"
              onClick={toggleLanguage}
              sx={{
                display: {
                  xs: "none",
                  md: "inline-flex",
                },
                alignItems: "center",
                justifyContent: "center",
                px: 1.5,
                py: 0.75,
                border: "1px solid",
                borderColor: "secondary.main",
                borderRadius: 20,
                backgroundColor: "rgba(234, 166, 77, 0.08)",
                color: "primary.main",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "primary.contrastText",
                },
              }}
            >
              {language === "hi" ? "हिन्दी" : "English"}
            </Box>

            {/* Mobile Menu */}
            <IconButton
              onClick={() => setDrawerOpen((prev) => !prev)}
              aria-label="menu"
              sx={{
                display: {
                  xs: "inline-flex",
                  md: "none",
                },
                color: "primary.main",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "rgba(234, 166, 77, 0.08)",
                "&:hover": {
                  backgroundColor: "rgba(234, 166, 77, 0.16)",
                },
              }}
            >
              {drawerOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Mobile Menu */}
      <MobileMenuDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={navItems}
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </>
  );
};

export default Navbar;
