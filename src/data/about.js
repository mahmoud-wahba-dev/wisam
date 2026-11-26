import bandar from "@/assets/imgs/board/bandar.jpg";
import omar from "@/assets/imgs/board/omar.jpg";
import mubarak from "@/assets/imgs/board/mubarak.jpg";
import ibrahim from "@/assets/imgs/board/ibrahim.jpg";

// Copy for the "عن وسام" pages, taken from the association's profile and bylaws.

export const SLOGAN = "بسواعد أبنائنا | نبني مملكتنا";

export const story = {
  title: "قصة وسام",
  pillars: ["نغرس قيمًا", "نبني جيلًا", "نصنع أثرًا"],
  lead: "كل حكاية عظيمة تبدأ من فكرة بسيطة",
  year: "2014م",
  // Read top to bottom, the chapter texts are the full story. Each title is a
  // phrase from that same text.
  chapters: [
    {
      title: "بدأت بفكرة",
      text: "ففي عام 2014م أطلقنا مبادرة نوعية قيمية بإحدى المدارس في مدينتنا الجميلة الرياض حملت اسم قادر",
    },
    {
      title: "ونمت بطموح",
      text: "كانت مبادرة واعدة في بدايتها ممتدة في أثرها (فأزهرت وأثمرت)",
    },
    {
      title: "واستقرّت برسالةٍ صنعت أثرًا",
      text: "رحلةٌ بدأت بفكرة ونمت بطموح واستقرّت برسالةٍ صنعت أثرًا، طفل الأمس ذو 10 ربيعًا نما وازدهر والتحق بالركب الجامعي ليبدأ قيادة المبادرة التي نشأ بها",
    },
  ],
  quote: {
    intro:
      "وحفظ الله ولي العهد صاحب السمو الملكي الأمير محمد بن سلمان آل سعود حين قال:",
    text: "بسواعد أبنائها قامت هذه الدولة",
  },
};

export const assemblyMembers = [
  "مساعد سعود عبدالله التمامي",
  "محمد أحمد محمد الحمدان",
  "مبارك فهد مبارك الهويشل",
  "عبدالله محمد بن علي الرسي",
  "بندر عايض بن صعيقر الرقاص",
  "عاصم عبدالله عبدالعزيز الغيث",
  "إبراهيم عبدالله بن عبدالعزيز المطلق",
  "عبدالملك حمد محمد الشثري",
  "عمر محمد عبدالله الخطاف",
  "عبدالعزيز عبدالله عبدالعزيز السيف",
];

// From the association's bylaws, shown under the general assembly members.
export const assemblyArticles = [
  {
    title: "المادة الثالثة",
    text: "للجمعية شخصيتها الاعتبارية ويمثلها رئيس مجلس الإدارة حسب اختصاصاته الواردة في هذه اللائحة، ويجوز بقرار من الجمعية العمومية تفويضه فيما يزيد على ذلك.",
  },
  {
    title: "المادة الرابعة",
    // TODO: the source continues «، والنطاق الجغرافي لخدماتها …» on its next
    // page. Add the rest of the sentence once that page is available.
    text: "يكون مقر الجمعية الرئيس في منطقة منطقة الرياض بمدينة مدينة الرياض.",
  },
];

// `featured` members get the large cards at the top of the page. Replace the
// files in assets/imgs/board with higher-resolution originals when available; a
// member without `photo` gets an initial-letter avatar.
export const boardMembers = [
  { name: "بندر بن عايض الرقاص", role: "رئيس مجلس الإدارة", photo: bandar, featured: true },
  { name: "عمر بن محمد الخطاف", role: "رئيس مجلس الإدارة", photo: omar, featured: true },
  { name: "مبارك بن فهد الهويشل", role: "عضو مجلس الإدارة", photo: mubarak },
  { name: "إبراهيم بن عبد الله المطلق", role: "عضو مجلس الإدارة", photo: ibrahim },
  { name: "عاصم بن عبد الله الغيث", role: "عضو مجلس الإدارة" },
];
