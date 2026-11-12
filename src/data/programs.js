import kid1 from "@/assets/imgs/kids/kid.webp";
import kid2 from "@/assets/imgs/kids/kid2.webp";
import kid6 from "@/assets/imgs/kids/kid6.webp";
import kid7 from "@/assets/imgs/kids/kid7.webp";
import kid8 from "@/assets/imgs/kids/kid8.webp";
import kid9 from "@/assets/imgs/kids/kid9.webp";

// Shared program data used by the home slider, the programs listing and the
// program detail page.
export const programs = [
  {
    id: "child-saturday",
    quarter: 1,
    title: "سبت الطفل",
    image: kid6,
    tags: [{ label: "أطفال" }],
    date: "14 نوفمبر 2026",
    age: "+3 سنوات مع العائلات",
    location: "متحف الطفل",
    moreTimes: 7,
    description:
      "صباح مليء باللعب والتعلّم للأطفال وعائلاتهم. يتضمن البرنامج جولات قصيرة وورشاً تفاعلية وأنشطة حركية داخل مساحات آمنة ومحفزة على الاستكشاف.",
  },
  {
    id: "wind-energy",
    quarter: 1,
    title: "طاقة الرياح",
    image: kid7,
    tags: [{ label: "نشاط", tone: "cool" }],
    date: "14 نوفمبر 2026",
    age: "+7 سنوات مع العائلات",
    location: "معرض الطاقة",
    moreTimes: 8,
    description:
      "ورشة تطبيقية يبني فيها المشاركون نماذج صغيرة لتوربينات الرياح، ويتعرفون على مصادر الطاقة المتجددة وأثرها في البيئة بإشراف مرشدين مختصين.",
  },
  {
    id: "library-workshop",
    quarter: 2,
    title: "ورشة عمل في المكتبة",
    image: kid8,
    tags: [{ label: "نشاط", tone: "cool" }, { label: "المكتبة" }],
    date: "14 نوفمبر 2026",
    age: "العائلات",
    location: "المكتبة - الطابق 2",
    moreTimes: 14,
    description:
      "جلسة قراءة وورشة إبداعية تستكشف عالم القصص، وتنتهي بصناعة قصة مصورة صغيرة يشارك فيها كل طفل بمفرداته الخاصة.",
  },
  {
    id: "cat-in-a-box",
    quarter: 2,
    title: "قطة في صندوق",
    image: kid9,
    tags: [{ label: "نشاط", tone: "cool" }, { label: "أطفال" }],
    date: "14 نوفمبر 2026",
    age: "6-2 سنوات مع العائلات",
    location: "المكتبة - الطابق 2",
    moreTimes: 4,
    description:
      "عرض تفاعلي مستوحى من حكاية القطة التي تحب الصناديق، يمزج بين السرد والموسيقى والحركة، ويليه نشاط فني قصير.",
  },
  {
    id: "craft-session",
    quarter: 3,
    title: "ورشة الحرف اليدوية",
    image: kid1,
    tags: [{ label: "أطفال" }],
    date: "15 نوفمبر 2026",
    age: "+6 سنوات مع العائلات",
    location: "متحف الطفل",
    moreTimes: 5,
    description:
      "ورشة تمكّن المشاركين من إتقان حرفة بسيطة باستخدام خامات صديقة للبيئة، مع هدية من إنتاجهم في نهاية الجلسة.",
  },
  {
    id: "idea-lab",
    quarter: 3,
    title: "مختبر الأفكار",
    image: kid2,
    tags: [{ label: "نشاط", tone: "cool" }],
    date: "15 نوفمبر 2026",
    age: "+9 سنوات",
    location: "مختبر الأفكار",
    moreTimes: 6,
    description:
      "مساحة مفتوحة للتفكير التصميمي، يحوّل فيها المشاركون فكرة بسيطة إلى نموذج أولي عبر خطوات عملية في التخطيط والتنفيذ والعرض.",
  },
];
