import { useState } from "react";
import { UserCheck, HandHeart, Briefcase, Star } from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";

const ROLES = [
  { key: "beneficiary", label: "مستفيد", icon: UserCheck },
  { key: "supporter", label: "داعم", icon: HandHeart },
  { key: "staff", label: "موظف / متطوع", icon: Briefcase },
];

const RateExperience = () => {
  const [role, setRole] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionPage
      section="تواصل معنا"
      title="قيم تجربتك معنا"
      intro="رأيك يساعدنا على التطور. أخبرنا عن تجربتك مع جمعية وسام."
    >
      <div className="mt-10 max-w-2xl rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <Star className="size-7" aria-hidden="true" />
            </span>
            <h2 className="text-xl font-extrabold">شكرًا لتقييمك</h2>
            <p className="max-w-sm text-sm text-secondary/70">نقدّر وقتك في مشاركة تجربتك معنا.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <span className="mb-3 block text-sm font-semibold text-secondary">أنت:</span>
              <div className="grid grid-cols-3 gap-3">
                {ROLES.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setRole(key)}
                    className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm font-semibold
                      transition-colors
                      ${role === key
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-secondary/15 text-secondary/70 hover:border-primary/40"}`}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-3 block text-sm font-semibold text-secondary">تقييمك</span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-label={`${n} من 5`}
                    onMouseEnter={() => setHoverRating(n)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(n)}
                    className="p-1"
                  >
                    <Star
                      className={`size-9 transition-colors ${
                        (hoverRating || rating) >= n ? "fill-primary text-primary" : "text-secondary/20"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-secondary">ملاحظاتك (اختياري)</span>
              <textarea
                name="comments"
                rows={4}
                className="w-full rounded-xl border border-secondary/15 bg-white p-4 text-sm text-secondary
                  placeholder:text-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                placeholder="شاركنا تفاصيل تجربتك..."
              />
            </label>

            <button
              type="submit"
              disabled={!role || !rating}
              className="btn btn-primary rounded-full px-8 disabled:opacity-50"
            >
              إرسال التقييم
            </button>
          </form>
        )}
      </div>
    </SectionPage>
  );
};

export default RateExperience;
