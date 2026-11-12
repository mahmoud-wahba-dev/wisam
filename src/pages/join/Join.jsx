import { Link } from "react-router";
import { Briefcase, HeartHandshake, Mail, Users } from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";
import { CardBody, CardContainer, CardItem } from "@/componets/ui/3d-card";

const paths = [
  {
    key: "membership",
    title: "العضوية",
    description:
      "انضم إلى مجتمع وسام واستفد من مزايا وخصومات على البرامج والأنشطة على مدار العام.",
    icon: HeartHandshake,
    to: "/memberships",
    cta: "تفاصيل العضوية",
  },
  {
    key: "volunteer",
    title: "التطوع",
    description:
      "شارك بوقتك وخبرتك في برامج الجمعية ومبادراتها، وكن جزءاً من فريق يصنع الأثر.",
    icon: Users,
    href: "mailto:volunteer@wisam.org.sa",
    cta: "تطوّع معنا",
  },
  {
    key: "careers",
    title: "التوظيف",
    description:
      "اطّلع على الفرص الوظيفية المتاحة وابحث عن مسار مهني يحمل معنى.",
    icon: Briefcase,
    href: "mailto:careers@wisam.org.sa",
    cta: "أرسل سيرتك",
  },
  {
    key: "partnership",
    title: "الشراكات",
    description:
      "لنصنع أثراً مشتركاً مع الأفراد والجهات الراغبة في دعم برامج الجمعية.",
    icon: Mail,
    href: "mailto:relations@wisam.org.sa",
    cta: "تواصل معنا",
  },
];

const Join = () => {
  return (
    <SectionPage
      section="انضم إلينا"
      title="انضم إلينا"
      intro="هناك أكثر من طريقة لتكون جزءاً من وسام: عضو، متطوع، أو شريك في صناعة الأثر."
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {paths.map(({ key, title, description, icon: Icon, to, href, cta }) => (
          <CardContainer key={key} className="h-full">
            <CardBody
              as="article"
              className="flex w-full flex-col rounded-3xl bg-white p-6 text-secondary shadow-lg shadow-black/15 sm:p-8"
            >
              <CardItem
                as="span"
                translateZ={50}
                className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary"
              >
                <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
              </CardItem>

              <CardItem as="h2" translateZ={40} className="mt-5 text-2xl font-extrabold leading-snug">
                {title}
              </CardItem>
              <CardItem as="p" translateZ={25} className="mt-3 flex-1 text-sm leading-relaxed text-secondary/75">
                {description}
              </CardItem>

              <CardItem
                as={to ? Link : "a"}
                translateZ={50}
                {...(to ? { to } : { href })}
                className="btn btn-primary mt-6 w-fit rounded-full px-6"
              >
                {cta}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </SectionPage>
  );
};

export default Join;
