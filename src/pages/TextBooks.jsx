// import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";

// import BookCard from "../components/Library/BookCard";

// const textbooks = [
//   {
//     id: 1,
//     title: "हिंदी भाषा एवं व्याकरण",
//     imageSrc: "/default-placeholder.png",
//     pdfLink: "#",
//   },
//   {
//     id: 2,
//     title: "हिंदी साहित्य अध्ययन",
//     imageSrc: "/default-placeholder.png",
//     pdfLink: "#",
//   },
//   {
//     id: 3,
//     title: "भारतीय संस्कृति",
//     imageSrc: "/default-placeholder.png",
//     pdfLink: "#",
//   },
// ];

// const TextBooks = () => {
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
//             Text Books
//           </Typography>

//           <Typography sx={{ mt: 0.75, color: "#6B4F45" }}>
//             पाठ्य पुस्तकों का संग्रह
//           </Typography>
//         </Box>

//         <Grid container spacing={3}>
//           {textbooks.map((book) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
//               <BookCard
//                 title={book.title}
//                 imageSrc={book.imageSrc}
//                 pdfLink={book.pdfLink}
//                 buttonText="पुस्तक देखें"
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default TextBooks;

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import { AppCard, AppButton } from "../components/common/index";


const textbooks = [
  {
    id: 1,
    title: "हिंदी भाषा एवं व्याकरण",
    imageSrc: "/default-placeholder.png",
    pdfLink: "#",
  },
  {
    id: 2,
    title: "हिंदी साहित्य अध्ययन",
    imageSrc: "/default-placeholder.png",
    pdfLink: "#",
  },
  {
    id: 3,
    title: "भारतीय संस्कृति",
    imageSrc: "/default-placeholder.png",
    pdfLink: "#",
  },
  {
    id: 4,
    title: "भारतीय इतिहास और साहित्य",
    imageSrc: "/default-placeholder.png",
    pdfLink: "#",
  },
];

const TextBooks = () => {
  const handleOpenPdf = (url) => {
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
            Text Books
          </Typography>

          <Typography sx={{ mt: 1, color: "#6B4F45" }}>
            पाठ्य पुस्तकों का डिजिटल संग्रह
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {textbooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
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
                  src={book.imageSrc}
                  alt={book.title}
                  onError={(e) => {
                    e.currentTarget.src = "/default-placeholder.png";
                  }}
                  sx={{
                    width: "100%",
                    height: 280,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    p: 2,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#3B060A",
                      lineHeight: 1.5,
                    }}
                  >
                    {book.title}
                  </Typography>

                  <AppButton
                    fullWidth
                    startIcon={<MenuBookRoundedIcon />}
                    onClick={() => handleOpenPdf(book.pdfLink)}
                    sx={{
                      mt: "auto",
                      pt: 2,
                    }}
                  >
                    पुस्तक देखें
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

export default TextBooks;
