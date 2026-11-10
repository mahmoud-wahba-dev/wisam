import { useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import { Calendar, MapPin, Users } from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";
import { programs } from "@/data/programs";

const Meta = ({ icon: Icon, label, value }) => (
  <li className="flex items-start gap-3 text-sm leading-relaxed text-secondary/75">
    <Icon
      className="mt-0.5 size-5 shrink-0 text-accent"
      strokeWidth={1.8}
      aria-hidden="true"
    />
    <span>
      <span className="block text-xs font-semibold text-secondary/50">
        {label}
      </span>
      {value}
    </span>
  </li>
);

const ProgramDetail = () => {
  const { id } = useParams();
  const { hash } = useLocation();
  const program = programs.find((item) => item.id === id);

  useEffect(() => {
    if (!hash) return;
    document
      .getElementById(hash.slice(1))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  if (!program) return <Navigate to="/programs" replace />;

  return (
    <SectionPage section="البرامج" title={program.title} intro={program.description}>
      <div className="mt-10 grid overflow-hidden rounded-4xl bg-white text-secondary shadow-2xl shadow-black/25 lg:grid-cols-2">
        <img
          src={program.image}
          alt={program.title}
          className="h-64 w-full object-cover sm:h-80 lg:h-full"
        />

        <div className="flex flex-col gap-8 p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {program.tags.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  tag.tone === "cool"
                    ? "bg-accent/10 text-accent"
                    : "bg-primary/10 text-secondary"
                }`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <ul className="space-y-4">
            <Meta icon={Calendar} label="التاريخ" value={program.date} />
            {program.age && <Meta icon={Users} label="الفئة العمرية" value={program.age} />}
            {program.location && (
              <Meta icon={MapPin} label="المكان" value={program.location} />
            )}
          </ul>

          <div id="times" className="scroll-mt-32 rounded-3xl bg-secondary/5 p-5">
            <h2 className="text-lg font-bold text-secondary">أوقات إضافية</h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary/75">
              يتوفر هذا البرنامج في {program.moreTimes} أوقات أخرى خلال الشهر.
              اختر الموعد الذي يناسبك عند التسجيل.
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <a
              href="mailto:info@wisam.org.sa"
              className="btn btn-primary rounded-full px-6"
            >
              سجّل الآن
            </a>
            <Link to="/programs" className="btn btn-ghost rounded-full px-6 text-secondary">
              العودة إلى البرامج
            </Link>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default ProgramDetail;
