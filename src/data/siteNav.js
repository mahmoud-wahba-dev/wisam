// Single source of truth for the megamenu structure. The navbar builds its
// menus from this list and the router builds one page per entry, so labels and
// URLs can never drift apart.
export const navSections = [
  {
    label: "عن وسام",
    basePath: "/about-wisam",
    pages: [
      { label: "قصة وسام", slug: "story" },
      { label: "الإطار الاستراتيجي", slug: "strategic-framework" },
      { label: "نموذج العمل", slug: "business-model" },
      { label: "الهيكل التنظيمي", slug: "organizational-structure" },
      { label: "الجمعية العمومية", slug: "general-assembly" },
      { label: "مجلس الإدارة", slug: "board-of-directors" },
      { label: "المدير التنفيذي", slug: "executive-director" },
    ],
  },
  {
    label: "الحوكمة",
    basePath: "/governance",
    pages: [
      { label: "الوثائق النظامية", slug: "legal-documents" },
      {
        label: "الاجتماعات ( الجمعية العمومية - مجلس الإدارة)",
        slug: "meetings",
      },
      { label: "السياسات واللوائح", slug: "policies-and-regulations" },
      { label: "اللجان", slug: "committees" },
      { label: "قياس الرضا", slug: "satisfaction-survey" },
    ],
  },
  {
    label: "التقارير",
    basePath: "/reports",
    pages: [
      { label: "الملف التعريفي", slug: "profile" },
      { label: "تقرير المنجزات الربعية", slug: "quarterly-achievements" },
      { label: "القوائم المالية", slug: "financial-statements" },
      { label: "التقرير المالية الربعية", slug: "quarterly-financial-reports" },
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
];
