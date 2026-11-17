import { useState } from "react";
import { Lightbulb, AlertCircle, ShieldAlert } from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";

const FEEDBACK_TYPES = [
  { key: "inquiry", label: "استفسار", icon: ShieldAlert },
  { key: "complaint", label: "شكوى", icon: AlertCircle },
  { key: "suggestion", label: "اقتراح", icon: Lightbulb },
];

const inputClass =
  "h-12 w-full rounded-xl border border-secondary/15 bg-white px-4 text-sm text-secondary " +
  "placeholder:text-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

const ShareFeedback = () => {
  const [type, setType] = useState("inquiry");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionPage
      section="تواصل معنا"
      title="شاركنا رأيك"
      intro="رأيك يهمنا. اختر نوع الرسالة وشاركنا التفاصيل لنتمكن من الرد عليك."
    >
      <div className="mt-10 max-w-2xl rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <Lightbulb className="size-7" aria-hidden="true" />
            </span>
            <h2 className="text-xl font-extrabold">تم إرسال رسالتك بنجاح</h2>
            <p className="max-w-sm text-sm text-secondary/70">
              شكرًا لمشاركتنا رأيك، سنراجع رسالتك ونتواصل معك عند الحاجة.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="mb-3 block text-sm font-semibold text-secondary">
                نوع الرسالة
              </span>
              <div className="grid grid-cols-3 gap-3">
                {FEEDBACK_TYPES.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setType(key)}
                    className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-semibold
                      transition-colors
                      ${
                        type === key
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-secondary/15 text-secondary/70 hover:border-primary/40"
                      }`}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-secondary">
                الاسم (اختياري)
              </span>
              <input
                type="text"
                name="name"
                className={inputClass}
                placeholder="اسمك"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-secondary">
                البريد أو رقم الهاتف (اختياري)
              </span>
              <input
                type="text"
                name="contact"
                dir="ltr"
                className={inputClass}
                placeholder="للتواصل معك عند الحاجة"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-secondary">
                تفاصيل الرسالة
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-secondary/15 bg-white p-4 text-sm text-secondary
                  placeholder:text-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                placeholder="اكتب رسالتك هنا..."
              />
            </label>

            <button type="submit" className="btn btn-primary rounded-full px-8">
              إرسال
            </button>
          </form>
        )}
      </div>
    </SectionPage>
  );
};

export default ShareFeedback;
