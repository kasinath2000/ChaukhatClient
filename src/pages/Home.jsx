// // import React from "react";
// // import { Box, Button, Container, Grid, Typography } from "@mui/material";
// // import {
// //   ArrowForwardRounded,
// //   MenuBookRounded,
// //   NotificationsNoneRounded,
// //   AutoStoriesRounded,
// // } from "@mui/icons-material";
// // import { Link } from "react-router-dom";

// // const notices = [
// //   "चौखट हिंदी पत्रिका के नवीनतम अंक का प्रकाशन",
// //   "ई-पत्रिका अब ऑनलाइन पढ़ें",
// //   "साहित्य, विचार और संस्कृति से जुड़ी नवीन सामग्री उपलब्ध",
// // ];

// // const patrikas = [
// //   {
// //     id: 1,
// //     title: "चौखट — विशेषांक",
// //     image: "/default-placeholder.png",
// //   },
// //   {
// //     id: 2,
// //     title: "चौखट — साहित्य अंक",
// //     image: "/default-placeholder.png",
// //   },
// //   {
// //     id: 3,
// //     title: "चौखट — विचार अंक",
// //     image: "/default-placeholder.png",
// //   },
// // ];

// // const Home = () => {
// //   return (
// //     <Box
// //       component="main"
// //       sx={{
// //         backgroundColor: "background.default",
// //         minHeight: "100vh",
// //       }}
// //     >
// //       {/* Hero */}
// //       <Box
// //         sx={{
// //           position: "relative",
// //           overflow: "hidden",
// //           background:
// //             "linear-gradient(135deg, #3B060A 0%, #4D1115 55%, #260306 100%)",
// //           color: "#fff",
// //           py: { xs: 7, sm: 9, md: 12 },
// //         }}
// //       >
// //         {/* Decorative elements */}
// //         <Box
// //           sx={{
// //             position: "absolute",
// //             width: 280,
// //             height: 280,
// //             borderRadius: "50%",
// //             backgroundColor: "rgba(234,166,77,0.10)",
// //             top: -120,
// //             right: -80,
// //           }}
// //         />

// //         <Box
// //           sx={{
// //             position: "absolute",
// //             width: 180,
// //             height: 180,
// //             borderRadius: "50%",
// //             border: "1px solid rgba(250,213,154,0.18)",
// //             bottom: -80,
// //             left: "8%",
// //           }}
// //         />

// //         <Container maxWidth="lg" sx={{ position: "relative" }}>
// //           <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
// //             <Grid size={{ xs: 12, md: 7 }}>
// //               <Typography
// //                 sx={{
// //                   display: "inline-flex",
// //                   px: 1.5,
// //                   py: 0.7,
// //                   mb: 2.5,
// //                   borderRadius: 10,
// //                   backgroundColor: "rgba(234,166,77,0.14)",
// //                   border: "1px solid rgba(234,166,77,0.25)",
// //                   color: "#FAD59A",
// //                   fontSize: "0.78rem",
// //                   fontWeight: 700,
// //                   letterSpacing: "0.08em",
// //                 }}
// //               >
// //                 चौखट हिंदी पत्रिका
// //               </Typography>

// //               <Typography
// //                 component="h1"
// //                 sx={{
// //                   maxWidth: 700,
// //                   fontSize: {
// //                     xs: "2.3rem",
// //                     sm: "3.2rem",
// //                     md: "4.3rem",
// //                   },
// //                   lineHeight: 1.08,
// //                   fontWeight: 800,
// //                   letterSpacing: "-0.03em",
// //                 }}
// //               >
// //                 साहित्य, विचार और
// //                 <Box
// //                   component="span"
// //                   sx={{
// //                     display: "block",
// //                     color: "secondary.main",
// //                   }}
// //                 >
// //                   संस्कृति की नई चौखट
// //                 </Box>
// //               </Typography>

// //               <Typography
// //                 sx={{
// //                   maxWidth: 620,
// //                   mt: 2.5,
// //                   color: "rgba(255,255,255,0.72)",
// //                   fontSize: { xs: "0.98rem", md: "1.08rem" },
// //                   lineHeight: 1.8,
// //                 }}
// //               >
// //                 हिंदी साहित्य, रचनात्मक विचार और सामाजिक-सांस्कृतिक सरोकारों को
// //                 एक आधुनिक डिजिटल मंच पर प्रस्तुत करने का प्रयास।
// //               </Typography>

