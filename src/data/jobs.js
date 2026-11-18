// Open positions shown on the careers page.
//
// When this list is empty the page shows "لا تتوفر أي وظائف الآن".
// To see that message, comment out the dummy list below and use this line instead:
// export const jobs = [];

// TODO: dummy data for preview only — replace with the society's real openings.
export const jobs = [
  {
    id: "program-coordinator",
    title: "منسق برامج",
    department: "إدارة البرامج",
    location: "الرياض",
    type: "دوام كامل",
    description:
      "تنسيق برامج الجمعية ومبادراتها، ومتابعة تنفيذها مع الفرق والمتطوعين وإعداد التقارير الدورية.",
    requirements: [
      "بكالوريوس في الإدارة أو تخصص ذي صلة",
      "خبرة لا تقل عن سنتين في تنسيق البرامج أو الفعاليات",
      "مهارات تواصل وتنظيم ممتازة",
    ],
  },
  {
    id: "social-media-specialist",
    title: "أخصائي وسائل التواصل الاجتماعي",
    department: "الإعلام والاتصال",
    location: "عن بُعد",
    type: "دوام جزئي",
    description:
      "إدارة حسابات الجمعية على المنصات الاجتماعية وصناعة محتوى يعكس هويتها ويعزز حضورها.",
    requirements: [
      "خبرة في كتابة المحتوى العربي وإدارة الحسابات",
      "إلمام بأدوات التصميم والمونتاج",
      "معرفة بتحليل أداء المنصات",
    ],
  },
  {
    id: "volunteer-affairs-officer",
    title: "مسؤول شؤون المتطوعين",
    department: "التطوع",
    location: "الرياض",
    type: "دوام كامل",
    description:
      "استقطاب المتطوعين وتأهيلهم وتوزيعهم على البرامج، وقياس أثر مشاركتهم وتحفيزهم.",
    requirements: [
      "بكالوريوس في الموارد البشرية أو الخدمة الاجتماعية",
      "خبرة في العمل التطوعي أو غير الربحي",
      "القدرة على بناء علاقات إيجابية مع المتطوعين",
    ],
  },
  {
    id: "accountant",
    title: "محاسب",
    department: "الشؤون المالية",
    location: "الرياض",
    type: "دوام كامل",
    description:
      "إدارة القيود والمصروفات والتقارير المالية للجمعية وفق الأنظمة المحاسبية المعتمدة للقطاع غير الربحي.",
    requirements: [
      "بكالوريوس في المحاسبة",
      "خبرة سنتين على الأقل، ويفضّل في القطاع غير الربحي",
      "إتقان برامج المحاسبة وExcel",
    ],
  },
];
