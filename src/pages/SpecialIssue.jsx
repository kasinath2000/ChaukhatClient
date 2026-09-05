// import React, { useEffect, useState } from "react";

// import {
//   Box,
//   Container,
//   Typography,
// } from "@mui/material";

// import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

// import IssueItem from "../components/UI/Issue/IssueItem";
// import { SkeletonLoader } from "../components/common/index";

// // =====================================================
// // TEST DATA
// // =====================================================

// const specialIssues = [
//   {
//     id: 1,
//     year: 2025,
//     title:
//       "विशेष अंक: भारतीय साहित्य और संस्कृति / Volume- 1, Special Issue, 2025",
//     pdfUrl: "/files/special-issue-01.pdf",
//   },
// ];

// // =====================================================
// // TEMPORARY SETTING
// // =====================================================

// // false = अभी Coming Soon दिखेगा
// // true  = testing के लिए ऊपर वाला dummy card दिखेगा
// const SHOW_TEST_DATA = false;

// const SpecialIssue = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Box
//       sx={{
//         py: {
//           xs: 3,
//           md: 5,
//         },
//       }}
//     >
//       <Container maxWidth="xl">

//         {/* ================================================= */}
//         {/* HEADER */}
//         {/* ================================================= */}

//         <Box
//           sx={{
//             textAlign: "center",
//             mb: {
//               xs: 4,
//               md: 5,
//             },
//           }}
//         >
//           {/* Icon */}
//           <Box
//             sx={{
//               width: 58,
//               height: 58,
//               mx: "auto",
//               mb: 1.5,

//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",

//               borderRadius: "50%",

//               backgroundColor: "secondary.main",
//               color: "primary.main",

//               boxShadow: "0 8px 20px rgba(91, 44, 31, 0.10)",
//             }}
//           >
//             <AutoAwesomeRoundedIcon
//               sx={{
//                 fontSize: 28,
//               }}
//             />
//           </Box>

//           {/* Title */}
//           <Typography
//             variant="h3"
//             sx={{
//               color: "primary.main",
//               fontWeight: 800,

//               fontSize: {
//                 xs: "2rem",
//                 md: "3rem",
//               },

//               lineHeight: 1.2,
//               mb: 1.2,
//             }}
//           >
//             विशेष अंक
//           </Typography>

//           {/* Accent */}
//           <Box
//             sx={{
//               width: 65,
//               height: 4,
//               mx: "auto",
//               mb: 2,

//               borderRadius: 10,

//               backgroundColor: "secondary.main",
//             }}
//           />

//           {/* Description */}
//           <Typography
//             sx={{
//               maxWidth: 680,
//               mx: "auto",

//               color: "text.secondary",

//               lineHeight: 1.8,

//               fontSize: {
//                 xs: "0.95rem",
//                 md: "1rem",
//               },
//             }}
//           >
//             चौखट के विशेष अंकों की विशेष प्रस्तुतियाँ यहाँ उपलब्ध होंगी।
//           </Typography>
//         </Box>

//         {/* ================================================= */}
//         {/* LOADING */}
//         {/* ================================================= */}

//         {loading ? (
//           <Box
//             sx={{
//               borderRadius: 4,

//               border: "1px solid",
//               borderColor: "divider",

//               backgroundColor: "background.paper",

//               p: {
//                 xs: 2,
//                 sm: 2.5,
//                 md: 3,
//               },
//             }}
//           >
//             <SkeletonLoader
//               variant="text"
//               width={150}
//               height={35}
//             />

//             <Box
//               sx={{
//                 mt: 0.5,
//                 mb: 3,
//               }}
//             >
//               <SkeletonLoader
//                 variant="text"
//                 width={280}
//                 height={20}
//               />
//             </Box>

//             <Box
//               sx={{
//                 display: "grid",

//                 gridTemplateColumns: {
//                   xs: "1fr",
//                   sm: "repeat(2, minmax(0, 1fr))",
//                 },

//                 gap: {
//                   xs: 2,
//                   md: 2.5,
//                 },
//               }}
//             >
//               {[1, 2].map((item) => (
//                 <Box
//                   key={item}
//                   sx={{
//                     minHeight: 190,

//                     p: 2,

//                     border: "1px solid",
//                     borderColor: "divider",

//                     borderRadius: 3,
//                   }}
//                 >
//                   <SkeletonLoader
//                     variant="rounded"
//                     width={48}
//                     height={48}
//                   />

//                   <Box sx={{ mt: 2 }}>
//                     <SkeletonLoader
//                       variant="text"
//                       width="90%"
//                       height={25}
//                     />

//                     <SkeletonLoader
//                       variant="text"
//                       width="75%"
//                       height={25}
//                     />

