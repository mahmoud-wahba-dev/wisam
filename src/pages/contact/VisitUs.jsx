import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Building2,
  MessageSquareText,
  CalendarDays,
  MapPin,
} from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";

// TODO: replace with the society's exact address or coordinates.
const MAP_QUERY = encodeURIComponent("جمعية وسام، المملكة العربية السعودية");

const VISIT_REASONS = [
  "تعريف بالجمعية",
  "فرصة تطوع",
  "شراكة أو رعاية",
  "استفسار عام",
  "أخرى",
];

const inputClass =
  "h-12 w-full rounded-xl border border-secondary/15 bg-white px-4 text-sm text-secondary " +
  "placeholder:text-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

const Field = ({ label, icon: Icon, className, children }) => (
  <label className={className}>
    <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-secondary">
      <Icon className="size-4 text-primary" aria-hidden="true" />
      {label}
    </span>
    {children}
  </label>
);

const VisitUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionPage
      section="تواصل معنا"
      title="زرنا"
      intro="يسعدنا استقبالكم في مقر جمعية وسام. عبّئوا النموذج أدناه لتحديد موعد زيارتكم."
    >
      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* Visit form */}
        <div className="rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:p-8 lg:col-span-3">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
                <MapPin className="size-7" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-extrabold">تم استلام طلب الزيارة بنجاح</h2>
              <p className="max-w-sm text-sm text-secondary/70">
                سنتواصل معكم قريبًا لتأكيد موعد الزيارة. شكرًا لاهتمامكم بجمعية وسام.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="الاسم" icon={User}>
                <input type="text" name="name" required className={inputClass} placeholder="الاسم الكامل" />
              </Field>

              <Field label="الهاتف" icon={Phone}>
                <input type="tel" name="phone" dir="ltr" required className={inputClass} placeholder="05xxxxxxxx" />
              </Field>

              <Field label="المدينة" icon={Building2}>
                <input type="text" name="city" required className={inputClass} placeholder="مدينتك" />
              </Field>

              <Field label="البريد الإلكتروني" icon={Mail}>
                <input type="email" name="email" dir="ltr" required className={inputClass} placeholder="name@email.com" />
              </Field>

              <Field label="سبب الزيارة" icon={MessageSquareText} className="sm:col-span-2">
                <select name="reason" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    اختر سبب الزيارة
                  </option>
                  {VISIT_REASONS.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="تاريخ الزيارة" icon={CalendarDays} className="sm:col-span-2">
                <input type="date" name="visitDate" required className={inputClass} />
              </Field>

              <button type="submit" className="btn btn-primary rounded-full px-8 sm:col-span-2">
                إرسال طلب الزيارة
              </button>
            </form>
          )}
        </div>

        {/* Location / map */}
        <div className="lg:col-span-2">
          <div className="rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:p-8">
            <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
              <MapPin className="size-6" aria-hidden="true" />
            </span>

            <h2 className="mt-4 text-lg font-extrabold">موقع جمعية وسام</h2>
            {/* TODO: replace with the society's exact address. */}
            <p className="mt-2 text-sm leading-relaxed text-secondary/70">
              المملكة العربية السعودية
            </p>

            <iframe
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              title="موقع جمعية وسام على الخريطة"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-5 h-48 w-full rounded-2xl border-0"
            />

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <MapPin className="size-4" aria-hidden="true" />
              افتح في خرائط Google
            </a>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default VisitUs;
