// import React from "react";

// import { Box, Container, Typography } from "@mui/material";
// import {
//   AutoStoriesRounded,
//   ArrowDownwardRounded,
//   FormatQuoteRounded,
//   EastRounded,
// } from "@mui/icons-material";

// const Intro = () => {
//   return (
//     <Box
//       component="main"
//       sx={{
//         minHeight: "100vh",
//         overflow: "hidden",
//         background:
//           "linear-gradient(180deg, #FFFDF8 0%, #FFF8ED 45%, #FFFFFF 100%)",
//         py: { xs: 3, sm: 4, md: 7 },
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* ================= HEADER ================= */}
//         <Box
//           sx={{
//             position: "relative",
//             mb: { xs: 3, md: 5 },
//             p: { xs: 2.5, sm: 4, md: 6 },
//             overflow: "hidden",
//             borderRadius: { xs: 4, md: 6 },
//             background:
//               "linear-gradient(135deg, #3B060A 0%, #5A1117 55%, #721F24 100%)",
//             boxShadow: "0 20px 60px rgba(59,6,10,0.15)",
//           }}
//         >
//           {/* Decorative Circle */}
//           <Box
//             sx={{
//               position: "absolute",
//               width: { xs: 160, md: 280 },
//               height: { xs: 160, md: 280 },
//               right: { xs: -80, md: -100 },
//               top: { xs: -80, md: -130 },
//               borderRadius: "50%",
//               background:
//                 "radial-gradient(circle, rgba(234,166,77,0.28), rgba(234,166,77,0))",
//             }}
//           />

//           <Box
//             sx={{
//               position: "absolute",
//               width: 100,
//               height: 100,
//               right: "20%",
//               bottom: -65,
//               borderRadius: "50%",
//               border: "1px solid rgba(255,255,255,0.08)",
//             }}
//           />

//           {/* Small Label */}
//           <Box
//             sx={{
//               position: "relative",
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 1,
//               mb: 2.5,
//               px: 1.4,
//               py: 0.7,
//               borderRadius: 10,
//               color: "#EAA64D",
//               backgroundColor: "rgba(234,166,77,0.12)",
//               border: "1px solid rgba(234,166,77,0.2)",
//             }}
//           >
//             <AutoStoriesRounded sx={{ fontSize: 18 }} />

//             <Typography
//               sx={{
//                 fontSize: "0.72rem",
//                 fontWeight: 800,
//                 letterSpacing: "0.04em",
//               }}
//             >
//               हमारे बारे में
//             </Typography>
//           </Box>

//           {/* Main Heading */}
//           <Typography
//             component="h1"
//             sx={{
//               position: "relative",
//               maxWidth: 760,
//               color: "#FFF8ED",
//               fontSize: {
//                 xs: "1.9rem",
//                 sm: "2.4rem",
//                 md: "3.3rem",
//               },
//               fontWeight: 900,
//               lineHeight: 1.2,
//               letterSpacing: "-0.025em",
//             }}
//           >
//             शब्दों के उस{" "}
//             <Box
//               component="span"
//               sx={{
//                 color: "#EAA64D",
//               }}
//             >
//               चौखट
//             </Box>{" "}
//             पर आपका स्वागत है।
//           </Typography>

//           <Typography
//             sx={{
//               position: "relative",
//               mt: 2,
//               maxWidth: 650,
//               color: "rgba(255,248,237,0.72)",
//               fontSize: {
//                 xs: "0.88rem",
//                 md: "1rem",
//               },
//               lineHeight: 1.9,
//             }}
//           >
//             एक ऐसा मंच जहाँ विचार सिर्फ लिखे नहीं जाते, बल्कि पढ़े,
//             समझे और महसूस किए जाते हैं।
//           </Typography>

//           {/* Scroll Indicator */}
//           <Box
//             sx={{
//               position: "relative",
//               mt: 4,
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 1,
//               color: "#EAA64D",
//             }}
//           >
//             <ArrowDownwardRounded sx={{ fontSize: 18 }} />

//             <Typography
//               sx={{
//                 fontSize: "0.7rem",
//                 fontWeight: 700,
//               }}
//             >
//               आगे पढ़ें
//             </Typography>
//           </Box>
//         </Box>