//                     <SkeletonLoader
//                       variant="text"
//                       width="55%"
//                       height={25}
//                     />
//                   </Box>

//                   <Box
//                     sx={{
//                       mt: 2,
//                       pt: 1.5,

//                       borderTop: "1px solid",
//                       borderColor: "divider",

//                       display: "flex",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <SkeletonLoader
//                       variant="text"
//                       width={75}
//                       height={25}
//                     />

//                     <SkeletonLoader
//                       variant="circular"
//                       width={40}
//                       height={40}
//                     />
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         ) : SHOW_TEST_DATA ? (

//           /* ================================================= */
//           /* TEST DATA */
//           /* ================================================= */

//           <Box
//             sx={{
//               borderRadius: 4,

//               backgroundColor: "background.paper",

//               border: "1px solid",
//               borderColor: "divider",

//               p: {
//                 xs: 2,
//                 sm: 2.5,
//                 md: 3,
//               },
//             }}
//           >
//             {/* Section Heading */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",

//                 gap: 1.2,

//                 mb: 2.5,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 6,
//                   height: 28,

//                   borderRadius: 10,

//                   backgroundColor: "secondary.main",
//                 }}
//               />

//               <Typography
//                 variant="h5"
//                 sx={{
//                   color: "primary.main",
//                   fontWeight: 800,

//                   fontSize: {
//                     xs: "1.35rem",
//                     md: "1.6rem",
//                   },
//                 }}
//               >
//                 विशेष अंक
//               </Typography>
//             </Box>

//             {/* Decorative Line */}
//             <Box
//               sx={{
//                 width: 110,
//                 height: 3,

//                 borderRadius: 10,

//                 backgroundColor: "secondary.main",

//                 mb: 3,
//               }}
//             />

//             {/* Cards */}
//             <Box
//               sx={{
//                 display: "grid",

//                 gridTemplateColumns: {
//                   xs: "1fr",
//                   sm: "repeat(2, minmax(0, 1fr))",
//                 },

//                 gap: {
//                   xs: 2,
//                   md: 2.5,
//                 },

//                 alignItems: "stretch",
//               }}
//             >
//               {specialIssues.map((issue) => (
//                 <Box
//                   key={issue.id}
//                   sx={{
//                     minWidth: 0,
//                     display: "flex",
//                   }}
//                 >
//                   <IssueItem
//                     title={issue.title}
//                     pdfUrl={issue.pdfUrl}
//                   />
//                 </Box>
//               ))}
//             </Box>
//           </Box>

//         ) : (

//           /* ================================================= */
//           /* COMING SOON */
//           /* ================================================= */

//           <Box
//             sx={{
//               minHeight: 300,

//               display: "flex",
//               flexDirection: "column",

//               alignItems: "center",
//               justifyContent: "center",

//               textAlign: "center",

//               borderRadius: 4,

//               backgroundColor: "background.paper",

//               border: "1px solid",
//               borderColor: "divider",

//               px: {
//                 xs: 3,
//                 md: 5,
//               },

//               py: {
//                 xs: 5,
//                 md: 7,
//               },
//             }}
//           >
//             {/* Icon */}
//             <Box
//               sx={{
//                 width: 64,
//                 height: 64,

//                 mb: 2.5,

//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",

//                 borderRadius: "50%",

//                 backgroundColor: "rgba(201, 138, 74, 0.12)",

//                 color: "primary.main",
//               }}
//             >
//               <AutoAwesomeRoundedIcon
//                 sx={{
//                   fontSize: 30,
//                 }}
//               />
//             </Box>

//             {/* Coming Soon */}
//             <Typography
//               variant="h5"
//               sx={{
//                 color: "primary.main",

//                 fontWeight: 800,

//                 fontSize: {
//                   xs: "1.4rem",
//                   md: "1.7rem",
//                 },

//                 mb: 1,
//               }}
//             >
//               विशेष अंक जल्द आ रहा है
//             </Typography>

//             <Typography
//               sx={{
//                 maxWidth: 560,

//                 color: "text.secondary",

//                 lineHeight: 1.8,

//                 fontSize: {
//                   xs: "0.95rem",
//                   md: "1rem",
//                 },
//               }}
//             >
//               चौखट के विशेष अंक पर कार्य प्रगति पर है।
//               बहुत जल्द यहाँ विशेष अंक उपलब्ध होगा।
//             </Typography>

//             {/* Accent */}
//             <Box
//               sx={{
//                 width: 55,
//                 height: 3,

//                 mt: 2.5,

//                 borderRadius: 10,

//                 backgroundColor: "secondary.main",
//               }}
//             />
//           </Box>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default SpecialIssue;

import React, { useEffect, useState } from "react";

import { Box, Container, Typography } from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import IssueItem from "../components/UI/Issue/IssueItem";
import { SkeletonLoader } from "../components/common/index";

const specialIssues = [
  {
    id: 1,
    year: 2025,
    title:
      "कार्य प्रगति पर है।",
    pdfUrl: "/files/special-issue-01.pdf",
  },
  {
    id: 2,
    year: 2025,
    title:
      "कार्य प्रगति पर है।",
    pdfUrl: "/files/special-issue-01.pdf",
  },
];

const SpecialIssue = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        py: {
          xs: 3,
          md: 5,
        },
      }}
    >
      <Container maxWidth="xl">
        {/* ================= HEADER ================= */}
        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 4,
              md: 5,
            },
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 58,
              height: 58,
              mx: "auto",
              mb: 1.5,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "50%",

              backgroundColor: "secondary.main",
              color: "primary.main",

              boxShadow: "0 8px 20px rgba(91, 44, 31, 0.10)",
            }}
          >
            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: 28,
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              fontWeight: 800,

              fontSize: {
                xs: "2rem",
                md: "3rem",
              },

              lineHeight: 1.2,
              mb: 1.2,
            }}
          >
            विशेष अंक
          </Typography>

          {/* Accent */}
          <Box
            sx={{
              width: 65,
              height: 4,
              mx: "auto",
              mb: 2,

              borderRadius: 10,

              backgroundColor: "secondary.main",
            }}
          />

          {/* Description */}
          <Typography
            sx={{
              maxWidth: 680,
              mx: "auto",

              color: "text.secondary",

              lineHeight: 1.8,

              fontSize: {
                xs: "0.95rem",
                md: "1rem",
              },
            }}
          >
            चौखट के विशेष अंकों को देखें और अपनी पसंद का अंक डाउनलोड करें।
          </Typography>
        </Box>

        {/* ================= LOADING ================= */}
        {loading ? (
          <Box
            sx={{
              borderRadius: 4,
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",

              p: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
            }}
          >
            <SkeletonLoader
              variant="text"
              width={150}
              height={35}
            />

            <Box
              sx={{
                mt: 0.5,
                mb: 3,
              }}
            >
              <SkeletonLoader
                variant="text"
                width={110}
                height={18}
              />
            </Box>

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                },

                gap: {
                  xs: 2,
                  md: 2.5,
                },
              }}
            >
              {[1, 2].map((item) => (
                <Box
                  key={item}
                  sx={{
                    minHeight: 190,
                    p: 2,

                    border: "1px solid",
                    borderColor: "divider",

                    borderRadius: 3,
                  }}
                >
                  <SkeletonLoader
                    variant="rounded"
                    width={48}
                    height={48}
                  />

                  <Box sx={{ mt: 2 }}>
                    <SkeletonLoader
                      variant="text"
                      width="90%"
                      height={25}
                    />

                    <SkeletonLoader
                      variant="text"
                      width="75%"
                      height={25}
                    />

                    <SkeletonLoader
                      variant="text"
                      width="55%"
                      height={25}
                    />
                  </Box>

                  <Box
                    sx={{
                      mt: 2,
                      pt: 1.5,

                      borderTop: "1px solid",
                      borderColor: "divider",

                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <SkeletonLoader
                      variant="text"
                      width={75}
                      height={25}
                    />

                    <SkeletonLoader
                      variant="circular"
                      width={40}
                      height={40}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          /* ================= SPECIAL ISSUES ================= */
          <Box
            sx={{
              borderRadius: 4,

              backgroundColor: "background.paper",

              border: "1px solid",
              borderColor: "divider",

              p: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
            }}
          >
            {/* Section Heading */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                mb: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 28,

                  borderRadius: 10,

                  backgroundColor: "secondary.main",
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,

                  fontSize: {
                    xs: "1.35rem",
                    md: "1.6rem",
                  },
                }}
              >
                विशेष अंक
              </Typography>
            </Box>

            {/* Decorative Line */}
            <Box
              sx={{
                width: 110,
                height: 3,

                borderRadius: 10,

                backgroundColor: "secondary.main",

                mb: 3,
              }}
            />

            {/* ================= CARDS ================= */}
            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                },

                gap: {
                  xs: 2,
                  md: 2.5,
                },

                alignItems: "stretch",
              }}
            >
              {specialIssues.map((issue) => (
                <Box
                  key={issue.id}
                  sx={{
                    minWidth: 0,
                    display: "flex",
                  }}
                >
                  <IssueItem
                    title={issue.title}
                    pdfUrl={issue.pdfUrl}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default SpecialIssue;