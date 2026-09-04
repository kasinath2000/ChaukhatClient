// import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";

// import BookCard from "../components/Library/BookCard";

// const reviews = [
//   {
//     id: 1,
//     title: "हिंदी साहित्य का नया परिदृश्य",
//     imageSrc: "/default-placeholder.png",
//     pdfLink: "#",
//   },
//   {
//     id: 2,
//     title: "समकालीन कविता की संवेदना",
//     imageSrc: "/default-placeholder.png",
//     pdfLink: "#",
//   },
// ];

// const BookReviews = () => {
//   return (
//     <Box sx={{ py: { xs: 3, md: 5 } }}>
//       <Container maxWidth="xl">
//         <Box sx={{ mb: 4 }}>
//           <Typography
//             variant="h4"
//             sx={{
//               color: "#3B060A",
//               fontWeight: 800,
//             }}
//           >
//             पुस्तक समीक्षाएं
//           </Typography>

//           <Typography sx={{ mt: 0.75, color: "#6B4F45" }}>
//             पुस्तकों से संबंधित समीक्षाएं और साहित्यिक सामग्री
//           </Typography>
//         </Box>

//         <Grid container spacing={3}>
//           {reviews.map((book) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
//               <BookCard
//                 title={book.title}
//                 imageSrc={book.imageSrc}
//                 pdfLink={book.pdfLink}
//                 buttonText="समीक्षा पढ़ें"
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default BookReviews;

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";

import { AppCard, AppButton } from "../components/common/index";


const reviews = [
  {
    id: 1,
    title: "हिंदी साहित्य का नया परिदृश्य",
    description:
      "समकालीन हिंदी साहित्य की प्रवृत्तियों और बदलते साहित्यिक परिवेश पर आधारित समीक्षा।",
    imageSrc: "/default-placeholder.png",
    link: "#",
  },
  {
    id: 2,
    title: "समकालीन कविता की संवेदना",
    description:
      "आधुनिक कविता की भाषा, भावभूमि और सामाजिक सरोकारों पर केंद्रित पुस्तक समीक्षा।",
    imageSrc: "/default-placeholder.png",
    link: "#",
  },
  {
    id: 3,
    title: "भारतीय संस्कृति और साहित्य",
    description:
      "भारतीय सांस्कृतिक परंपरा और साहित्य के आपसी संबंधों पर एक विस्तृत अध्ययन।",
    imageSrc: "/default-placeholder.png",
    link: "#",
  },
];

const BookReviews = () => {
  const handleRead = (url) => {
    if (!url || url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#3B060A",
            }}
          >
            पुस्तक समीक्षाएं
          </Typography>

          <Typography sx={{ mt: 1, color: "#6B4F45" }}>
            पुस्तकों से संबंधित समीक्षाएं और साहित्यिक सामग्री
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid item xs={12} sm={6} md={4} key={review.id}>
              <AppCard
                sx={{
                  p: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  src={review.imageSrc}
                  alt={review.title}
                  onError={(e) => {
                    e.currentTarget.src = "/default-placeholder.png";
                  }}
                  sx={{
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    p: 2.5,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "#3B060A",
                      lineHeight: 1.5,
                    }}
                  >
                    {review.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: "#6B4F45",
                      lineHeight: 1.7,
                      fontSize: "0.9rem",
                    }}
                  >
                    {review.description}
                  </Typography>

                  <AppButton
                    variant="outlined"
                    startIcon={<AutoStoriesRoundedIcon />}
                    onClick={() => handleRead(review.link)}
                    sx={{
                      mt: 2,
                      alignSelf: "flex-start",
                    }}
                  >
                    समीक्षा पढ़ें
                  </AppButton>
                </Box>
              </AppCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BookReviews;