//         {/* ================= CONTENT ================= */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               md: "0.75fr 1.25fr",
//             },
//             gap: { xs: 2, md: 4 },
//             alignItems: "stretch",
//           }}
//         >
//           {/* Side Card */}
//           <Box
//             sx={{
//               position: "relative",
//               p: { xs: 2.5, md: 3.5 },
//               overflow: "hidden",
//               borderRadius: 4,
//               backgroundColor: "#3B060A",
//               boxShadow: "0 15px 40px rgba(59,6,10,0.1)",
//             }}
//           >
//             <Box
//               sx={{
//                 position: "absolute",
//                 width: 150,
//                 height: 150,
//                 right: -70,
//                 bottom: -70,
//                 borderRadius: "50%",
//                 backgroundColor: "rgba(234,166,77,0.1)",
//               }}
//             />

//             <Typography
//               sx={{
//                 position: "relative",
//                 color: "#EAA64D",
//                 fontSize: "0.72rem",
//                 fontWeight: 800,
//                 letterSpacing: "0.08em",
//                 textTransform: "uppercase",
//               }}
//             >
//               Chaukhatt
//             </Typography>

//             <Typography
//               sx={{
//                 position: "relative",
//                 mt: 2,
//                 color: "#FFF8ED",
//                 fontSize: {
//                   xs: "1.4rem",
//                   md: "1.8rem",
//                 },
//                 fontWeight: 800,
//                 lineHeight: 1.4,
//               }}
//             >
//               आपकी बात,
//               <br />
//               आपकी पहचान।
//             </Typography>

//             <Box
//               sx={{
//                 width: 45,
//                 height: 3,
//                 mt: 2.5,
//                 mb: 2.5,
//                 borderRadius: 10,
//                 backgroundColor: "#EAA64D",
//               }}
//             />

//             <Typography
//               sx={{
//                 position: "relative",
//                 color: "rgba(255,248,237,0.65)",
//                 fontSize: "0.8rem",
//                 lineHeight: 1.8,
//               }}
//             >
//               विचारों की विविधता ही संवाद को जीवंत बनाती है।
//             </Typography>

//             <Box
//               sx={{
//                 position: "relative",
//                 mt: 5,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//                 color: "#EAA64D",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "0.75rem",
//                   fontWeight: 700,
//                 }}
//               >
//                 विचारों की यात्रा
//               </Typography>

//               <EastRounded sx={{ fontSize: 17 }} />
//             </Box>
//           </Box>

//           {/* Main Article */}
//           <Box
//             sx={{
//               p: { xs: 2.5, sm: 3.5, md: 4.5 },
//               borderRadius: 4,
//               backgroundColor: "rgba(255,255,255,0.72)",
//               border: "1px solid rgba(59,6,10,0.08)",
//               boxShadow: "0 12px 40px rgba(59,6,10,0.05)",
//               backdropFilter: "blur(8px)",
//             }}
//           >
//             <Typography
//               component="h2"
//               sx={{
//                 color: "primary.main",
//                 fontSize: {
//                   xs: "1.3rem",
//                   md: "1.65rem",
//                 },
//                 fontWeight: 900,
//                 lineHeight: 1.4,
//               }}
//             >
//               चौखट क्या है?
//             </Typography>

//             <Box
//               sx={{
//                 width: 55,
//                 height: 3,
//                 mt: 1.5,
//                 mb: 2.5,
//                 borderRadius: 10,
//                 backgroundColor: "secondary.main",
//               }}
//             />

//             <Typography
//               sx={{
//                 color: "text.secondary",
//                 fontSize: {
//                   xs: "0.88rem",
//                   md: "0.95rem",
//                 },
//                 lineHeight: 1.95,
//               }}
//             >
//               चौखट एक ऐसा मंच है जहाँ विचारों, अनुभवों और कहानियों को
//               अपनी आवाज़ मिलती है। हमारा उद्देश्य समाज और जीवन से जुड़े
//               महत्वपूर्ण विषयों पर सार्थक संवाद को बढ़ावा देना और हर व्यक्ति
//               को अपनी बात साझा करने के लिए एक सहज स्थान देना है।
//             </Typography>

//             <Typography
//               sx={{
//                 mt: 2,
//                 color: "text.secondary",
//                 fontSize: {
//                   xs: "0.88rem",
//                   md: "0.95rem",
//                 },
//                 lineHeight: 1.95,
//               }}
//             >
//               यहाँ हर विचार अपने साथ एक अनुभव, एक दृष्टिकोण और एक कहानी
//               लेकर आता है। हमारा प्रयास है कि अलग-अलग आवाज़ों को सम्मान
//               के साथ सामने लाया जाए और उनके बीच संवाद की एक मजबूत कड़ी
//               बनाई जाए।
//             </Typography>

