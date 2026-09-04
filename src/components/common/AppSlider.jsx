// // src/components/common/AppSlider/AppSlider.jsx

// import React, { useEffect, useState } from "react";

// import { Box, IconButton } from "@mui/material";

// import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
// import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

// const AppSlider = ({
//   items = [],
//   renderSlide,

//   autoPlay = true,
//   interval = 5000,

//   showArrows = true,
//   showDots = true,

//   loop = true,

//   height = {
//     xs: 300,
//     sm: 400,
//     md: 500,
//   },

//   borderRadius = 4,

//   sx = {},
// }) => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const totalSlides = items.length;

//   useEffect(() => {
//     setActiveSlide(0);
//   }, [items]);

//   useEffect(() => {
//     if (!autoPlay || totalSlides <= 1) return;

//     const timer = setInterval(() => {
//       setActiveSlide((prev) => {
//         if (prev === totalSlides - 1) {
//           return loop ? 0 : prev;
//         }

//         return prev + 1;
//       });
//     }, interval);

//     return () => clearInterval(timer);
//   }, [autoPlay, interval, loop, totalSlides]);

//   const nextSlide = () => {
//     setActiveSlide((prev) => {
//       if (prev === totalSlides - 1) {
//         return loop ? 0 : prev;
//       }

//       return prev + 1;
//     });
//   };

//   const previousSlide = () => {
//     setActiveSlide((prev) => {
//       if (prev === 0) {
//         return loop ? totalSlides - 1 : 0;
//       }

//       return prev - 1;
//     });
//   };

//   if (!totalSlides) {
//     return null;
//   }

//   const currentItem = items[activeSlide];

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height,
//         overflow: "hidden",
//         borderRadius,
//         ...sx,
//       }}
//     >
//       {/* Current Slide */}
//       <Box
//         sx={{
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         {renderSlide(currentItem, activeSlide)}
//       </Box>

//       {/* Navigation Arrows */}
//       {showArrows && totalSlides > 1 && (
//         <>
//           <IconButton
//             onClick={previousSlide}
//             aria-label="पिछली स्लाइड"
//             sx={{
//               position: "absolute",
//               left: { xs: 10, md: 20 },
//               top: "50%",
//               transform: "translateY(-50%)",
//               zIndex: 2,

//               width: 42,
//               height: 42,

//               backgroundColor: "rgba(255,255,255,0.92)",
//               color: "primary.main",

//               "&:hover": {
//                 backgroundColor: "secondary.main",
//               },
//             }}
//           >
//             <ArrowBackIosNewRoundedIcon fontSize="small" />
//           </IconButton>

//           <IconButton
//             onClick={nextSlide}
//             aria-label="अगली स्लाइड"
//             sx={{
//               position: "absolute",
//               right: { xs: 10, md: 20 },
//               top: "50%",
//               transform: "translateY(-50%)",
//               zIndex: 2,

//               width: 42,
//               height: 42,

//               backgroundColor: "rgba(255,255,255,0.92)",
//               color: "primary.main",

//               "&:hover": {
//                 backgroundColor: "secondary.main",
//               },
//             }}
//           >
//             <ArrowForwardIosRoundedIcon fontSize="small" />
//           </IconButton>
//         </>
//       )}

//       {/* Dots */}
//       {showDots && totalSlides > 1 && (
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 18,
//             left: "50%",
//             transform: "translateX(-50%)",
//             zIndex: 2,

//             display: "flex",
//             alignItems: "center",
//             gap: 0.8,
//           }}
//         >
//           {items.map((item, index) => (
//             <Box
//               key={item?.id ?? index}
//               component="button"
//               type="button"
//               aria-label={`स्लाइड ${index + 1}`}
//               onClick={() => setActiveSlide(index)}
//               sx={{
//                 width: index === activeSlide ? 22 : 8,
//                 height: 8,

//                 padding: 0,
//                 border: 0,
//                 borderRadius: 10,

//                 backgroundColor:
//                   index === activeSlide
//                     ? "secondary.main"
//                     : "rgba(255,255,255,0.55)",

//                 cursor: "pointer",

//                 transition: "all 0.25s ease",

//                 "&:hover": {
//                   backgroundColor: "secondary.main",
//                 },
//               }}
//             />
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default AppSlider;


import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const AppSlider = ({
  items = [],
  renderSlide,
  getSlideLink,

  autoPlay = true,
  interval = 5000,

  showArrows = true,
  showDots = true,
  loop = true,

  height = {
    xs: 300,
    sm: 400,
    md: 500,
  },

  borderRadius = 4,
  sx = {},
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = items.length;

  useEffect(() => {
    setActiveSlide(0);
  }, [items]);

  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        if (prev === totalSlides - 1) {
          return loop ? 0 : prev;
        }

        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, loop, totalSlides]);

  const nextSlide = () => {
    setActiveSlide((prev) => {
      if (prev === totalSlides - 1) {
        return loop ? 0 : prev;
      }

      return prev + 1;
    });
  };

  const previousSlide = () => {
    setActiveSlide((prev) => {
      if (prev === 0) {
        return loop ? totalSlides - 1 : 0;
      }

      return prev - 1;
    });
  };

  if (!totalSlides) return null;

  const currentItem = items[activeSlide];
  const slideLink = getSlideLink?.(currentItem);

  const slideContent = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      {renderSlide(currentItem, activeSlide)}
    </Box>
  );

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        borderRadius,
        ...sx,
      }}
    >
      {/* Slide */}
      {slideLink ? (
        <Box
          component={Link}
          to={slideLink}
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {slideContent}
        </Box>
      ) : (
        slideContent
      )}

      {/* Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <IconButton
            onClick={previousSlide}
            aria-label="पिछली स्लाइड"
            sx={{
              position: "absolute",
              left: { xs: 10, md: 20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              width: 42,
              height: 42,
              backgroundColor: "rgba(255,255,255,0.92)",
              color: "primary.main",

              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            <ArrowBackIosNewRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            aria-label="अगली स्लाइड"
            sx={{
              position: "absolute",
              right: { xs: 10, md: 20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              width: 42,
              height: 42,
              backgroundColor: "rgba(255,255,255,0.92)",
              color: "primary.main",

              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            <ArrowForwardIosRoundedIcon fontSize="small" />
          </IconButton>
        </>
      )}

      {/* Dots */}
      {showDots && totalSlides > 1 && (
        <Box
          sx={{
            position: "absolute",
            bottom: 18,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            gap: 0.8,
          }}
        >
          {items.map((item, index) => (
            <Box
              key={item?.id ?? index}
              component="button"
              type="button"
              aria-label={`स्लाइड ${index + 1}`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setActiveSlide(index);
              }}
              sx={{
                width: index === activeSlide ? 22 : 8,
                height: 8,
                p: 0,
                border: 0,
                borderRadius: 10,
                backgroundColor:
                  index === activeSlide
                    ? "secondary.main"
                    : "rgba(255,255,255,0.55)",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AppSlider;