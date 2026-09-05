// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutWrapper from "./components/Layout/LayoutWrapper";

import Home from "./pages/Home";

// Chaukhat Family
import Founder from "./pages/Founder";
import Patron from "./pages/Patron";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import EditorialBoard from "./pages/EditorialBoard";
import ExpertCommittee from "./pages/ExpertCommittee";
import ActiveMembers from "./pages/ActiveMembers";
import TechnicalTeam from "./pages/TechnicalTeam";

import Notices from "./pages/Notices";
import Intro from "./pages/Intro";
import Contact from "./pages/Contact";

import Libery from "./pages/Libery";
import Books from "./pages/Books";
import TextBooks from "./pages/TextBooks";
import AudioBooks from "./pages/AudioBooks";
import BookReviews from "./pages/BookReviews";

import Interview from "./pages/media/Interview";
import CulturalEvents from "./pages/media/CulturalEvents";
import Theatre from "./pages/media/Theatre";
import Cinema from "./pages/media/Cinema";
import Workshop from "./pages/media/Workshop";
import Discussions from "./pages/media/Discussions";
import ArtCorner from "./pages/media/ArtCorner";

import ChaukhatPar from "./pages/news/ChaukhatPar";
import KhabarSahityaKi from "./pages/news/KhabarSahityaKi";

import Patwar from "./pages/thought/Patwar";
import Lantern from "./pages/thought/Lantern";
import Idioms from "./pages/thought/Idioms";

import AllIssue from "./pages/AllIssue";
import SpecialIssue from "./pages/SpecialIssue";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";

import NotFound from "./pages/NotFound";

import AuthorsHome from "./pages/Archive/AuthorsHome";
import AuthorsMemories from "./pages/Archive/AuthorsMemories";
import Past from "./pages/Archive/Past";
import MuseumMemories from "./pages/Archive/MuseumMemories";

import Membership from "./pages/RulesBook/Membership";
import Publication from "./pages/RulesBook/Publication";
import Confirmation from "./pages/RulesBook/Confirmation";
import RulesBookPreview from "./pages/RulesBook/RulesBookPreview";

const App = () => {
  return (
    <LayoutWrapper>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/patron" element={<Patron />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/editorial-board" element={<EditorialBoard />} />
        <Route path="/expert-committee" element={<ExpertCommittee />} />
        <Route path="/active-members" element={<ActiveMembers />} />
        <Route path="/technical-team" element={<TechnicalTeam />} />

        {/* General */}
        <Route path="/notices" element={<Notices />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* Library */}
        <Route path="/libery" element={<Libery />} />
        <Route path="/libery/books" element={<Books />} />
        <Route path="/libery/text-books" element={<TextBooks />} />
        <Route path="/libery/audio-books" element={<AudioBooks />} />
        <Route path="/libery/book-reviews" element={<BookReviews />} />

        {/* Media */}
        <Route path="/media" element={<Interview />} />
        <Route path="/media/interview" element={<Interview />} />
        <Route path="/media/cultural-events" element={<CulturalEvents />} />
        <Route path="/media/theatre" element={<Theatre />} />
        <Route path="/media/cinema" element={<Cinema />} />
        <Route path="/media/discussions" element={<Discussions />} />
        <Route path="/media/workshop" element={<Workshop />} />
        <Route path="/media/art-corner" element={<ArtCorner />} />

        {/* news */}
        <Route path="/newus" element={<ChaukhatPar />} />
        <Route path="/newus/chaukhat-par" element={<ChaukhatPar />} />
        <Route path="/newus/khabar-sahitya-ki" element={<KhabarSahityaKi />} />

        {/* thought */}
        <Route path="/thought" element={<Patwar />} />
        <Route path="/thought/patwar" element={<Patwar />} />
        <Route path="/thought/lantern" element={<Lantern />} />
        <Route path="/thought/idioms" element={<Idioms />} />

        <Route path="/allissue" element={<AllIssue />} />
        <Route path="/Specialissu" element={<SpecialIssue />} />
        {/* archive */}
        <Route path="/archive" element={<AuthorsHome />} />
        <Route path="/archive/authors-home" element={<AuthorsHome />} />
        <Route path="/archive/authors-memories" element={<AuthorsMemories />} />
        <Route path="/archive/past" element={<Past />} />
        <Route path="/archive/museum-memories" element={<MuseumMemories />} />
        {/* rulesbook */}
        <Route path="/rulesbook" element={<Membership />} />
        <Route path="/rulesbook/membership" element={<Membership />} />
        <Route path="/rulesbook/publication" element={<Publication />} />
        <Route path="/rulesbook/confirmation" element={<Confirmation />} />
        <Route path="/rulesbook/preview" element={<RulesBookPreview />} />

        {/* Policies */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/copyright-policy" element={<CopyrightPolicy />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutWrapper>
  );
};

export default App;