//             {/* Quote */}
//             <Box
//               sx={{
//                 position: "relative",
//                 mt: 4,
//                 p: { xs: 2, md: 2.5 },
//                 borderRadius: 3,
//                 background:
//                   "linear-gradient(135deg, rgba(234,166,77,0.13), rgba(234,166,77,0.04))",
//                 borderLeft: "4px solid",
//                 borderColor: "secondary.main",
//               }}
//             >
//               <FormatQuoteRounded
//                 sx={{
//                   position: "absolute",
//                   right: 12,
//                   top: 10,
//                   fontSize: 42,
//                   color: "rgba(234,166,77,0.2)",
//                 }}
//               />

//               <Typography
//                 sx={{
//                   position: "relative",
//                   color: "primary.main",
//                   fontSize: {
//                     xs: "0.9rem",
//                     md: "1rem",
//                   },
//                   fontWeight: 700,
//                   lineHeight: 1.8,
//                 }}
//               >
//                 “हर आवाज़ की अपनी एक कहानी होती है,
//                 और हर कहानी के लिए एक चौखट ज़रूरी है।”
//               </Typography>
//             </Box>

//             {/* Author */}
//             <Box
//               sx={{
//                 mt: 4,
//                 pt: 2.5,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 gap: 2,
//                 borderTop: "1px solid",
//                 borderColor: "divider",
//               }}
//             >
//               <Box>
//                 <Typography
//                   sx={{
//                     color: "primary.main",
//                     fontSize: "0.9rem",
//                     fontWeight: 800,
//                   }}
//                 >
//                   चौखट टीम
//                 </Typography>

//                 <Typography
//                   sx={{
//                     mt: 0.3,
//                     color: "text.secondary",
//                     fontSize: "0.72rem",
//                   }}
//                 >
//                   संपादकीय टीम
//                 </Typography>
//               </Box>

//               <Box
//                 sx={{
//                   width: 38,
//                   height: 38,
//                   display: "grid",
//                   placeItems: "center",
//                   borderRadius: "50%",
//                   color: "primary.main",
//                   backgroundColor: "rgba(59,6,10,0.06)",
//                 }}
//               >
//                 <AutoStoriesRounded sx={{ fontSize: 19 }} />
//               </Box>
//             </Box>
//           </Box>
//         </Box>

//         {/* ================= BOTTOM MESSAGE ================= */}
//         <Box
//           sx={{
//             mt: { xs: 2, md: 4 },
//             p: { xs: 2.5, md: 3 },
//             display: "flex",
//             alignItems: "center",
//             gap: 2,
//             borderRadius: 4,
//             backgroundColor: "#FFF8ED",
//             border: "1px solid rgba(234,166,77,0.2)",
//           }}
//         >
//           <Box
//             sx={{
//               width: 42,
//               height: 42,
//               flexShrink: 0,
//               display: "grid",
//               placeItems: "center",
//               borderRadius: 2,
//               color: "secondary.main",
//               backgroundColor: "rgba(234,166,77,0.13)",
//             }}
//           >
//             <AutoStoriesRounded />
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 color: "primary.main",
//                 fontSize: "0.85rem",
//                 fontWeight: 800,
//               }}
//             >
//               पढ़ते रहिए, जुड़ते रहिए।
//             </Typography>

//             <Typography
//               sx={{
//                 mt: 0.3,
//                 color: "text.secondary",
//                 fontSize: "0.72rem",
//               }}
//             >
//               क्योंकि एक अच्छा विचार किसी और के लिए नई शुरुआत हो सकता है।
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Intro;

import React from "react";

import { Box, Container, Typography } from "@mui/material";
import { AutoStoriesRounded, PersonOutlineRounded } from "@mui/icons-material";