// //               <Box
// //                 sx={{
// //                   display: "flex",
// //                   flexWrap: "wrap",
// //                   gap: 1.5,
// //                   mt: 4,
// //                 }}
// //               >
// //                 <Button
// //                   component={Link}
// //                   to="/libery"
// //                   variant="contained"
// //                   color="secondary"
// //                   endIcon={<ArrowForwardRounded />}
// //                   sx={{
// //                     px: 2.5,
// //                     py: 1.2,
// //                   }}
// //                 >
// //                   ई-पत्रिका देखें
// //                 </Button>

// //                 <Button
// //                   component={Link}
// //                   to="/intro"
// //                   variant="outlined"
// //                   sx={{
// //                     px: 2.5,
// //                     py: 1.2,
// //                     color: "#fff",
// //                     borderColor: "rgba(255,255,255,0.3)",
// //                     "&:hover": {
// //                       borderColor: "#EAA64D",
// //                       backgroundColor: "rgba(234,166,77,0.08)",
// //                     },
// //                   }}
// //                 >
// //                   हमारे बारे में
// //                 </Button>
// //               </Box>
// //             </Grid>

// //             <Grid size={{ xs: 12, md: 5 }}>
// //               <Box
// //                 sx={{
// //                   position: "relative",
// //                   minHeight: { xs: 250, sm: 330, md: 390 },
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                 }}
// //               >
// //                 <Box
// //                   sx={{
// //                     width: { xs: 190, sm: 230, md: 270 },
// //                     height: { xs: 240, sm: 290, md: 350 },
// //                     borderRadius: 3,
// //                     overflow: "hidden",
// //                     backgroundColor: "#FFF8ED",
// //                     border: "6px solid rgba(250,213,154,0.25)",
// //                     boxShadow: "0 25px 60px rgba(0,0,0,0.28)",
// //                     transform: "rotate(3deg)",
// //                   }}
// //                 >
// //                   <Box
// //                     component="img"
// //                     src="/default-placeholder.png"
// //                     alt="चौखट ई-पत्रिका"
// //                     sx={{
// //                       width: "100%",
// //                       height: "100%",
// //                       objectFit: "cover",
// //                       display: "block",
// //                     }}
// //                   />
// //                 </Box>
// //               </Box>
// //             </Grid>
// //           </Grid>
// //         </Container>
// //       </Box>

// //       {/* Quick Features */}
// //       <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
// //         <Grid container spacing={2}>
// //           {[
// //             {
// //               icon: <MenuBookRounded />,
// //               title: "ई-पत्रिका",
// //               text: "चौखट के नवीनतम और पुराने अंक पढ़ें।",
// //               href: "/libery",
// //             },
// //             {
// //               icon: <NotificationsNoneRounded />,
// //               title: "मुख्य सूचनाएं",
// //               text: "चौखट से जुड़ी नवीनतम जानकारी प्राप्त करें।",
// //               href: "/newus",
// //             },
// //             {
// //               icon: <AutoStoriesRounded />,
// //               title: "पुस्तक संसार",
// //               text: "पुस्तकों और साहित्यिक सामग्री का संग्रह।",
// //               href: "/libery/books",
// //             },
// //           ].map((item) => (
// //             <Grid size={{ xs: 12, md: 4 }} key={item.title}>
// //               <Box
// //                 component={Link}
// //                 to={item.href}
// //                 sx={{
// //                   height: "100%",
// //                   display: "block",
// //                   p: { xs: 2.5, md: 3 },
// //                   textDecoration: "none",
// //                   borderRadius: 3,
// //                   backgroundColor: "#FFF8ED",
// //                   border: "1px solid rgba(59,6,10,0.09)",
// //                   transition: "all 0.25s ease",
// //                   "&:hover": {
// //                     transform: "translateY(-5px)",
// //                     borderColor: "rgba(234,166,77,0.55)",
// //                     boxShadow: "0 14px 35px rgba(59,6,10,0.08)",
// //                   },
// //                 }}
// //               >
// //                 <Box
// //                   sx={{
// //                     width: 46,
// //                     height: 46,
// //                     mb: 2,
// //                     display: "grid",
// //                     placeItems: "center",
// //                     borderRadius: 2,
// //                     backgroundColor: "rgba(234,166,77,0.16)",
// //                     color: "primary.main",
// //                   }}
// //                 >
// //                   {item.icon}
// //                 </Box>

