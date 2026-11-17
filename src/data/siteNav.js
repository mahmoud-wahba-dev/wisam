// Single source of truth for the megamenu structure. The navbar builds its
// menus from this list and the router builds one page per entry, so labels and
// URLs can never drift apart.
export const navSections = [
  {
    label: "عن وسام",
    basePath: "/about-wisam",
    pages: [
      { label: "من نحن (قصة وسام)", slug: "story" }, //
      { label: "الجمعية العمومية", slug: "general-assembly" },
      { label: "مجلس الإدارة", slug: "board-of-directors" },
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
      { label: "القوائم الماليه", slug: "satisfaction-survey" },
      { label: "المحاضر والتوصيات", slug: "satisfaction-survey" },
    ],
  },
  {
    label: "برامجنا",
    basePath: "/reports",
    pages: [
      { label: "متحف وسام", slug: "profile" },
      { label: "متحف الطفل", slug: "quarterly-achievements" },
      { label: "مسرح وسام", slug: "financial-statements" },
      { label: "مكتبه وسام", slug: "quarterly-financial-reports" },
      { label: "محتبر الافكار", slug: "quarterly-financial-reports" },
      { label: "السينما", slug: "quarterly-financial-reports" },
      { label: "معرض الطاقه", slug: "quarterly-financial-reports" },
      { label: "اكاديميه وسام", slug: "quarterly-financial-reports" },
      { label: "تجارب المطعم", slug: "quarterly-financial-reports" },
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
      { label: "زرنا ", slug: "profile" },
      { label: "شاركنا رأيك", slug: "quarterly-achievements" },
      { label: "اتصل بنا", slug: "quarterly-financial-reports" },
      { label: "قيم تجربتك معنا", slug: "quarterly-financial-reports" },
    ],
  },
  {
    label: "المركز الإعلامي",
    basePath: "/media-center",
    pages: [
      { label: "أخبار وسام", slug: "news", page: "news" },
      { label: "جمال اللقطة | صور", slug: "photos" },
      { label: "روعة اللحظة | فديو", slug: "videos" },
    ],
  },
  {
    label: "انضم لفريقنا",
    basePath: "/media-center",
    pages: [
      { label: "تطوع", slug: "news", page: "news" },
      { label: "توظيف", slug: "news", page: "news" },
    ],
  },
];
