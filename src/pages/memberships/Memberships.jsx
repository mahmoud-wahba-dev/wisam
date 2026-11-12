import SectionPage from "@/pages/section/SectionPage";
import { packages } from "@/data/packages";
import { CardBody, CardContainer, CardItem } from "@/componets/ui/3d-card";

const Memberships = () => {
  return (
    <SectionPage
      section="العضوية"
      title="العضوية"
      intro="اختر الباقة التي تناسبك وكن جزءاً من مجتمع وسام، مع مزايا وخصومات على البرامج والأنشطة."
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {packages.map((pkg) => (
          <CardContainer key={pkg.id} className="h-full">
            <CardBody
              as="article"
              className="flex w-full flex-col rounded-3xl bg-white p-6 text-secondary shadow-lg shadow-black/15 sm:p-8"
            >
              <CardItem as="h2" translateZ={40} className="text-2xl font-extrabold leading-snug">
                {pkg.title}
              </CardItem>
              <CardItem as="p" translateZ={25} className="mt-3 flex-1 text-sm leading-relaxed text-secondary/75">
                {pkg.description}
              </CardItem>
              <CardItem
                as="a"
                translateZ={50}
                href="mailto:info@wisam.org.sa"
                className="btn btn-primary mt-6 w-fit rounded-full px-6"
              >
                انضم الآن
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </SectionPage>
  );
};

export default Memberships;
