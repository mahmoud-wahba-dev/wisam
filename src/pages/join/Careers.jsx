import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Building2,
  User,
  Phone,
  Mail,
  Globe,
  GraduationCap,
  Timer,
  FileUp,
  MessageSquareText,
  CircleCheck,
  CheckCircle2,
} from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";
import FormField, { inputClassSingle, selectClass, textareaClass } from "@/componets/ui/FormField";
import { jobs } from "@/data/jobs";
import { CONTACT_EMAIL } from "@/data/contact";

const EDUCATION_LEVELS = ["ثانوية عامة", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراه"];

const fileClass =
  "block w-full rounded-xl border border-dashed border-secondary/25 bg-secondary/[0.03] p-3 text-sm text-secondary/70 " +
  "file:me-3 file:cursor-pointer file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 " +
  "file:text-sm file:font-semibold file:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

const EmptyJobs = () => (
  <div
    role="status"
    className="mt-10 flex max-w-2xl flex-col items-center gap-3 rounded-4xl bg-white p-8 text-center
      text-secondary shadow-2xl shadow-black/20 sm:p-12"
  >
    <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
      <Briefcase className="size-7" strokeWidth={1.8} aria-hidden="true" />
    </span>
    <h2 className="text-2xl font-extrabold">لا تتوفر أي وظائف الآن</h2>
    <p className="max-w-md text-sm leading-relaxed text-secondary/70">
      لا توجد فرص وظيفية مفتوحة حالياً. تابعنا على وسائل التواصل الاجتماعي لتصلك الإعلانات عند
      توفر وظائف جديدة، أو راسلنا على{" "}
      <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className="font-semibold text-primary hover:underline">
        {CONTACT_EMAIL}
      </a>
      .
    </p>
  </div>
);

const JobCard = ({ job, selected, onApply }) => (
  <article
    className={`flex flex-col rounded-3xl bg-white p-6 text-secondary shadow-lg shadow-black/15 transition-shadow sm:p-8 ${
      selected ? "ring-2 ring-primary" : ""
    }`}
  >
    <h3 className="text-xl font-extrabold leading-snug">{job.title}</h3>

    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-secondary/70">
      {job.department && (
        <li className="flex items-center gap-1.5">
          <Building2 className="size-4 text-primary" aria-hidden="true" />
          {job.department}
        </li>
      )}
      {job.location && (
        <li className="flex items-center gap-1.5">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          {job.location}
        </li>
      )}
      {job.type && (
        <li className="flex items-center gap-1.5">
          <Clock className="size-4 text-primary" aria-hidden="true" />
          {job.type}
        </li>
      )}
    </ul>

    {job.description && (
      <p className="mt-4 text-sm leading-relaxed text-secondary/75">{job.description}</p>
    )}

    {job.requirements?.length > 0 && (
      <ul className="mt-4 space-y-2 text-sm text-secondary/80">
        {job.requirements.map((req) => (
          <li key={req} className="flex items-start gap-2">
            <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {req}
          </li>
        ))}
      </ul>
    )}

    <button
      type="button"
      onClick={() => onApply(job)}
      aria-pressed={selected}
      className="btn btn-primary mt-6 w-fit rounded-full px-6"
    >
      {selected ? "التقديم على هذه الوظيفة" : "قدّم الآن"}
    </button>
  </article>
);

const ApplicationForm = ({ job, onSubmit }) => (
  <form
    id="application-form"
    onSubmit={onSubmit}
    className="grid scroll-mt-32 gap-5 rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:grid-cols-2 sm:p-8"
  >
    <div className="sm:col-span-2">
      <h2 className="text-xl font-extrabold">طلب التوظيف</h2>
      <p className="mt-1 text-sm text-secondary/70">
        الوظيفة: <span className="font-semibold text-primary">{job.title}</span>
      </p>
      <input type="hidden" name="job" value={job.title} />
    </div>

    <FormField label="الاسم" icon={User}>
      <input type="text" name="name" required autoComplete="name" className={inputClassSingle} placeholder="الاسم الكامل" />
    </FormField>

    <FormField label="الجنسية" icon={Globe}>
      <input type="text" name="nationality" required className={inputClassSingle} placeholder="الجنسية" />
    </FormField>

    <FormField label="الهاتف" icon={Phone}>
      <input type="tel" name="phone" dir="ltr" required autoComplete="tel" className={inputClassSingle} placeholder="05xxxxxxxx" />
    </FormField>

    <FormField label="البريد الإلكتروني" icon={Mail}>
      <input type="email" name="email" dir="ltr" required autoComplete="email" className={inputClassSingle} placeholder="name@email.com" />
    </FormField>

    <FormField label="المؤهل العلمي" icon={GraduationCap}>
      <select name="education" required defaultValue="" className={selectClass}>
        <option value="" disabled>
          اختر المؤهل
        </option>
        {EDUCATION_LEVELS.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </FormField>

    <FormField label="سنوات الخبرة" icon={Timer}>
      <input type="number" name="yearsOfExperience" required min={0} max={50} inputMode="numeric" className={inputClassSingle} placeholder="0" />
    </FormField>

    <FormField label="السيرة الذاتية" icon={FileUp} className="sm:col-span-2">
      <input type="file" name="cv" required accept=".pdf,.doc,.docx" className={fileClass} />
      <span className="mt-1.5 block text-xs text-secondary/55">PDF أو Word، بحد أقصى 5 ميجابايت</span>
    </FormField>

    <FormField label="نبذة عنك / رسالة تعريفية" icon={MessageSquareText} className="sm:col-span-2">
      <textarea name="message" className={textareaClass} placeholder="حدثنا عن خبراتك ولماذا ترغب في الانضمام إلى وسام…" />
    </FormField>

    <button type="submit" className="btn btn-primary rounded-full px-8 sm:col-span-2">
      إرسال الطلب
    </button>
  </form>
);

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (job) => {
    setSelectedJob(job);
    requestAnimationFrame(() =>
      document.getElementById("application-form")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send the application (including the CV file) to the society's backend.
    setSubmitted(true);
  };

  return (
    <SectionPage
      section="انضم لفريقنا"
      title="توظيف"
      intro="اطّلع على الفرص الوظيفية المتاحة في جمعية وسام وقدّم طلبك للانضمام إلى فريقنا."
    >
      {jobs.length === 0 ? (
        <EmptyJobs />
      ) : submitted ? (
        <div
          role="status"
          className="mt-10 flex max-w-2xl flex-col items-center gap-3 rounded-4xl bg-white p-8 text-center text-secondary shadow-2xl shadow-black/20"
        >
          <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-7" aria-hidden="true" />
          </span>
          <h2 className="text-xl font-extrabold">تم استلام طلبك بنجاح</h2>
          <p className="max-w-sm text-sm text-secondary/70">
            شكراً لاهتمامك بالانضمام إلى وسام. سيراجع فريقنا طلبك ويتواصل معك عند الحاجة.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-10">
          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                selected={selectedJob?.id === job.id}
                onApply={handleApply}
              />
            ))}
          </div>

          {selectedJob ? (
            <div className="max-w-3xl">
              <ApplicationForm key={selectedJob.id} job={selectedJob} onSubmit={handleSubmit} />
            </div>
          ) : (
            <p className="max-w-3xl rounded-3xl border border-white/20 p-6 text-sm leading-relaxed text-white/75">
              اختر وظيفة من القائمة ثم اضغط «قدّم الآن» لتعبئة نموذج التقديم.
            </p>
          )}
        </div>
      )}
    </SectionPage>
  );
};

export default Careers;
