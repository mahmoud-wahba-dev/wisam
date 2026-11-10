import { Link } from "react-router";
import { navSections } from "@/data/siteNav";

const [aboutSection, governanceSection, reportsSection, mediaSection] =
  navSections;

const openingHours = [
  { day: "الأحد", time: "8 صباحًا – 4 مساءً" },
  { day: "الاثنين", time: "8 صباحًا – 4 مساءً" },
  { day: "الثلاثاء", time: "8 صباحًا – 4 مساءً" },
  { day: "الأربعاء", time: "8 صباحًا – 4 مساءً" },
  { day: "الخميس", time: "8 صباحًا – 4 مساءً" },
  { day: "الجمعة", time: "مغلق", closed: true },
  { day: "السبت", time: "مغلق", closed: true },
];

const socials = [
  {
    name: "فيسبوك",
    icon: (
      <path d="M13.5 9.5H16V6.5h-2.5C11.6 6.5 10 8.1 10 10v1.5H8v3h2V21h3v-6.5h2.3l.5-3H13V10c0-.3.2-.5.5-.5Z" />
    ),
  },
  {
    name: "إنستغرام",
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <circle cx="17.2" cy="6.8" r="1.2" />
      </>
    ),
  },
  {
    name: "إكس",
    icon: (
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L3 2h6.5l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.5 3.8H5.7L17.8 20Z" />
    ),
  },
  {
    name: "يوتيوب",
    icon: (
      <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2C22 15.1 22 12 22 12s0-3.1-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    ),
  },
  {
    name: "لينكدإن",
    icon: (
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
    ),
  },
];

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="inline-block text-base text-white/75 transition-colors duration-200 hover:text-amber-light focus-visible:text-amber-light focus-visible:outline-none"
    >
      {children}
    </Link>
  </li>
);

const FooterColumn = ({ section }) => (
  <div>
    <h2 className="mb-6 text-lg font-bold sm:text-xl">{section.label}</h2>
    <ul className="space-y-3.5">
      {section.pages.map(({ label, slug }) => (
        <FooterLink key={label} to={`${section.basePath}/${slug}`}>
          {label}
        </FooterLink>
      ))}
    </ul>
  </div>
);

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-gradient relative text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 xl:gap-24">
          {/* النشرة الإخبارية + التواصل + أوقات العمل */}
          <div className="order-1 space-y-10 md:col-span-2 lg:order-3 lg:col-span-1">
            <div>
              <h2 className="mb-6 text-lg font-bold sm:text-xl">اشترك في النشرة الإخبارية</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <label htmlFor="newsletter-email" className="sr-only">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="ادخل عنوان بريدك الإلكتروني"
                    className="h-14 w-full rounded-full bg-white ps-6 pe-16 text-base text-secondary placeholder:text-slate-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
                  />
                  <button
                    type="submit"
                    aria-label="اشترك في النشرة الإخبارية"
                    className="btn btn-circle btn-primary absolute end-2 top-1/2 -translate-y-1/2 border-none"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                      aria-hidden="true"
                    >
                      <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
                    </svg>
                  </button>
                </div>
              </form>

              <p className="mt-3 text-xs leading-relaxed text-white/75">
                هذا الموقع محمي بواسطة reCAPTCHA وتطبق{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-light underline underline-offset-2 hover:text-white"
                >
                  سياسة الخصوصية
                </a>{" "}
                و
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-light underline underline-offset-2 hover:text-white"
                >
                  شروط الخدمة
                </a>{" "}
                من موقع Google
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold sm:text-xl">تابعنا على وسائل التواصل الاجتماعي</h3>
              <ul className="flex items-center gap-2">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href="#"
                      aria-label={social.name}
                      className="center size-11 rounded-full text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-amber-light focus-visible:bg-white/10 focus-visible:text-amber-light focus-visible:outline-none"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                        {social.icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold sm:text-xl">أوقات العمل</h3>
              <dl className="max-w-md space-y-3">
                {openingHours.map(({ day, time, closed }) => (
                  <div key={day} className="flex items-center justify-between gap-4">
                    <dt className="text-sm text-white/75">{day}</dt>
                    <dd
                      className={
                        closed
                          ? "text-sm text-white/75"
                          : "text-sm font-semibold text-amber-light"
                      }
                    >
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold sm:text-xl">الموقع</h3>
              <address className="text-sm not-italic leading-relaxed text-white/80 sm:text-base">
                المملكة العربية السعودية
              </address>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold sm:text-xl">معلومات الاتصال</h3>
              <dl className="space-y-4 text-sm sm:text-base">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="text-white/75">هاتف:</dt>
                  <dd>
                    {/* TODO: replace with the society's real phone number */}
                    <a
                      href="tel:+966110000000"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      +966 11 000 0000
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 text-white/75">خدمة العملاء:</dt>
                  <dd>
                    <a
                      href="mailto:info@wisam.org.sa"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      info@wisam.org.sa
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 text-white/75">المركز الإعلامي:</dt>
                  <dd>
                    <a
                      href="mailto:media@wisam.org.sa"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      media@wisam.org.sa
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 text-white/75">للشراكات والتعاون:</dt>
                  <dd>
                    <a
                      href="mailto:relations@wisam.org.sa"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      relations@wisam.org.sa
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* روابط الجمعية */}
          <nav aria-label="روابط الجمعية" className="order-2 space-y-12 lg:order-1">
            <FooterColumn section={aboutSection} />
            <FooterColumn section={governanceSection} />
          </nav>

          <nav aria-label="التقارير والمركز الإعلامي" className="order-3 space-y-12 lg:order-2">
            <FooterColumn section={reportsSection} />
            <FooterColumn section={mediaSection} />
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/75 sm:flex-row">
          <p>© {currentYear} جمعية وسام. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-amber-light">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="transition-colors hover:text-amber-light">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
