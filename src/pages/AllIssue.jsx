import React, { useEffect, useState } from "react";

import { Box, Container, Typography } from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import IssueListByYear from "../components/UI/Issue/IssueListByYear";
import { SkeletonLoader } from "../components/common/index";

const issues = [
  {
    id: 1,
    year: 2025,
    title:
      "स्त्री: संघर्ष से सृजन तक की यात्रा- अंकिता पटेल / Volume- 1, Issue- 01, Period-April-June 2025",
    pdfUrl: "/files/issue-01.pdf",
  },
  {
    id: 2,
    year: 2025,
    title:
      "पंडित तोताराम सनाढ्य के संस्मरणों में फिजी- डॉ. राजू कुमार / Volume- 1, Issue- 01, Period-April-June 2025",
    pdfUrl: "/files/issue-02.pdf",
  },
  {
    id: 3,
    year: 2025,
    title:
      "सिनेमा का कविता पाठ है छाया- तेजस पुनिया / Volume- 1, Issue- 01, Period-April-June 2025",
    pdfUrl: "/files/issue-03.pdf",
  },
  {
    id: 4,
    year: 2025,
    title:
      "कलम की ताकत- सुमन मौर्च / Volume- 1, Issue- 01, Period-April-June 2025",
    pdfUrl: "/files/issue-04.pdf",
  },
  {
    id: 5,
    year: 2025,
    title:
      "स्याही में डूबा दर्द- अभिषेक कुमार / Volume- 1, Issue- 01, Period-April-June 2025",
    pdfUrl: "/files/issue-05.pdf",
  },
  {
    id: 6,
    year: 2025,
    title:
      "वे चेहरा स्त्रियां- शैली / Volume- 1, Issue- 01, Period-April-June 2025",
    pdfUrl: "/files/issue-06.pdf",
  },
  {
    id: 7,
    year: 2025,
    title:
      "एक अनकही यात्रा- आमिर खान / Volume- 1, Issue- 01, Period-April-June 2025",
    pdfUrl: "/files/issue-07.pdf",
  },
  {
    id: 8,
    year: 2024,
    title:
      "साहित्य और समाज के बदलते स्वरूप / Volume- 1, Issue- 04, Period-January-March 2024",
    pdfUrl: "/files/issue-08.pdf",
  },
  {
    id: 9,
    year: 2024,
    title:
      "लोक साहित्य की नई दिशाएँ / Volume- 1, Issue- 03, Period-October-December 2024",
    pdfUrl: "/files/issue-09.pdf",
  },
  {
    id: 10,
    year: 2024,
    title:
      "कला और संस्कृति के विविध आयाम / Volume- 1, Issue- 02, Period-July-September 2024",
    pdfUrl: "/files/issue-10.pdf",
  },
];

const AllIssue = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Group issues by year
  const issuesByYear = issues.reduce((acc, issue) => {
    const year = issue.year;

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(issue);

    return acc;
  }, {});

  // Latest year first
  const sortedYears = Object.keys(issuesByYear).sort(
    (a, b) => Number(b) - Number(a),
  );

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
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <CalendarMonthRoundedIcon
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
            सभी अंक
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
            चौखट के सभी प्रकाशित अंकों को वर्ष के अनुसार देखें और अपनी पसंद का
            अंक डाउनलोड करें।
          </Typography>
        </Box>

        {/* ================= LOADING ================= */}
        {loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: {
                xs: 3,
                md: 4,
              },
            }}
          >
            {[1, 2, 3].map((yearSkeleton) => (
              <Box
                key={yearSkeleton}
                sx={{
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  p: {
                    xs: 2,
                    md: 3,
                  },
                }}
              >
                {/* Year Skeleton */}
                <SkeletonLoader variant="text" width={120} height={35} />

                <Box
                  sx={{
                    width: 110,
                    mt: 0.5,
                    mb: 3,
                  }}
                >
                  <SkeletonLoader variant="text" width={110} height={18} />
                </Box>

                {/* Cards Skeleton */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, 1fr)",
                    },
                    gap: {
                      xs: 2,
                      md: 2.5,
                    },
                  }}
                >
                  {[1, 2, 3, 4].map((card) => (
                    <Box
                      key={card}
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
                        <SkeletonLoader variant="text" width={75} height={25} />

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
            ))}
          </Box>
        ) : (
          /* ================= ISSUES ================= */
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: {
                xs: 3,
                md: 4,
              },
            }}
          >
            {sortedYears.map((year) => (
              <Box
                key={year}
                sx={{
                  p: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                  },
                  borderRadius: 4,
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <IssueListByYear year={year} issues={issuesByYear[year]} />
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default AllIssue;
