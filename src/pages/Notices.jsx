import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Container, Typography } from "@mui/material";
import {
  ArrowBackRounded,
  CalendarMonthRounded,
  NotificationsNoneRounded,
  ArrowForwardRounded,
} from "@mui/icons-material";

const notices = [
  {
    id: 1,
    title: "चौखट हिंदी पत्रिका का नवीनतम अंक उपलब्ध",
    description:
      "चौखट हिंदी पत्रिका का नवीनतम अंक अब ऑनलाइन पढ़ने के लिए उपलब्ध है।",
    date: "03 सितंबर 2026",
    link: "www.example,com",
  },
  {
    id: 2,
    title: "साहित्यिक सामग्री का नया प्रकाशन",
    description:
      "साहित्य, समाज और संस्कृति से जुड़ी नई रचनाएं वेबसाइट पर प्रकाशित की गई हैं।",
    date: "01 सितंबर 2026",
    link: "",
  },
  {
    id: 3,
    title: "ई-पत्रिका के नवीनतम अंक को पढ़ें",
    description:
      "चौखट के नवीनतम ई-पत्रिका अंक को वेबसाइट के पत्रिका अनुभाग से पढ़ा जा सकता है।",
    date: "28 अगस्त 2026",
    link: "/libery",
  },
  {
    id: 4,
    title: "रचनाकारों से रचनाएं आमंत्रित",
    description: "साहित्यिक रचनाकारों से मौलिक रचनाएं आमंत्रित की जा रही हैं।",
    date: "25 अगस्त 2026",
    link: "",
  },
  {
    id: 5,
    title: "चौखट परिवार में नए सदस्य",
    description: "चौखट के साहित्यिक परिवार से जुड़े नए सदस्यों का स्वागत है।",
    date: "20 अगस्त 2026",
    link: "",
  },
  {
    id: 6,
    title: "नई साहित्यिक सामग्री शीघ्र प्रकाशित होगी",
    description:
      "आने वाले दिनों में साहित्य और संस्कृति से जुड़ी नई सामग्री प्रकाशित की जाएगी।",
    date: "18 अगस्त 2026",
    link: "",
  },
  {
    id: 7,
    title: "विशेष साहित्यिक अंक की तैयारी",
    description:
      "चौखट के आगामी विशेष अंक के लिए सामग्री संकलन का कार्य जारी है।",
    date: "15 अगस्त 2026",
    link: "",
  },
  {
    id: 8,
    title: "वेबसाइट पर नए अनुभाग जोड़े गए",
    description:
      "पाठकों के बेहतर अनुभव के लिए वेबसाइट पर नए साहित्यिक अनुभाग जोड़े गए हैं।",
    date: "12 अगस्त 2026",
    link: "",
  },
];

const Notices = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        py: { xs: 3, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 2,
                  color: "primary.main",
                  backgroundColor: "rgba(234,166,77,0.15)",
                  flexShrink: 0,
                }}
              >
                <NotificationsNoneRounded />
              </Box>

              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: {
                    xs: "1.35rem",
                    md: "1.7rem",
                  },
                  fontWeight: 800,
                }}
              >
                सभी सूचनाएं
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 1,
                color: "text.secondary",
                fontSize: "0.82rem",
              }}
            >
              चौखट से जुड़ी नवीनतम जानकारी और महत्वपूर्ण सूचनाएं
            </Typography>
          </Box>

          {/* Back Button */}
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackRounded />}
            onClick={() => navigate(-1)}
            sx={{
              fontSize: "0.78rem",
              flexShrink: 0,
            }}
          >
            वापस जाएं
          </Button>
        </Box>

        {/* Notice List */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          {notices.map((notice, index) => {
            const hasLink = Boolean(notice.link);

            const isExternalLink =
              hasLink && /^(https?:\/\/|mailto:|tel:)/i.test(notice.link);

            return (
              <Box
                key={notice.id}
                sx={{
                  p: {
                    xs: 2,
                    md: 2.5,
                  },
                  display: "flex",
                  gap: 2,
                  borderRadius: 3,
                  backgroundColor: "#FFF8ED",
                  border: "1px solid rgba(59,6,10,0.09)",
                  transition: "all 0.25s ease",

                  "&:hover": {
                    transform: "translateX(4px)",
                    borderColor: "rgba(234,166,77,0.55)",
                    boxShadow: "0 10px 25px rgba(59,6,10,0.06)",
                  },
                }}
              >
                {/* Number */}
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 2,
                    backgroundColor: "rgba(234,166,77,0.14)",
                    color: "primary.main",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  {/* Title */}
                  {hasLink ? (
                    isExternalLink ? (
                      <Typography
                        component="a"
                        href={notice.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "primary.main",
                          fontSize: {
                            xs: "0.9rem",
                            md: "1rem",
                          },
                          fontWeight: 800,
                          lineHeight: 1.5,
                          textDecoration: "none",

                          "&:hover": {
                            color: "secondary.dark",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {notice.title}

                        <ArrowForwardRounded
                          sx={{
                            fontSize: 16,
                          }}
                        />
                      </Typography>
                    ) : (
                      <Typography
                        component={Link}
                        to={notice.link}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "primary.main",
                          fontSize: {
                            xs: "0.9rem",
                            md: "1rem",
                          },
                          fontWeight: 800,
                          lineHeight: 1.5,
                          textDecoration: "none",

                          "&:hover": {
                            color: "secondary.dark",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {notice.title}

                        <ArrowForwardRounded
                          sx={{
                            fontSize: 16,
                          }}
                        />
                      </Typography>
                    )
                  ) : (
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontSize: {
                          xs: "0.9rem",
                          md: "1rem",
                        },
                        fontWeight: 800,
                        lineHeight: 1.5,
                      }}
                    >
                      {notice.title}
                    </Typography>
                  )}

                  {/* Description */}
                  <Typography
                    sx={{
                      mt: 0.7,
                      color: "text.secondary",
                      fontSize: "0.78rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {notice.description}
                  </Typography>

                  {/* Date */}
                  <Box
                    sx={{
                      mt: 1.2,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.6,
                    }}
                  >
                    <CalendarMonthRounded
                      sx={{
                        fontSize: 15,
                        color: "secondary.dark",
                      }}
                    />

                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.68rem",
                      }}
                    >
                      {notice.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Notices;