const intro = {
  title: "चौखट हिंदी पत्रिका",
  content: `चौखट पत्रिका में आपका स्वागत है| साहित्य समाज बहुत ही सृजनात्मक, नवीन ऊर्जा वाला और निरंतर गतिशील समाज है| जो सदैव अपनी एक विशिष्ट गति से संसार में हो रहे नवीन परिवर्तनों के साथ साहित्य को सृजनात्मक बनाए रखता है| इस सृजन धर्मी समाज में हमारी चौखट पत्रिका एक नवीन और सृजनात्मक प्रयास लेकर आज हम सब के बीच है| यह प्रयास चौखट पत्रिका के रूप में निरंतर अपनी भूमिका को अदा करने के मार्ग पर अग्रसर है| अब यदि हम विचार करें कि चौखट पत्रिका के क्या उद्देश्य हैं और इसका साहित्य जगत में इसका क्या महत्व है या इसकी क्या उपयोगिता है? वास्तव में चौखट पत्रिका के चार आधार स्तंभ हैं - साहित्य, समाज, कला और संस्कृति यह चार आधार स्तंभ हैं| जिन पर चौखट पत्रिका का निर्माण हुआ है और अब अगर इसके उद्देश्य की बात करें तो इसका उद्देश्य साहित्य समाज में सृजनात्मकता और नवीनता को बढ़ावा देना ही मुख्य उद्देश्य है। चौखट त्रैमासिक पत्रिका है जो ऑनलाइन माध्यम से हम सभी के बीच एक रचनात्मक वातावरण बनाने का प्रयास कर रही है| जिसके भीतर सभी रचनाकार अपनी गद्य और पद्य की सृजनात्मक स्वरचित रचनाएं, आलेख, शोधलेख और अंतर अनुशासनिक विषयों से संबंधित सभी प्रकार की रचनाएं भेज सकते हैं| जिसको हमारी टीम जांच करने के बाद छापेगी और यदि सुधार की जरूरत पड़ी तो सुधारने के बाद उसे प्रकाशित करेगी| यही क्रम हर 3 महीने में चलता रहेगा| इस प्रकार हमारी साहित्य संसार की त्रैमासिक पत्रिका चौखट कार्य करेगी| हमें आशा ही नहीं बल्कि पूर्ण विश्वास है कि आप सभी रचना धर्मी, पाठक, लेखक और सभी समाज के प्रयासरत बंधु जन हमारी टीम का सहयोग करेंगे और साहित्य में एक नया और सृजनात्मक वातावरण बनाने में हमारा सहयोग करें।`,
  author: "चौखट संपादकीय टीम",
  designation: "चौखट हिंदी पत्रिका",
};

const Intro = () => {
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
        {/* Page Header */}
        <Box
          sx={{
            maxWidth: 920,
            mx: "auto",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
                borderRadius: 2,
                color: "primary.main",
                backgroundColor: "rgba(234,166,77,0.15)",
              }}
            >
              <AutoStoriesRounded />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: {
                    xs: "1.35rem",
                    md: "1.65rem",
                  },
                  fontWeight: 800,
                  lineHeight: 1.3,
                }}
              >
                परिचय
              </Typography>

              <Typography
                sx={{
                  mt: 0.3,
                  color: "text.secondary",
                  fontSize: "0.78rem",
                }}
              >
                चौखट के बारे में
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Intro Content */}
        <Box
          sx={{
            maxWidth: 920,
            mx: "auto",
            borderRadius: 4,
            overflow: "hidden",
            backgroundColor: "#FFF8ED",
            border: "1px solid rgba(59,6,10,0.09)",
            boxShadow: "0 10px 35px rgba(59,6,10,0.05)",
          }}
        >
          {/* Top Accent */}
          <Box
            sx={{
              height: 5,
              background:
                "linear-gradient(90deg, #3B060A 0%, #EAA64D 50%, #3B060A 100%)",
            }}
          />

          <Box
            sx={{
              p: {
                xs: 2.5,
                sm: 3.5,
                md: 5,
              },
            }}
          >
            {/* Title */}
            <Typography
              component="h1"
              sx={{
                color: "primary.main",
                fontSize: {
                  xs: "1.3rem",
                  md: "1.7rem",
                },
                fontWeight: 800,
                lineHeight: 1.45,
              }}
            >
              {intro.title}
            </Typography>

            {/* Decorative line */}
            <Box
              sx={{
                width: 55,
                height: 3,
                mt: 1.5,
                mb: 3,
                borderRadius: 10,
                backgroundColor: "secondary.main",
              }}
            />

            {/* Content */}
            <Box
              sx={{
                maxWidth: 780,
              }}
            >
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: {
                    xs: "0.9rem",
                    md: "0.97rem",
                  },
                  lineHeight: {
                    xs: 1.9,
                    md: 2,
                  },
                  whiteSpace: "pre-line",
                }}
              >
                {intro.content}
              </Typography>
            </Box>

            {/* Author */}
            <Box
              sx={{
                mt: 5,
                pt: 2.5,
                borderTop: "1px solid",
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  borderRadius: "50%",
                  color: "primary.main",
                  backgroundColor: "rgba(234,166,77,0.15)",
                }}
              >
                <PersonOutlineRounded />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "0.88rem",
                    fontWeight: 800,
                  }}
                >
                  {intro.author}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.25,
                    color: "text.secondary",
                    fontSize: "0.72rem",
                  }}
                >
                  {intro.designation}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Intro;
