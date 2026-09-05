// import React from "react";

// import { Box, Container, Typography } from "@mui/material";

// import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// import { Link, useNavigate } from "react-router-dom";

// import { AppChip, AppButton } from "../common/index";

// import chaukhatFamilyLinks from "../../data/chaukhatFamilyData";

// const FamilyLayout = ({ title, description, active, children }) => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         py: {
//           xs: 3,
//           md: 5,
//         },
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* Back Button */}
//         <Box sx={{ mb: 2.5 }}>
//           <AppButton
//             variant="outlined"
//             startIcon={<ArrowBackRoundedIcon />}
//             onClick={() => navigate("/")}
//           >
//             वापस
//           </AppButton>
//         </Box>

//         {/* Main Layout */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               md: "minmax(0, 1fr) 280px",
//             },
//             gap: {
//               xs: 2.5,
//               md: 3,
//             },
//             alignItems: "start",
//           }}
//         >
//           {/* =================================
//               MAIN CONTENT
//           ================================= */}
//           <Box
//             sx={{
//               minWidth: 0,
//               p: {
//                 xs: 2.5,
//                 md: 4,
//               },
//               borderRadius: 3,
//               backgroundColor: "#FFF8ED",
//               border: "1px solid rgba(59, 6, 10, 0.10)",
//               boxShadow: "0 5px 22px rgba(59, 6, 10, 0.04)",
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "primary.main",
//                 fontWeight: 800,
//                 fontSize: {
//                   xs: "1.7rem",
//                   md: "2.2rem",
//                 },
//                 mb: 1,
//               }}
//             >
//               {title}
//             </Typography>

//             {description && (
//               <Typography
//                 sx={{
//                   color: "text.secondary",
//                   lineHeight: 1.8,
//                   maxWidth: 760,
//                 }}
//               >
//                 {description}
//               </Typography>
//             )}

//             <Box sx={{ mt: 3 }}>{children}</Box>
//           </Box>

//           {/* =================================
//               CHAUKHAT FAMILY NAVIGATION
//           ================================= */}
//           <Box
//             sx={{
//               minWidth: 0,
//               p: 2,
//               borderRadius: 3,
//               backgroundColor: "#FFF8ED",
//               border: "1px solid rgba(59, 6, 10, 0.10)",
//               boxShadow: "0 5px 22px rgba(59, 6, 10, 0.04)",
//             }}
//           >
//             <Typography
//               sx={{
//                 color: "primary.main",
//                 fontWeight: 800,
//                 mb: 1.5,
//                 fontSize: "1rem",
//               }}
//             >
//               चौखट परिवार
//             </Typography>

//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: {
//                   xs: "row",
//                   md: "column",
//                 },
//                 gap: 0.8,
//                 overflowX: {
//                   xs: "auto",
//                   md: "visible",
//                 },
//                 pb: {
//                   xs: 0.5,
//                   md: 0,
//                 },

//                 scrollbarWidth: "thin",

//                 "&::-webkit-scrollbar": {
//                   height: 5,
//                 },

//                 "&::-webkit-scrollbar-track": {
//                   backgroundColor: "transparent",
//                 },

//                 "&::-webkit-scrollbar-thumb": {
//                   backgroundColor: "#D6B98A",
//                   borderRadius: 10,
//                 },
//               }}
//             >
//               {chaukhatFamilyLinks.map((item) => (
//                 <AppChip
//                   key={item.value}
//                   label={item.label}
//                   active={item.value === active}
//                   clickable
//                   component={Link}
//                   to={item.href}
//                   size="small"
//                   sx={{
//                     flexShrink: 0,

//                     width: {
//                       xs: "auto",
//                       md: "100%",
//                     },

//                     justifyContent: {
//                       xs: "center",
//                       md: "flex-start",
//                     },

//                     "& .MuiChip-label": {
//                       px: 1.2,
//                     },
//                   }}
//                 />
//               ))}
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default FamilyLayout;

import React from "react";

import { Box, Container, Typography } from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { Link, useNavigate } from "react-router-dom";

import { AppChip, AppButton } from "../common/index";

import chaukhatFamilyLinks from "../../data/chaukhatFamilyData";

const FamilyLayout = ({ title, description, active, children }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        py: {
          xs: 3,
          md: 5,
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Back Button */}
        <Box sx={{ mb: 2.5 }}>
          <AppButton
            variant="outlined"
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => navigate("/")}
          >
            वापस
          </AppButton>
        </Box>

        {/* Main Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1fr) 280px",
            },
            gap: {
              xs: 2.5,
              md: 3,
            },
            alignItems: "start",
          }}
        >
          {/* =================================
              CHAUKHAT FAMILY NAVIGATION
              Mobile: TOP
              Desktop: RIGHT
          ================================= */}
          <Box
            sx={{
              minWidth: 0,

              // Mobile par sabse pehle
              // Desktop par right side
              order: {
                xs: 1,
                md: 2,
              },

              p: 2,
              borderRadius: 3,
              backgroundColor: "#FFF8ED",
              border: "1px solid rgba(59, 6, 10, 0.10)",
              boxShadow: "0 5px 22px rgba(59, 6, 10, 0.04)",
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 800,
                mb: 1.5,
                fontSize: "1rem",
              }}
            >
              चौखट परिवार
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(3, minmax(0, 1fr))",
                  md: "1fr",
                },
                gap: 1,
                width: "100%",
              }}
            >
              {chaukhatFamilyLinks.map((item) => (
                <AppChip
                  key={item.value}
                  label={item.label}
                  active={item.value === active}
                  clickable
                  component={Link}
                  to={item.href}
                  size="small"
                  sx={{
                    width: "100%",
                    minWidth: 0,

                    "& .MuiChip-label": {
                      px: {
                        xs: 0.4,
                        sm: 0.7,
                        md: 1.2,
                      },
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* =================================
              MAIN CONTENT
              Mobile: BELOW NAVIGATION
              Desktop: LEFT
          ================================= */}
          <Box
            sx={{
              minWidth: 0,

              // Mobile par navigation ke neeche
              // Desktop par left side
              order: {
                xs: 2,
                md: 1,
              },

              p: {
                xs: 2.5,
                md: 4,
              },
              borderRadius: 3,
              backgroundColor: "#FFF8ED",
              border: "1px solid rgba(59, 6, 10, 0.10)",
              boxShadow: "0 5px 22px rgba(59, 6, 10, 0.04)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                fontSize: {
                  xs: "1.7rem",
                  md: "2.2rem",
                },
                mb: 1,
              }}
            >
              {title}
            </Typography>

            {description && (
              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  maxWidth: 760,
                }}
              >
                {description}
              </Typography>
            )}

            <Box sx={{ mt: 3 }}>{children}</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FamilyLayout;
