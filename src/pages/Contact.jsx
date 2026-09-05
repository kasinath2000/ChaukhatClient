import React, { useState } from "react";
import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";

import {
  ContactMailRounded,
  EmailRounded,
  PhoneRounded,
  LocationOnRounded,
  SendRounded,
  AccessTimeRounded,
  ArrowForwardRounded,
  Instagram,
  Facebook,
  YouTube,
} from "@mui/icons-material";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOpen(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactItems = [
    {
      icon: <EmailRounded />,
      title: "ईमेल करें",
      value: "hello@chaukhatt.com",
      description: "हम आपको जल्द जवाब देंगे",
      color: "#EAA64D",
    },
    {
      icon: <PhoneRounded />,
      title: "फोन करें",
      value: "+91 98765 43210",
      description: "सोमवार से शनिवार",
      color: "#8B3A3A",
    },
    {
      icon: <LocationOnRounded />,
      title: "हमारा पता",
      value: "कोलकाता, पश्चिम बंगाल",
      description: "भारत",
      color: "#4D7C6F",
    },
    {
      icon: <AccessTimeRounded />,
      title: "समय",
      value: "10:00 AM – 6:00 PM",
      description: "सोमवार – शनिवार",
      color: "#6C63A8",
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        {/* Hero */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            mb: { xs: 3, md: 5 },
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            background:
              "linear-gradient(135deg, #3B060A 0%, #64151A 55%, #7A2528 100%)",
            color: "#fff",
          }}
        >
          {/* Decorative circles */}
          <Box
            sx={{
              position: "absolute",
              width: 220,
              height: 220,
              borderRadius: "50%",
              right: -70,
              top: -100,
              backgroundColor: "rgba(234,166,77,0.16)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: 130,
              height: 130,
              borderRadius: "50%",
              right: 90,
              bottom: -80,
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          />

          <Box
            sx={{
              position: "relative",
              maxWidth: 700,
            }}
          >
            <Box
              sx={{
                width: 54,
                height: 54,
                mb: 2,
                display: "grid",
                placeItems: "center",
                borderRadius: 2.5,
                color: "#EAA64D",
                backgroundColor: "rgba(234,166,77,0.14)",
              }}
            >
              <ContactMailRounded fontSize="large" />
            </Box>

            <Typography
              sx={{
                mb: 1,
                fontSize: {
                  xs: "1.8rem",
                  md: "2.5rem",
                },
                fontWeight: 900,
                lineHeight: 1.2,
              }}
            >
              हमसे जुड़िए
            </Typography>

            <Typography
              sx={{
                maxWidth: 600,
                color: "rgba(255,255,255,0.78)",
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },
                lineHeight: 1.8,
              }}
            >
              आपके विचार, सुझाव और सवाल हमारे लिए महत्वपूर्ण हैं। चौखट से जुड़ी
              किसी भी जानकारी के लिए हमसे बेझिझक संपर्क करें।
            </Typography>
          </Box>
        </Box>

        {/* Contact Cards */}
        <Grid container spacing={2} sx={{ mb: { xs: 3, md: 5 } }}>
          {contactItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: 2.5,
                  borderRadius: 4,
                  backgroundColor: "#FFF8ED",
                  border: "1px solid rgba(59,6,10,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 35px rgba(59,6,10,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    mb: 2,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 2.5,
                    color: item.color,
                    backgroundColor: `${item.color}18`,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    mb: 0.5,
                  }}
                >
                  {item.value}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.72rem",
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Main Section */}
        <Grid container spacing={3}>
          {/* Left Content */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 2.5, md: 4 },
                borderRadius: 4,
                backgroundColor: "#FFF8ED",
                border: "1px solid rgba(59,6,10,0.08)",
              }}
            >
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "1.45rem",
                  fontWeight: 900,
                  mb: 1,
                }}
              >
                बातचीत शुरू करें
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                कोई सुझाव देना हो, किसी विषय पर बात करनी हो या चौखट के बारे में
                कुछ पूछना हो — हमें संदेश भेजें।
              </Typography>

              {/* Highlight */}
              <Box
                sx={{
                  p: 2,
                  mb: 3,
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg, rgba(234,166,77,0.15), rgba(234,166,77,0.04))",
                  border: "1px solid rgba(234,166,77,0.25)",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    mb: 0.5,
                  }}
                >
                  आपका संदेश हमारे लिए मायने रखता है।
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    lineHeight: 1.7,
                  }}
                >
                  हम हर संदेश को ध्यान से पढ़ते हैं और संभव होने पर व्यक्तिगत
                  रूप से जवाब देते हैं।
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  mb: 1,
                }}
              >
                सोशल मीडिया पर जुड़ें
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                {[Instagram, Facebook, YouTube].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      width: 40,
                      height: 40,
                      color: "primary.main",
                      backgroundColor: "rgba(59,6,10,0.06)",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Form */}
          <Grid item xs={12} md={7}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 4 },
                borderRadius: 4,
                backgroundColor: "#FFF8ED",
                border: "1px solid rgba(59,6,10,0.08)",
              }}
            >
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "1.45rem",
                  fontWeight: 900,
                  mb: 0.5,
                }}
              >
                संदेश भेजें
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "0.78rem",
                  mb: 3,
                }}
              >
                नीचे दिए गए फॉर्म को भरें।
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    name="name"
                    label="आपका नाम"
                    value={form.name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    name="email"
                    label="ईमेल पता"
                    value={form.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    name="subject"
                    label="विषय"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={5}
                    name="message"
                    label="आपका संदेश"
                    value={form.message}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendRounded />}
                    sx={{
                      px: 3,
                      py: 1.3,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontWeight: 800,
                      boxShadow: "none",
                      "&:hover": {
                        boxShadow: "0 8px 20px rgba(59,6,10,0.18)",
                      },
                    }}
                  >
                    संदेश भेजें
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: 3,
            p: { xs: 2.5, md: 3 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
            borderRadius: 4,
            backgroundColor: "rgba(59,6,10,0.04)",
            border: "1px solid rgba(59,6,10,0.06)",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 800,
                fontSize: "0.95rem",
              }}
            >
              कुछ और जानना चाहते हैं?
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "0.75rem",
                mt: 0.3,
              }}
            >
              चौखट की दुनिया को और करीब से जानिए।
            </Typography>
          </Box>

          <Button
          component={Link}
      to="/founder"
            variant="text"
            endIcon={<ArrowForwardRounded />}
            sx={{
              color: "primary.main",
              fontWeight: 800,
              textTransform: "none",
            }}
          >
            हमारे बारे में
          </Button>
        </Box>
      </Container>

      {/* Success Message */}
      <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ borderRadius: 2 }}
        >
          आपका संदेश सफलतापूर्वक भेज दिया गया।
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
