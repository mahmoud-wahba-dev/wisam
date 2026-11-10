import { Link } from "react-router";
import { Briefcase, HeartHandshake, Mail, Users } from "lucide-react";
import SectionPage from "@/pages/section/SectionPage";

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
          <article
            key={key}
            className="flex flex-col rounded-3xl bg-white p-6 text-secondary shadow-lg shadow-black/15 sm:p-8"
          >
            <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
              <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
            </span>

            <h2 className="mt-5 text-2xl font-extrabold leading-snug">
              {title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary/75">
              {description}
            </p>

            {to ? (
              <Link to={to} className="btn btn-primary mt-6 w-fit rounded-full px-6">
                {cta}
              </Link>
            ) : (
              <a
                href={href}
                className="btn btn-primary mt-6 w-fit rounded-full px-6"
              >
                {cta}
              </a>
            )}
          </article>
        ))}
      </div>
    </SectionPage>
  );
};

export default Join;
