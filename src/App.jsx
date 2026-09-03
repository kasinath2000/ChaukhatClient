// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Nav/NavBar";

// // Pages
// import Home from "./pages/Home";
// // import Introduction from "./pages/Introduction/Introduction";

// // import Books from "./pages/Library/Books";
// // import AudioBooks from "./pages/Library/AudioBooks";
// // import TextBooks from "./pages/Library/TextBooks";
// // import BookReviews from "./pages/Library/BookReviews";

// // import Media from "./pages/Media/Media";
// // import News from "./pages/News/News";
// // import Thought from "./pages/Thought/Thought";

// // import AllIssue from "./pages/Issue/AllIssue";
// // import SpecialIssue from "./pages/Issue/SpecialIssue";

// // import Archive from "./pages/Archive/Archive";
// // import RulesBook from "./pages/RulesBook/RulesBook";
// // import ContactUs from "./pages/ContactUs/ContactUs";

// const App = () => {
//   return (
//     <>
//       {/* Client Background */}
//       <Navbar />

//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* Introduction */}
//         {/* <Route path="/intro" element={<Introduction />} /> */}

//         {/* E-Library */}
//         {/* <Route path="/libery/books" element={<Books />} />
//         <Route path="/libery/audio-books" element={<AudioBooks />} />
//         <Route path="/libery/text-books" element={<TextBooks />} />
//         <Route path="/libery/book-reviews" element={<BookReviews />} /> */}

//         {/* Main Navigation */}
//         {/* <Route path="/media" element={<Media />} />
//         <Route path="/newus" element={<News />} />
//         <Route path="/thought" element={<Thought />} /> */}

//         {/* Issues */}
//         {/* <Route path="/allissue" element={<AllIssue />} />
//         <Route path="/Specialissu" element={<SpecialIssue />} /> */}

//         {/* Other */}
//         {/* <Route path="/archive" element={<Archive />} />
//         <Route path="/rulesbook" element={<RulesBook />} />
//         <Route path="/contact-us" element={<ContactUs />} /> */}
//       </Routes>
//     </>
//   );
// };

// export default App;


// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWrapper from "./components/Layout/LayoutWrapper";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <LayoutWrapper>
      <Routes>
        {/* Client Home */}
        <Route path="/" element={<Home />} />

        {/* Other client routes will be added later */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/copyright-policy" element={<CopyrightPolicy />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutWrapper>
  );
};

export default App;