// src/data/mediaData.js

const mediaCategories = [
  {
    label: "साक्षात्कार",
    value: "interview",
    href: "/media/interview",
  },
  {
    label: "सांस्कृतिक कार्यक्रम",
    value: "cultural-events",
    href: "/media/cultural-events",
  },
  {
    label: "रंगमंच",
    value: "theatre",
    href: "/media/theatre",
  },
  {
    label: "सिनेमा",
    value: "cinema",
    href: "/media/cinema",
  },
  {
    label: "चर्चा-परिचर्चा",
    value: "discussions",
    href: "/media/discussions",
  },
  {
    label: "कार्यशाला",
    value: "workshop",
    href: "/media/workshop",
  },
  {
    label: "कला कलश",
    value: "art-corner",
    href: "/media/art-corner",
  },
];

const mediaItems = [
  // --------------------------------------------------
  // Interview
  // --------------------------------------------------
  {
    id: 1,
    category: "interview",
    title: "साहित्यकार से विशेष बातचीत",
    description: "हिंदी साहित्य और समकालीन रचनात्मकता पर विशेष संवाद।",
    imageUrl: "https://picsum.photos/seed/interview1/1200/700",
    link: "/media/interview/1",
  },
  {
    id: 2,
    category: "interview",
    title: "रचनाकार संवाद",
    description: "साहित्य और समाज से जुड़े महत्वपूर्ण विषयों पर बातचीत।",
    imageUrl: "https://picsum.photos/seed/interview2/1200/700",
  },

  // --------------------------------------------------
  // Cultural Events
  // --------------------------------------------------
  {
    id: 3,
    category: "cultural-events",
    title: "सांस्कृतिक संध्या",
    description: "कला, साहित्य और संस्कृति से जुड़ा विशेष आयोजन।",
    imageUrl: "https://picsum.photos/seed/culture1/1200/700",
    link: "/media/cultural-events/3",
  },
  {
    id: 4,
    category: "cultural-events",
    title: "साहित्यिक कार्यक्रम",
    description: "रचनाकारों और साहित्य प्रेमियों की विशेष सांस्कृतिक सहभागिता।",
    imageUrl: "https://picsum.photos/seed/culture2/1200/700",
  },

  // --------------------------------------------------
  // Theatre
  // --------------------------------------------------
  {
    id: 5,
    category: "theatre",
    title: "नाट्य प्रस्तुति",
    description: "रंगमंच की दुनिया से जुड़ी विशेष प्रस्तुतियां।",
    imageUrl: "https://picsum.photos/seed/theatre1/1200/700",
    link: "/media/theatre/5",
  },
  {
    id: 6,
    category: "theatre",
    title: "रंगमंच और समाज",
    description: "नाटक और सामाजिक सरोकारों पर आधारित प्रस्तुति।",
    imageUrl: "https://picsum.photos/seed/theatre2/1200/700",
  },
  {
    id: 7,
    category: "theatre",
    title: "विशेष रंगमंच प्रस्तुति",
    description: "भारतीय रंगमंच की रचनात्मक परंपरा की झलक।",
    imageUrl: "https://picsum.photos/seed/theatre3/1200/700",
  },

  // --------------------------------------------------
  // Cinema
  // --------------------------------------------------
  {
    id: 8,
    category: "cinema",
    title: "सिनेमा पर विशेष चर्चा",
    description: "भारतीय सिनेमा और उसकी सामाजिक भूमिका पर बातचीत।",
    imageUrl: "https://picsum.photos/seed/cinema1/1200/700",
    link: "/media/cinema/8",
  },
  {
    id: 9,
    category: "cinema",
    title: "साहित्य और सिनेमा",
    description: "साहित्यिक रचनाओं के सिनेमाई रूपांतरण पर विशेष चर्चा।",
    imageUrl: "https://picsum.photos/seed/cinema2/1200/700",
  },

  // --------------------------------------------------
  // Discussions
  // --------------------------------------------------
  {
    id: 10,
    category: "discussions",
    title: "चौखट पर चर्चा-परिचर्चा",
    description: "समकालीन साहित्यिक विषयों पर विचार-विमर्श।",
    imageUrl: "https://picsum.photos/seed/discussion1/1200/700",
    link: "/media/discussions/10",
  },
  {
    id: 11,
    category: "discussions",
    title: "साहित्य और समाज",
    description: "बदलते सामाजिक परिवेश में साहित्य की भूमिका।",
    imageUrl: "https://picsum.photos/seed/discussion2/1200/700",
  },

  // --------------------------------------------------
  // Workshop
  // --------------------------------------------------
  {
    id: 12,
    category: "workshop",
    title: "सृजनात्मक लेखन कार्यशाला",
    description: "रचनात्मक लेखन की बारीकियों पर केंद्रित कार्यशाला।",
    imageUrl: "https://picsum.photos/seed/workshop1/1200/700",
    link: "/media/workshop/12",
  },
  {
    id: 13,
    category: "workshop",
    title: "कविता लेखन कार्यशाला",
    description: "कविता लेखन और उसकी अभिव्यक्ति पर विशेष सत्र।",
    imageUrl: "https://picsum.photos/seed/workshop2/1200/700",
  },

  // --------------------------------------------------
  // Art Corner
  // --------------------------------------------------
  {
    id: 14,
    category: "art-corner",
    title: "कला कलश",
    description: "भारतीय कला और रचनात्मक अभिव्यक्तियों की विशेष प्रस्तुति।",
    imageUrl: "https://picsum.photos/seed/art1/1200/700",
    link: "/media/art-corner/14",
  },
  {
    id: 15,
    category: "art-corner",
    title: "कला की नई दृष्टि",
    description: "समकालीन कला से जुड़े रचनात्मक कार्यों की झलक।",
    imageUrl: "https://picsum.photos/seed/art2/1200/700",
  },
];

export { mediaCategories, mediaItems };
