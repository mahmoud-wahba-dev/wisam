import SectionPage from "@/pages/section/SectionPage";
import { packages } from "@/data/packages";

const Memberships = () => {
  return (
    <SectionPage
      section="العضوية"
      title="العضوية"
      intro="اختر الباقة التي تناسبك وكن جزءاً من مجتمع وسام، مع مزايا وخصومات على البرامج والأنشطة."
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {packages.map((pkg) => (
          <article
            key={pkg.id}
            className="flex flex-col rounded-3xl bg-white p-6 text-secondary shadow-lg shadow-black/15 sm:p-8"
          >
            <h2 className="text-2xl font-extrabold leading-snug">
              {pkg.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary/75">
              {pkg.description}
            </p>
            <a
              href="mailto:info@wisam.org.sa"
              className="btn btn-primary mt-6 w-fit rounded-full px-6"
            >
              انضم الآن
            </a>
          </article>
        ))}
      </div>
    </SectionPage>
  );
};

export default Memberships;