// //                 <Typography
// //                   sx={{
// //                     color: "primary.main",
// //                     fontWeight: 700,
// //                     fontSize: "1.05rem",
// //                   }}
// //                 >
// //                   {item.title}
// //                 </Typography>

// //                 <Typography
// //                   sx={{
// //                     mt: 0.8,
// //                     color: "text.secondary",
// //                     fontSize: "0.88rem",
// //                     lineHeight: 1.7,
// //                   }}
// //                 >
// //                   {item.text}
// //                 </Typography>
// //               </Box>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Container>

// //       {/* Notices + Patrika */}
// //       <Box
// //         sx={{
// //           py: { xs: 6, md: 8 },
// //           backgroundColor: "#F1E8DC",
// //         }}
// //       >
// //         <Container maxWidth="lg">
// //           <Grid container spacing={3}>
// //             {/* Notices */}
// //             <Grid size={{ xs: 12, md: 5 }}>
// //               <Box
// //                 sx={{
// //                   height: "100%",
// //                   p: { xs: 2.5, md: 3 },
// //                   borderRadius: 3,
// //                   backgroundColor: "#FFF8ED",
// //                   border: "1px solid rgba(59,6,10,0.08)",
// //                 }}
// //               >
// //                 <Box
// //                   sx={{
// //                     display: "flex",
// //                     alignItems: "center",
// //                     gap: 1,
// //                     mb: 2.5,
// //                   }}
// //                 >
// //                   <NotificationsNoneRounded sx={{ color: "secondary.dark" }} />

// //                   <Typography
// //                     sx={{
// //                       color: "primary.main",
// //                       fontSize: "1.2rem",
// //                       fontWeight: 800,
// //                     }}
// //                   >
// //                     मुख्य सूचनाएं
// //                   </Typography>
// //                 </Box>

// //                 <Box>
// //                   {notices.map((notice, index) => (
// //                     <Box
// //                       key={notice}
// //                       sx={{
// //                         display: "flex",
// //                         gap: 1.5,
// //                         py: 1.5,
// //                         borderBottom:
// //                           index !== notices.length - 1 ? "1px solid" : "none",
// //                         borderColor: "divider",
// //                       }}
// //                     >
// //                       <Box
// //                         sx={{
// //                           mt: 0.9,
// //                           width: 7,
// //                           height: 7,
// //                           flexShrink: 0,
// //                           borderRadius: "50%",
// //                           backgroundColor: "secondary.main",
// //                         }}
// //                       />

// //                       <Typography
// //                         sx={{
// //                           color: "text.secondary",
// //                           fontSize: "0.88rem",
// //                           lineHeight: 1.6,
// //                         }}
// //                       >
// //                         {notice}
// //                       </Typography>
// //                     </Box>
// //                   ))}
// //                 </Box>

// //                 <Button
// //                   component={Link}
// //                   to="/newus"
// //                   endIcon={<ArrowForwardRounded />}
// //                   sx={{ mt: 2 }}
// //                 >
// //                   सभी सूचनाएं
// //                 </Button>
// //               </Box>
// //             </Grid>

// //             {/* Patrika */}
// //             <Grid size={{ xs: 12, md: 7 }}>
// //               <Box
// //                 sx={{
// //                   height: "100%",
// //                   p: { xs: 2.5, md: 3 },
// //                   borderRadius: 3,
// //                   backgroundColor: "#FFF8ED",
// //                   border: "1px solid rgba(59,6,10,0.08)",
// //                 }}
// //               >
// //                 <Box
// //                   sx={{
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "space-between",
// //                     gap: 2,
// //                     mb: 2.5,
// //                   }}
// //                 >
// //                   <Box>
// //                     <Typography
// //                       sx={{
// //                         color: "primary.main",
// //                         fontSize: "1.2rem",
// //                         fontWeight: 800,
// //                       }}
// //                     >
// //                       नवीनतम पत्रिकाएं
// //                     </Typography>

