// import React from "react";
// import { Link } from "react-router-dom";

// import { Box, Typography } from "@mui/material";
// import {
//   ArrowForwardRounded,
//   NotificationsNoneRounded,
// } from "@mui/icons-material";

// import AppButton from "../Common/AppButton";

// const NoticeScroller = ({ notices = [] }) => {
//   return (
//     <Box
//       sx={{
//         p: 2,
//         borderRadius: 3,
//         backgroundColor: "#FFF8ED",
//         border: "1px solid rgba(59,6,10,0.09)",
//         overflow: "hidden",
//       }}
//     >
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           gap: 1,
//           mb: 1,
//         }}
//       >
//         <Box
//           sx={{
//             width: 34,
//             height: 34,
//             display: "grid",
//             placeItems: "center",
//             borderRadius: 1.5,
//             color: "primary.main",
//             backgroundColor: "rgba(234,166,77,0.15)",
//             flexShrink: 0,
//           }}
//         >
//           <NotificationsNoneRounded sx={{ fontSize: 19 }} />
//         </Box>

//         <Typography
//           sx={{
//             color: "primary.main",
//             fontSize: "0.95rem",
//             fontWeight: 800,
//           }}
//         >
//           मुख्य सूचनाएं
//         </Typography>
//       </Box>

//       {/* Scrollable Notices */}
//       <Box
//         sx={{
//           height: 260,
//           overflowY: "auto",
//           pr: 0.5,

//           scrollbarWidth: "thin",
//           scrollbarColor: "#D6B98A transparent",

//           "&::-webkit-scrollbar": {
//             width: 5,
//           },

//           "&::-webkit-scrollbar-track": {
//             backgroundColor: "transparent",
//           },

//           "&::-webkit-scrollbar-thumb": {
//             backgroundColor: "#D6B98A",
//             borderRadius: 10,
//           },

//           "&::-webkit-scrollbar-thumb:hover": {
//             backgroundColor: "#EAA64D",
//           },
//         }}
//       >
//         {notices.map((notice, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               gap: 1,
//               py: 1.2,
//               pr: 0.5,
//               borderBottom: index !== notices.length - 1 ? "1px solid" : "none",
//               borderColor: "divider",
//             }}
//           >
//             <Box
//               sx={{
//                 width: 6,
//                 height: 6,
//                 mt: 0.8,
//                 flexShrink: 0,
//                 borderRadius: "50%",
//                 backgroundColor: "secondary.main",
//               }}
//             />

//             <Typography
//               sx={{
//                 color: "text.secondary",
//                 fontSize: "0.74rem",
//                 lineHeight: 1.55,
//               }}
//             >
//               {notice}
//             </Typography>
//           </Box>
//         ))}
//       </Box>

//       {/* All Notices */}
//       <AppButton
//         component={Link}
//         to="/notices"
//         variant="outlined"
//         color="primary"
//         endIcon={<ArrowForwardRounded />}
//         sx={{
//           mt: 1.5,
//           fontSize: "0.74rem",
//         }}
//       >
//         सभी सूचनाएं
//       </AppButton>
//     </Box>
//   );
// };

// export default NoticeScroller;

import React from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import {
  ArrowForwardRounded,
  NotificationsNoneRounded,
} from "@mui/icons-material";

import AppButton from "../Common/AppButton";

const NoticeScroller = ({ notices = [] }) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: "#FFF8ED",
        border: "1px solid rgba(59,6,10,0.09)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
        }}
      >
        <Box
          sx={{
            width: 34,
            height: 34,
            display: "grid",
            placeItems: "center",
            borderRadius: 1.5,
            color: "primary.main",
            backgroundColor: "rgba(234,166,77,0.15)",
            flexShrink: 0,
          }}
        >
          <NotificationsNoneRounded sx={{ fontSize: 19 }} />
        </Box>

        <Typography
          sx={{
            color: "primary.main",
            fontSize: "0.95rem",
            fontWeight: 800,
          }}
        >
          मुख्य सूचनाएं
        </Typography>
      </Box>

      {/* Scrollable Notices */}
      <Box
        sx={{
          height: 260,
          overflowY: "auto",
          pr: 0.5,

          scrollbarWidth: "thin",
          scrollbarColor: "#D6B98A transparent",

          "&::-webkit-scrollbar": {
            width: 5,
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#D6B98A",
            borderRadius: 10,
          },

          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#EAA64D",
          },
        }}
      >
        {notices.map((notice, index) => {
          // Old string format भी support रहेगा
          const title = typeof notice === "string" ? notice : notice?.title;

          const link = typeof notice === "string" ? "" : notice?.link;

          const hasLink = Boolean(link);

          // External URL check
          const isExternalLink =
            hasLink && /^(https?:\/\/|mailto:|tel:)/i.test(link);

          return (
            <Box
              key={notice?.id || index}
              sx={{
                display: "flex",
                gap: 1,
                py: 1.2,
                pr: 0.5,
                borderBottom:
                  index !== notices.length - 1 ? "1px solid" : "none",
                borderColor: "divider",
              }}
            >
              {/* Bullet */}
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  mt: 0.8,
                  flexShrink: 0,
                  borderRadius: "50%",
                  backgroundColor: "secondary.main",
                }}
              />

              {/* Notice */}
              {hasLink ? (
                isExternalLink ? (
                  <Typography
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "primary.main",
                      fontSize: "0.74rem",
                      lineHeight: 1.55,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.2s ease",

                      "&:hover": {
                        color: "secondary.dark",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {title}
                  </Typography>
                ) : (
                  <Typography
                    component={Link}
                    to={link}
                    sx={{
                      color: "primary.main",
                      fontSize: "0.74rem",
                      lineHeight: 1.55,
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.2s ease",

                      "&:hover": {
                        color: "secondary.dark",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {title}
                  </Typography>
                )
              ) : (
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.74rem",
                    lineHeight: 1.55,
                  }}
                >
                  {title}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>

      {/* All Notices */}
      <AppButton
        component={Link}
        to="/notices"
        variant="outlined"
        color="primary"
        endIcon={<ArrowForwardRounded />}
        sx={{
          mt: 1.5,
          fontSize: "0.74rem",
        }}
      >
        सभी सूचनाएं
      </AppButton>
    </Box>
  );
};

export default NoticeScroller;
