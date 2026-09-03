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

// import React from "react";
// import { Box, Button, Container, Typography } from "@mui/material";
// import {
//   ArrowForwardRounded,
//   AutoStoriesRounded,
//   GroupsRounded,
//   MenuBookRounded,
//   NotificationsNoneRounded,
// } from "@mui/icons-material";
// import { Link } from "react-router-dom";

// const dummyEditors = [
//   {
//     id: 1,
//     type: "chief",
//     name: "नीरज चिलवार",
//     role: "प्रधान संपादक",
//     image: "https://i.pravatar.cc/500?img=12",
//   },
//   {
//     id: 2,
//     type: "editor",
//     name: "डॉ. विजय सिंह",
//     role: "सहायक संपादक",
//     image: "https://i.pravatar.cc/500?img=47",
//   },
// ];

// const dummySlides = [
//   {
//     id: 1,
//     image: "https://picsum.photos/seed/chaukhat1/1200/600",
//     title: "साहित्य, समाज और संस्कृति",
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/seed/chaukhat2/1200/600",
//     title: "शब्दों से विचारों तक",
//   },
//   {
//     id: 3,
//     image: "https://picsum.photos/seed/chaukhat3/1200/600",
//     title: "हिंदी साहित्य की नई चौखट",
//   },
// ];

// const dummyPatrikas = [
//   {
//     id: 1,
//     title: "पर्यावरण विशेषांक",
//     image: "https://picsum.photos/seed/patrika1/400/560",
//   },
//   {
//     id: 2,
//     title: "वर्ष - 2, अंक 1",
//     image: "https://picsum.photos/seed/patrika2/400/560",
//   },
//   {
//     id: 3,
//     title: "तीसरा अंक",
//     image: "https://picsum.photos/seed/patrika3/400/560",
//   },
//   {
//     id: 4,
//     title: "दूसरा अंक",
//     image: "https://picsum.photos/seed/patrika4/400/560",
//   },
// ];

// const dummyNotices = [
//   "चौखट हिंदी पत्रिका का नवीनतम अंक अब उपलब्ध है।",
//   "साहित्य एवं संस्कृति से जुड़ी नई सामग्री प्रकाशित की गई है।",
//   "ई-पत्रिका के नवीनतम अंक को ऑनलाइन पढ़ें।",
//   "रचनाकारों के लिए नई सामग्री आमंत्रित की जा रही है।",
// ];

// const familyLinks = [
//   { label: "संस्थापक", href: "/founder" },
//   { label: "संरक्षक", href: "/patron" },
//   { label: "परामर्श मंडल", href: "/advisory-board" },
//   { label: "संपादक मण्डल", href: "/editorial-board" },
//   { label: "विशेषज्ञ समिति", href: "/expert-committee" },
//   { label: "सक्रिय सहयोगी सदस्य", href: "/active-members" },
//   { label: "तकनीकी टीम", href: "/technical-team" },
// ];

// const socialLinks = [
//   { label: "Facebook", icon: "f" },
//   { label: "Instagram", icon: "◎" },
//   { label: "X", icon: "𝕏" },
//   { label: "YouTube", icon: "▶" },
//   { label: "Telegram", icon: "➤" },
//   { label: "WhatsApp", icon: "◉" },
// ];

// const Home = () => {
//   return (
//     <Box
//       component="main"
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "background.default",
//       }}
//     >
//       {/* =====================================================
//           INTRO STRIP
//       ====================================================== */}
//       <Box
//         sx={{
//           backgroundColor: "#FFF8ED",
//           borderBottom: "1px solid",
//           borderColor: "divider",
//         }}
//       >
//         <Container maxWidth="xl">
//           <Box
//             sx={{
//               minHeight: { xs: 110, md: 88 },
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 md: "1fr auto 1fr",
//               },
//               alignItems: "center",
//               gap: 2,
//               py: 2,
//             }}
//           >
//             <Box>
//               <Typography
//                 sx={{
//                   color: "primary.main",
//                   fontSize: "0.78rem",
//                   fontWeight: 700,
//                   textAlign: {
//                     xs: "center",
//                     md: "left",
//                   },
//                 }}
//               >
//                 साहित्यिक सामाजिक बहुभाषी ऑनलाइन ई-पत्रिका
//               </Typography>

