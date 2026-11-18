import { useState } from "react";
import {
  User,
  CalendarDays,
  Phone,
  Mail,
  Globe,
  GraduationCap,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";
import FormField, { inputClassSingle, textareaClass } from "@/componets/ui/FormField";

const Volunteer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send the form data to the society's backend / email service.
    setSubmitted(true);
  };

  return (
    <SectionPage
      section="انضم لفريقنا"
      title="تطوع"
      intro="شارك بوقتك وخبرتك في برامج الجمعية ومبادراتها. عبّئ النموذج أدناه وسنتواصل معك قريباً."
    >
      <div className="mt-10 max-w-3xl rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:p-8">
        {submitted ? (
          <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
              <HeartHandshake className="size-7" aria-hidden="true" />
            </span>
            <h2 className="text-xl font-extrabold">تم استلام طلب التطوع بنجاح</h2>
            <p className="max-w-sm text-sm text-secondary/70">
              شكراً لرغبتك في الانضمام إلى فريق وسام التطوعي. سنتواصل معك قريباً.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <FormField label="الاسم" icon={User}>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className={inputClassSingle}
                placeholder="الاسم الكامل"
              />
            </FormField>

            <FormField label="العمر" icon={CalendarDays}>
              <input
                type="number"
                name="age"
                required
                min={12}
                max={80}
                inputMode="numeric"
                className={inputClassSingle}
                placeholder="العمر بالسنوات"
              />
            </FormField>

            <FormField label="الهاتف" icon={Phone}>
              <input
                type="tel"
                name="phone"
                dir="ltr"
                required
                autoComplete="tel"
                className={inputClassSingle}
                placeholder="05xxxxxxxx"
              />
            </FormField>

            <FormField label="البريد الإلكتروني" icon={Mail}>
              <input
                type="email"
                name="email"
                dir="ltr"
                required
                autoComplete="email"
                className={inputClassSingle}
                placeholder="name@email.com"
              />
            </FormField>

            <FormField label="الجنسية" icon={Globe} className="sm:col-span-2">
              <input
                type="text"
                name="nationality"
                required
                className={inputClassSingle}
                placeholder="الجنسية"
              />
            </FormField>

            <FormField label="المؤهلات" icon={GraduationCap} className="sm:col-span-2">
              <textarea
                name="qualifications"
                required
                className={textareaClass}
                placeholder="المؤهل العلمي، الدورات والشهادات…"
              />
            </FormField>

            <FormField label="الخبرات" icon={Briefcase} className="sm:col-span-2">
              <textarea
                name="experience"
                required
                className={textareaClass}
                placeholder="خبراتك العملية أو التطوعية السابقة…"
              />
            </FormField>

            <button type="submit" className="btn btn-primary rounded-full px-8 sm:col-span-2">
              إرسال طلب التطوع
            </button>
          </form>
        )}
      </div>
    </SectionPage>
  );
};

export default Volunteer;