// //                     <Typography
// //                       sx={{
// //                         mt: 0.4,
// //                         color: "text.secondary",
// //                         fontSize: "0.82rem",
// //                       }}
// //                     >
// //                       हमारे नवीनतम अंकों पर एक नज़र
// //                     </Typography>
// //                   </Box>

// //                   <AutoStoriesRounded
// //                     sx={{
// //                       color: "secondary.main",
// //                       fontSize: 32,
// //                     }}
// //                   />
// //                 </Box>

// //                 <Box
// //                   sx={{
// //                     display: "flex",
// //                     gap: 2,
// //                     overflowX: "auto",
// //                     pb: 1,
// //                     "&::-webkit-scrollbar": {
// //                       height: 5,
// //                     },
// //                   }}
// //                 >
// //                   {patrikas.map((item) => (
// //                     <Box
// //                       key={item.id}
// //                       sx={{
// //                         width: 140,
// //                         flexShrink: 0,
// //                       }}
// //                     >
// //                       <Box
// //                         component="img"
// //                         src={item.image}
// //                         alt={item.title}
// //                         sx={{
// //                           width: "100%",
// //                           height: 190,
// //                           display: "block",
// //                           objectFit: "cover",
// //                           borderRadius: 2,
// //                           border: "1px solid rgba(59,6,10,0.1)",
// //                           backgroundColor: "#F3E8D5",
// //                         }}
// //                       />

// //                       <Typography
// //                         sx={{
// //                           mt: 1,
// //                           color: "primary.main",
// //                           fontSize: "0.78rem",
// //                           fontWeight: 700,
// //                           lineHeight: 1.4,
// //                         }}
// //                       >
// //                         {item.title}
// //                       </Typography>
// //                     </Box>
// //                   ))}
// //                 </Box>
// //               </Box>
// //             </Grid>
// //           </Grid>
// //         </Container>
// //       </Box>

// //       {/* Bottom CTA */}
// //       <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
// //         <Box
// //           sx={{
// //             position: "relative",
// //             overflow: "hidden",
// //             p: { xs: 3, md: 5 },
// //             borderRadius: 4,
// //             backgroundColor: "primary.main",
// //             color: "#fff",
// //           }}
// //         >
// //           <Box
// //             sx={{
// //               position: "absolute",
// //               width: 180,
// //               height: 180,
// //               borderRadius: "50%",
// //               backgroundColor: "rgba(234,166,77,0.12)",
// //               right: -50,
// //               top: -70,
// //             }}
// //           />

// //           <Typography
// //             sx={{
// //               position: "relative",
// //               fontSize: { xs: "1.5rem", md: "2rem" },
// //               fontWeight: 800,
// //             }}
// //           >
// //             चौखट से जुड़े रहिए
// //           </Typography>

// //           <Typography
// //             sx={{
// //               position: "relative",
// //               maxWidth: 650,
// //               mt: 1,
// //               color: "rgba(255,255,255,0.7)",
// //               lineHeight: 1.7,
// //             }}
// //           >
// //             साहित्य और विचार की इस यात्रा में हमारे साथ जुड़ें और नवीनतम सामग्री
// //             से अपडेट रहें।
// //           </Typography>

// //           <Button
// //             component={Link}
// //             to="/contact-us"
// //             variant="contained"
// //             color="secondary"
// //             endIcon={<ArrowForwardRounded />}
// //             sx={{
// //               position: "relative",
// //               mt: 3,
// //             }}
// //           >
// //             संपर्क करें
// //           </Button>
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default Home;


import React from "react";
import { Box, Container } from "@mui/material";

