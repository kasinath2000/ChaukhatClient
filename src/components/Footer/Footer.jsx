
import React from "react";

import {
  Box,
  Typography,
  Divider,
  IconButton,
  Link as MuiLink,
} from "@mui/material";

import {
  NavLink,
  Link as RouterLink,
} from "react-router-dom";

import { useTranslation } from "react-i18next";

import navItems from "../../data/navItems.json";
import logo from "../../assets/logo.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
    link:
      "https://chat.whatsapp.com/GzuDwn1TPbdBW6wM5NnmMu",
  },
  {
    name: "Telegram",
    icon: <TelegramIcon />,
    link: "https://t.me/Chaukhat_25",
  },
  {
    name: "Twitter",
    icon: <XIcon />,
    link: "https://x.com/chaukhat_25",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    link:
      "https://www.facebook.com/profile.php?id=100066637445017",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
    link:
      "https://youtube.com/@thehindisansar?si=D7N6lmZoP4anXy6Q",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    link:
      "https://www.instagram.com/chaukhat_25/",
  },
  {
    name: "Email",
    icon: <EmailIcon />,
    link:
      "mailto:chaukhathindipatrika@gmail.com",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,

        backgroundColor: "primary.main",
        color: "#FFF8ED",
      }}
    >
      {/* Main Footer */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1600,
          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 7,
          },

          py: {
            xs: 4,
            md: 6,
          },

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1.2fr 1fr 1fr",
          },

          gap: {
            xs: 4,
            md: 6,
          },
        }}
      >
        {/* Brand */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Chaukhat Logo"
              sx={{
                width: 48,
                height: 48,

                borderRadius: "50%",
                objectFit: "cover",

                border: "2px solid",
                borderColor: "secondary.main",
              }}
            />

            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "secondary.light",
              }}
            >
              चौखट
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              maxWidth: 380,
              lineHeight: 1.8,
              color: "rgba(255,248,237,0.78)",
            }}
          >
            संस्कृति, रचनात्मकता और साहित्य को
            जोड़ने वाला एक मंच।
          </Typography>

          
            
        </Box>

        {/* Useful Links */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "secondary.light",
            }}
          >
            Useful Links
          </Typography>

          <Divider
            sx={{
              width: 55,
              my: 1.5,

              borderColor: "secondary.main",
              borderBottomWidth: 2,
            }}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
              },
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <RouterLink
                key={item.label}
                to={item.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    display: "block",

                    fontSize: 14,

                    color:
                      "rgba(255,248,237,0.78)",

                    transition: "color 0.2s ease",

                    "&:hover": {
                      color: "secondary.light",
                    },
                  }}
                >
                  {t(item.label)}
                </Typography>
              </RouterLink>
            ))}
          </Box>
        </Box>

        {/* Social */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "secondary.light",
            }}
          >
            Follow Us
          </Typography>

          <Divider
            sx={{
              width: 55,
              my: 1.5,

              borderColor: "secondary.main",
              borderBottomWidth: 2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,

              justifyContent: {
                xs: "flex-start",
                md: "flex-start",
              },
            }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.name}
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                sx={{
                  width: 42,
                  height: 42,

                  color: "secondary.light",

                  border: "1px solid",
                  borderColor:
                    "rgba(234,166,77,0.35)",

                  transition:
                    "all 0.2s ease",

                  "&:hover": {
                    color: "primary.main",
                    backgroundColor:
                      "secondary.main",

                    transform:
                      "translateY(-3px)",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop:
            "1px solid rgba(255,248,237,0.15)",

          px: {
            xs: 2,
            md: 5,
          },

          py: 2,

          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },

          alignItems: "center",
          justifyContent: "space-between",

          gap: 1.5,

          textAlign: "center",
        }}
      >
        {/* Policies */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <RouterLink
            to="/privacy-policy"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: 13,
                color:
                  "rgba(255,248,237,0.75)",
                "&:hover": {
                  color: "secondary.light",
                },
              }}
            >
              Privacy Policy
            </Typography>
          </RouterLink>

          <RouterLink
            to="/copyright-policy"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: 13,
                color:
                  "rgba(255,248,237,0.75)",
                "&:hover": {
                  color: "secondary.light",
                },
              }}
            >
              Copyright Policy
            </Typography>
          </RouterLink>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            fontSize: 13,
            color:
              "rgba(255,248,237,0.65)",
          }}
        >
          © {new Date().getFullYear()} Chaukhat.
          All rights reserved.
        </Typography>

        {/* Developer */}
        <MuiLink
          href="https://personal-portfolio-pi-olive.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            fontSize: 13,
            color:
              "rgba(255,248,237,0.65)",

            transition: "color 0.2s ease",

            "&:hover": {
              color: "secondary.light",
            },
          }}
        >
          Designed & Developed by Kasinath Mandal
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;