//               <Typography
//                 sx={{
//                   mt: 0.4,
//                   color: "text.secondary",
//                   fontSize: "0.7rem",
//                   textAlign: {
//                     xs: "center",
//                     md: "left",
//                   },
//                 }}
//               >
//                 साहित्य • समाज • कला • संस्कृति
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 px: { md: 4 },
//                 textAlign: "center",
//                 borderLeft: {
//                   xs: "none",
//                   md: "1px solid",
//                 },
//                 borderRight: {
//                   xs: "none",
//                   md: "1px solid",
//                 },
//                 borderColor: "divider",
//               }}
//             >
//               <Typography
//                 sx={{
//                   color: "primary.main",
//                   fontSize: {
//                     xs: "1rem",
//                     md: "1.15rem",
//                   },
//                   fontWeight: 800,
//                 }}
//               >
//                 साहित्य, समाज, कला और संस्कृति संसार की दहलीज़ ही चौखट है।
//               </Typography>

//               <Typography
//                 sx={{
//                   mt: 0.3,
//                   color: "secondary.dark",
//                   fontSize: "0.72rem",
//                   fontWeight: 600,
//                 }}
//               >
//                 आपका अपना साहित्यिक मंच
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 textAlign: {
//                   xs: "center",
//                   md: "right",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   color: "primary.main",
//                   fontSize: "0.75rem",
//                   fontWeight: 700,
//                 }}
//               >
//                 प्रकाशन : चौखट
//               </Typography>

//               <Typography
//                 sx={{
//                   mt: 0.3,
//                   color: "text.secondary",
//                   fontSize: "0.68rem",
//                 }}
//               >
//                 अंक 2026
//               </Typography>
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* =====================================================
//           MAIN
//       ====================================================== */}
//       <Container
//         maxWidth="xl"
//         sx={{
//           py: { xs: 2, md: 3 },
//         }}
//       >
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               lg: "250px minmax(0, 1fr) 280px",
//             },
//             gap: { xs: 2.5, md: 3 },
//             alignItems: "start",
//           }}
//         >
//           {/* =================================================
//               LEFT COLUMN
//           ================================================== */}
//           <Box
//             sx={{
//               order: {
//                 xs: 2,
//                 lg: 1,
//               },
//             }}
//           >
//             <SectionTitle icon={<GroupsRounded />} title="संपादकीय परिवार" />

//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: 2,
//               }}
//             >
//               {dummyEditors.map((editor) => (
//                 <Box
//                   key={editor.id}
//                   sx={{
//                     overflow: "hidden",
//                     borderRadius: 3,
//                     backgroundColor: "#FFF8ED",
//                     border: "1px solid rgba(59,6,10,0.09)",
//                     transition: "all 0.25s ease",
//                     "&:hover": {
//                       transform: "translateY(-4px)",
//                       borderColor: "rgba(234,166,77,0.55)",
//                       boxShadow: "0 12px 30px rgba(59,6,10,0.08)",
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       height: 230,
//                       backgroundColor: "#F3E8D5",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={editor.image}
//                       alt={editor.name}
//                       sx={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         display: "block",
//                       }}
//                     />
//                   </Box>

//                   <Box sx={{ p: 2 }}>
//                     <Typography
//                       sx={{
//                         color: "secondary.dark",
//                         fontSize: "0.7rem",
//                         fontWeight: 700,
//                       }}
//                     >
//                       {editor.role}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         mt: 0.5,
//                         color: "primary.main",
//                         fontSize: "1rem",
//                         fontWeight: 800,
//                       }}
//                     >
//                       {editor.name}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         mt: 0.8,
//                         color: "text.secondary",
//                         fontSize: "0.75rem",
//                         lineHeight: 1.6,
//                       }}
//                     >
//                       साहित्य, समाज और संस्कृति के प्रति समर्पित रचनात्मक
//                       व्यक्तित्व।
//                     </Typography>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Box>

//           {/* =================================================
//               CENTER COLUMN
//           ================================================== */}
//           <Box
//             sx={{
//               minWidth: 0,
//               order: {
//                 xs: 1,
//                 lg: 2,
//               },
//             }}
//           >
//             {/* HERO */}
//             <Box
//               sx={{
//                 position: "relative",
//                 overflow: "hidden",
//                 borderRadius: 3,
//                 backgroundColor: "#E8D8C8",
//                 border: "1px solid rgba(59,6,10,0.1)",
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "relative",
//                   aspectRatio: {
//                     xs: "16 / 9",
//                     md: "2 / 1",
//                   },
//                   minHeight: {
//                     xs: 220,
//                     sm: 280,
//                     md: 390,
//                   },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={dummySlides[0].image}
//                   alt={dummySlides[0].title}
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     display: "block",
//                     objectFit: "cover",
//                   }}
//                 />

//                 {/* Overlay */}
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     inset: 0,
//                     background:
//                       "linear-gradient(90deg, rgba(59,6,10,0.78), rgba(59,6,10,0.08) 75%)",
//                   }}
//                 />

//                 <Box
//                   sx={{
//                     position: "absolute",
//                     left: {
//                       xs: 20,
//                       md: 35,
//                     },
//                     bottom: {
//                       xs: 20,
//                       md: 35,
//                     },
//                     maxWidth: 500,
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       color: "secondary.main",
//                       fontSize: "0.72rem",
//                       fontWeight: 700,
//                       letterSpacing: "0.08em",
//                     }}
//                   >
//                     चौखट हिंदी पत्रिका
//                   </Typography>

//                   <Typography
//                     sx={{
//                       mt: 1,
//                       color: "#fff",
//                       fontSize: {
//                         xs: "1.5rem",
//                         sm: "2rem",
//                         md: "2.6rem",
//                       },
//                       fontWeight: 800,
//                       lineHeight: 1.15,
//                     }}
//                   >
//                     साहित्य की नई चौखट
//                   </Typography>

//                   <Typography
//                     sx={{
//                       mt: 1,
//                       color: "rgba(255,255,255,0.75)",
//                       fontSize: "0.82rem",
//                       lineHeight: 1.6,
//                     }}
//                   >
//                     शब्दों, विचारों और संस्कृति की दुनिया से जुड़ने का एक नया
//                     माध्यम।
//                   </Typography>
//                 </Box>

//                 {/* Slider dots */}
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 18,
//                     right: 20,
//                     display: "flex",
//                     gap: 0.7,
//                   }}
//                 >
//                   {dummySlides.map((slide, index) => (
//                     <Box
//                       key={slide.id}
//                       sx={{
//                         width: index === 0 ? 24 : 7,
//                         height: 7,
//                         borderRadius: 5,
//                         backgroundColor:
//                           index === 0
//                             ? "secondary.main"
//                             : "rgba(255,255,255,0.55)",
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </Box>

//             {/* PATRIKA */}
//             <Box
//               sx={{
//                 mt: 3,
//                 p: { xs: 2, md: 2.5 },
//                 borderRadius: 3,
//                 backgroundColor: "#FFF8ED",
//                 border: "1px solid rgba(59,6,10,0.09)",
//               }}
//             >
//               <SectionTitle
//                 icon={<AutoStoriesRounded />}
//                 title="नवीनतम पत्रिकाएं"
//                 description="चौखट के प्रकाशित अंकों से जुड़ें"
//               />

//               <Box
//                 sx={{
//                   display: "grid",
//                   gridTemplateColumns: {
//                     xs: "repeat(2, 1fr)",
//                     sm: "repeat(4, 1fr)",
//                   },
//                   gap: { xs: 1.5, md: 2 },
//                 }}
//               >
//                 {dummyPatrikas.map((item) => (
//                   <Box
//                     key={item.id}
//                     sx={{
//                       minWidth: 0,
//                       cursor: "pointer",
//                       transition: "transform 0.25s ease",
//                       "&:hover": {
//                         transform: "translateY(-5px)",
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         overflow: "hidden",
//                         borderRadius: 2,
//                         aspectRatio: "400 / 560",
//                         backgroundColor: "#F3E8D5",
//                         border: "1px solid rgba(59,6,10,0.1)",
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={item.image}
//                         alt={item.title}
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           display: "block",
//                           objectFit: "cover",
//                         }}
//                       />
//                     </Box>

//                     <Typography
//                       sx={{
//                         mt: 1,
//                         color: "primary.main",
//                         fontSize: "0.75rem",
//                         fontWeight: 700,
//                         lineHeight: 1.4,
//                       }}
//                     >
//                       {item.title}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>

//               <Button
//                 component={Link}
//                 to="/libery"
//                 endIcon={<ArrowForwardRounded />}
//                 sx={{
//                   mt: 2.5,
//                   fontSize: "0.8rem",
//                 }}
//               >
//                 सभी पत्रिकाएं
//               </Button>
//             </Box>
//           </Box>

//           {/* =================================================
//               RIGHT COLUMN
//           ================================================== */}
//           <Box
//             sx={{
//               order: {
//                 xs: 3,
//                 lg: 3,
//               },
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//             }}
//           >
//             {/* SOCIAL */}
//             <Box
//               sx={{
//                 p: 2,
//                 borderRadius: 3,
//                 backgroundColor: "#FFF8ED",
//                 border: "1px solid rgba(59,6,10,0.09)",
//               }}
//             >
//               <SectionTitle icon={<GroupsRounded />} title="सोशल मीडिया" />

//               <Box
//                 sx={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: 1,
//                   mt: 1.5,
//                 }}
//               >
//                 {socialLinks.map((social) => (
//                   <Box
//                     key={social.label}
//                     title={social.label}
//                     sx={{
//                       width: 35,
//                       height: 35,
//                       display: "grid",
//                       placeItems: "center",
//                       borderRadius: 2,
//                       color: "primary.main",
//                       backgroundColor: "rgba(234,166,77,0.13)",
//                       border: "1px solid rgba(234,166,77,0.2)",
//                       fontSize: "0.8rem",
//                       fontWeight: 800,
//                       cursor: "pointer",
//                       transition: "all 0.2s ease",
//                       "&:hover": {
//                         color: "#fff",
//                         backgroundColor: "primary.main",
//                         transform: "translateY(-2px)",
//                       },
//                     }}
//                   >
//                     {social.icon}
//                   </Box>
//                 ))}
//               </Box>
//             </Box>

//             {/* FAMILY */}
//             <Box
//               sx={{
//                 p: 2,
//                 borderRadius: 3,
//                 backgroundColor: "#FFF8ED",
//                 border: "1px solid rgba(59,6,10,0.09)",
//               }}
//             >
//               <SectionTitle icon={<GroupsRounded />} title="चौखट परिवार" />

//               <Box
//                 sx={{
//                   mt: 1.5,
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: 0.7,
//                 }}
//               >
//                 {familyLinks.map((item) => (
//                   <Box
//                     key={item.href}
//                     component={Link}
//                     to={item.href}
//                     sx={{
//                       minHeight: 34,
//                       px: 1.2,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                       borderRadius: 1.5,
//                       textDecoration: "none",
//                       color: "text.primary",
//                       backgroundColor: "rgba(250,213,154,0.12)",
//                       border: "1px solid rgba(59,6,10,0.07)",
//                       transition: "all 0.2s ease",

//                       "&:hover": {
//                         color: "primary.main",
//                         backgroundColor: "rgba(234,166,77,0.16)",
//                         transform: "translateX(3px)",
//                       },
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontSize: "0.74rem",
//                         fontWeight: 600,
//                       }}
//                     >
//                       {item.label}
//                     </Typography>

//                     <ArrowForwardRounded
//                       sx={{
//                         fontSize: 14,
//                         color: "secondary.dark",
//                       }}
//                     />
//                   </Box>
//                 ))}
//               </Box>
//             </Box>

//             {/* NOTICES */}
//             <Box
//               sx={{
//                 p: 2,
//                 borderRadius: 3,
//                 backgroundColor: "#FFF8ED",
//                 border: "1px solid rgba(59,6,10,0.09)",
//               }}
//             >
//               <SectionTitle
//                 icon={<NotificationsNoneRounded />}
//                 title="मुख्य सूचनाएं"
//               />

//               <Box
//                 sx={{
//                   mt: 1,
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 {dummyNotices.map((notice, index) => (
//                   <Box
//                     key={index}
//                     sx={{
//                       display: "flex",
//                       gap: 1,
//                       py: 1.2,
//                       borderBottom:
//                         index !== dummyNotices.length - 1
//                           ? "1px solid"
//                           : "none",
//                       borderColor: "divider",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 6,
//                         height: 6,
//                         mt: 0.8,
//                         flexShrink: 0,
//                         borderRadius: "50%",
//                         backgroundColor: "secondary.main",
//                       }}
//                     />

//                     <Typography
//                       sx={{
//                         color: "text.secondary",
//                         fontSize: "0.74rem",
//                         lineHeight: 1.55,
//                       }}
//                     >
//                       {notice}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>

//               <Button
//                 component={Link}
//                 to="/newus"
//                 endIcon={<ArrowForwardRounded />}
//                 sx={{
//                   mt: 1.5,
//                   fontSize: "0.75rem",
//                 }}
//               >
//                 सभी सूचनाएं
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         {/* ===================================================
//             DISCOVERY
//         ==================================================== */}
//         <Box
//           sx={{
//             mt: { xs: 3, md: 4 },
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               sm: "repeat(3, 1fr)",
//             },
//             gap: 2,
//           }}
//         >
//           <DiscoveryCard
//             icon={<MenuBookRounded />}
//             title="ई-पत्रिका"
//             text="चौखट के नवीनतम अंकों को पढ़ें"
//             href="/libery"
//           />

//           <DiscoveryCard
//             icon={<AutoStoriesRounded />}
//             title="पुस्तक संसार"
//             text="पुस्तकों और साहित्यिक सामग्री का संग्रह"
//             href="/libery/books"
//           />

//           <DiscoveryCard
//             icon={<NotificationsNoneRounded />}
//             title="नवीनतम जानकारी"
//             text="चौखट से जुड़ी नई जानकारी प्राप्त करें"
//             href="/newus"
//           />
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// /* ============================================================
//    SECTION TITLE
// ============================================================ */

// const SectionTitle = ({ icon, title, description }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 1,
//       }}
//     >
//       <Box
//         sx={{
//           width: 34,
//           height: 34,
//           flexShrink: 0,
//           display: "grid",
//           placeItems: "center",
//           borderRadius: 1.5,
//           color: "primary.main",
//           backgroundColor: "rgba(234,166,77,0.15)",
//         }}
//       >
//         {React.cloneElement(icon, {
//           sx: {
//             fontSize: 19,
//           },
//         })}
//       </Box>

//       <Box>
//         <Typography
//           sx={{
//             color: "primary.main",
//             fontSize: "0.92rem",
//             fontWeight: 800,
//             lineHeight: 1.3,
//           }}
//         >
//           {title}
//         </Typography>

//         {description && (
//           <Typography
//             sx={{
//               mt: 0.25,
//               color: "text.secondary",
//               fontSize: "0.68rem",
//             }}
//           >
//             {description}
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// /* ============================================================
//    DISCOVERY CARD
// ============================================================ */

// const DiscoveryCard = ({ icon, title, text, href }) => {
//   return (
//     <Box
//       component={Link}
//       to={href}
//       sx={{
//         minHeight: 82,
//         p: 2,
//         display: "flex",
//         alignItems: "center",
//         gap: 1.5,
//         textDecoration: "none",
//         borderRadius: 2.5,
//         backgroundColor: "#FFF8ED",
//         border: "1px solid rgba(59,6,10,0.08)",
//         transition: "all 0.25s ease",

//         "&:hover": {
//           transform: "translateY(-3px)",
//           borderColor: "rgba(234,166,77,0.5)",
//           boxShadow: "0 10px 25px rgba(59,6,10,0.07)",
//         },
//       }}
//     >
//       <Box
//         sx={{
//           width: 42,
//           height: 42,
//           flexShrink: 0,
//           display: "grid",
//           placeItems: "center",
//           borderRadius: 2,
//           color: "primary.main",
//           backgroundColor: "rgba(234,166,77,0.14)",
//         }}
//       >
//         {React.cloneElement(icon, {
//           sx: {
//             fontSize: 21,
//           },
//         })}
//       </Box>

//       <Box sx={{ minWidth: 0 }}>
//         <Typography
//           sx={{
//             color: "primary.main",
//             fontSize: "0.88rem",
//             fontWeight: 800,
//           }}
//         >
//           {title}
//         </Typography>

//         <Typography
//           sx={{
//             mt: 0.3,
//             color: "text.secondary",
//             fontSize: "0.7rem",
//             lineHeight: 1.5,
//           }}
//         >
//           {text}
//         </Typography>
//       </Box>

//       <ArrowForwardRounded
//         sx={{
//           ml: "auto",
//           flexShrink: 0,
//           fontSize: 18,
//           color: "secondary.dark",
//         }}
//       />
//     </Box>
//   );
// };

// export default Home;

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
  "चौखट हिंदी पत्रिका का नवीनतम अंक अब उपलब्ध है।",
  "साहित्य एवं संस्कृति से जुड़ी नई सामग्री प्रकाशित की गई है।",
  "ई-पत्रिका के नवीनतम अंक को ऑनलाइन पढ़ें।",
  "रचनाकारों के लिए नई सामग्री आमंत्रित की जा रही है।",
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
