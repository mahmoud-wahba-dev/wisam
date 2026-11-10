import ProgramCard from "@/pages/home/components/ProgramCard";
import SectionPage from "@/pages/section/SectionPage";
import { programs } from "@/data/programs";

const Programs = () => {
  return (
    <SectionPage
      section="البرامج"
      title="البرامج"
      intro="برامج وأنشطة مصممة لمختلف الأعمار، من الورش التفاعلية إلى الجلسات القرائية والعروض العائلية."
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </div>
    </SectionPage>
  );
};

export default Programs;
