import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      introduction: "Introduction",
      elibry: "E-Library",
      books: "Books",
      audioBooks: "Audio Books",
      textBooks: "Text Books",
      bookReviews: "Book Reviews",
      media: "Media",
      news: "News",
      thought: "Thought",
      allIssue: "All Issues",
      specialIssue: "Special Issue",
      archive: "Archive",
      rulesbook: "Rules Book",
      contactUs: "Contact Us",
      login: "Admin Log in",
    },
  },

  hi: {
    translation: {
      home: "होम",
      introduction: "परिचय",
      elibry: "ई-लाइब्रेरी",
      books: "पुस्तकें",
      audioBooks: "ऑडियो पुस्तकें",
      textBooks: "पाठ्यक्रम की पुस्तकें",
      bookReviews: "पुस्तक समीक्षाएँ",
      media: "मीडिया",
      news: "समाचार",
      thought: "विचार",
      allIssue: "सभी अंक",
      specialIssue: "विशेष अंक",
      archive: "संग्रह",
      rulesbook: "नियमावली",
      contactUs: "संपर्क करें",
      login: "व्यवस्थापक लॉगिन",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "hi",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;