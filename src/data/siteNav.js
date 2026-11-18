// Single source of truth for the megamenu structure. The navbar builds its
// menus from this list and the router builds one page per entry, so labels and
// URLs can never drift apart.
export const navSections = [
  {
    label: "عن وسام",
    basePath: "/about-wisam",
    pages: [
      { label: "من نحن (قصة وسام)", slug: "story" }, //
      {
        label: "الجمعية العمومية",
        slug: "general-assembly",
        children: [
          { label: "الأعضاء", slug: "members" },
          { label: "المحاضر", slug: "minutes" },
        ],
      },
      {
        label: "مجلس الإدارة",
        slug: "board-of-directors",
        children: [
          { label: "الأعضاء", slug: "members" },
          { label: "المحاضر", slug: "minutes" },
          { label: "القرارات", slug: "resolutions" },
        ],
      },
      { label: "المدير التنفيذي", slug: "executive-director" },
      { label: "التوجه الاستراتيجي", slug: "strategic-dir" },
      { label: "الهيكل التنظيمي", slug: "organizational-structure" },
    ],
  },
  {
    label: "الحوكمة",
    basePath: "/governance",
    pages: [
      { label: "  اللوائح و السياسات", slug: "policies-and-regulations" },

      { label: "الافصاح", slug: "legal-documents" },

      { label: "الاستثمار", slug: "committees" },
      { label: "القوائم المالية", slug: "financial-statements" },
      { label: "المحاضر والتوصيات", slug: "minutes-and-recommendations" },
    ],
  },
  {
    label: "برامجنا",
    basePath: "/our-programs",
    pages: [
      { label: "متحف وسام", slug: "wisam-museum" },
      { label: "متحف الطفل", slug: "children-museum" },
      { label: "مسرح وسام", slug: "wisam-theater" },
      { label: "مكتبه وسام", slug: "wisam-library" },
      { label: "محتبر الافكار", slug: "ideas-lab" },
      { label: "السينما", slug: "cinema" },
      { label: "معرض الطاقه", slug: "energy-exhibition" },
      { label: "اكاديميه وسام", slug: "wisam-academy" },
      { label: "تجارب المطعم", slug: "restaurant-experience" },
    ],
  },
  {
    label: "التقارير",
    basePath: "/reports",
    pages: [
      { label: "الملف التعريفي", slug: "profile" },
      { label: "تقرير المنجزات الربعية", slug: "quarterly-achievements" },
      { label: "التقرير المالية الربعية", slug: "quarterly-financial-reports" },
    ],
  },

  {
    label: "تواصل معنا",
    basePath: "/contact",
    pages: [
      { label: "زرنا ", slug: "visit", page: "visit" },
      { label: "شاركنا رأيك", slug: "feedback", page: "feedback" },
      { label: "اتصل بنا", slug: "contact-us", page: "contact-us" },
      { label: "قيم تجربتك معنا", slug: "rate-experience", page: "rate-experience" },
    ],
  },
  {
    label: "المركز الإعلامي",
    basePath: "/media-center",
    pages: [
      { label: "المركز الاعلامي", slug: "news", page: "news" },
      // { label: "جمال اللقطة | صور", slug: "photos" },
      // { label: "روعة اللحظة | فديو", slug: "videos" },
    ],
  },
  {
    label: "انضم لفريقنا",
    basePath: "/join-us",
    pages: [
      { label: "تطوع", slug: "volunteer", page: "volunteer" },
      { label: "توظيف", slug: "careers", page: "careers" },
    ],
  },
];