import WelcomeBanner from "../components/Home/WelcomeBanner";
import LeftEditorsSection from "../components/Home/LeftEditorsSection";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import PatrikaSection from "../components/PatrikaSection/PatrikaSection";
import NoticeScroller from "../components/Notice/NoticeScroller";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const editors = [
  {
    id: 1,
    type: "chief",
    name: "नीरज चिलवार",
    role: "प्रधान संपादक",
    image: "https://i.pravatar.cc/500?img=12",
  },
  {
    id: 2,
    type: "editor",
    name: "डॉ. विजय सिंह",
    role: "सहायक संपादक",
    image: "https://i.pravatar.cc/500?img=47",
  },
];

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/seed/chaukhat1/1400/650",
    title: "साहित्य की नई चौखट",
    description:
      "शब्दों, विचारों और संस्कृति की दुनिया से जुड़ने का एक नया माध्यम।",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/chaukhat2/1400/650",
    title: "साहित्य, समाज और संस्कृति",
    description: "हिंदी साहित्य और सामाजिक सरोकारों को एक साथ लाने का प्रयास।",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/chaukhat3/1400/650",
    title: "विचारों का अपना मंच",
    description: "रचनात्मक विचारों और विविध दृष्टिकोणों के लिए एक खुला मंच।",
  },
];

const patrikas = [
  {
    id: 1,
    title: "चौखट — सितंबर 2026",
    image: "https://picsum.photos/seed/patrika01/400/560",
    date: "सितंबर 2026",
  },
  {
    id: 2,
    title: "चौखट — अगस्त 2026",
    image: "https://picsum.photos/seed/patrika02/400/560",
    date: "अगस्त 2026",
  },
  {
    id: 3,
    title: "चौखट — जुलाई 2026",
    image: "https://picsum.photos/seed/patrika03/400/560",
    date: "जुलाई 2026",
  },
  {
    id: 4,
    title: "चौखट — जून 2026",
    image: "https://picsum.photos/seed/patrika04/400/560",
    date: "जून 2026",
  },
  {
    id: 5,
    title: "चौखट — मई 2026",
    image: "https://picsum.photos/seed/patrika05/400/560",
    date: "मई 2026",
  },
  {
    id: 6,
    title: "चौखट — अप्रैल 2026",
    image: "https://picsum.photos/seed/patrika06/400/560",
    date: "अप्रैल 2026",
  },
  {
    id: 7,
    title: "चौखट — मार्च 2026",
    image: "https://picsum.photos/seed/patrika07/400/560",
    date: "मार्च 2026",
  },
  {
    id: 8,
    title: "चौखट — फरवरी 2026",
    image: "https://picsum.photos/seed/patrika08/400/560",
    date: "फरवरी 2026",
  },
  {
    id: 9,
    title: "चौखट — जनवरी 2026",
    image: "https://picsum.photos/seed/patrika09/400/560",
    date: "जनवरी 2026",
  },
  {
    id: 10,
    title: "चौखट — दिसंबर 2025",
    image: "https://picsum.photos/seed/patrika10/400/560",
    date: "दिसंबर 2025",
  },
  {
    id: 11,
    title: "चौखट — नवंबर 2025",
    image: "https://picsum.photos/seed/patrika11/400/560",
    date: "नवंबर 2025",
  },
  {
    id: 12,
    title: "चौखट — अक्टूबर 2025",
    image: "https://picsum.photos/seed/patrika12/400/560",
    date: "अक्टूबर 2025",
  },
];

const notices = [
  {
    id: 1,
    title: "चौखट पत्रिका का नया अंक प्रकाशित हो गया है।",
    link: "https://example.com/issue",
  },
  {
    id: 2,
    title: "साहित्यिक कार्यक्रम के लिए पंजीकरण प्रारंभ।",
    link: "",
  },
  {
    id: 3,
    title: "नई पुस्तक समीक्षा वेबसाइट पर उपलब्ध है।",
    link: "/libery/book-reviews",
  },
];

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <WelcomeBanner />

      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "250px minmax(0, 1fr) 280px",
            },
            gap: { xs: 2.5, md: 3 },
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              order: {
                xs: 2,
                lg: 1,
              },
            }}
          >
            <LeftEditorsSection editors={editors} />
          </Box>

          {/* CENTER */}
          <Box
            sx={{
              minWidth: 0,
              order: {
                xs: 1,
                lg: 2,
              },
            }}
          >
            <HeroSlider slides={slides} />

            <PatrikaSection patrikaItems={patrikas} />
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              order: {
                xs: 3,
                lg: 3,
              },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <SocialLinks />

            <NoticeScroller notices={notices} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
