import { Link } from "react-router";
import { navSections } from "@/data/siteNav";
import { CONTACT_EMAIL, MAP_EMBED_SRC, MAP_LINK, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF, socialLinks } from "@/data/contact";
import SocialIcon from "@/componets/ui/SocialIcon";

const mediaSection = navSections.find((section) => section.basePath === "/media-center");

const openingHours = [
  { day: "الأحد – الأربعاء", time: "4 مساءً – 9 مساءً" },
  
  { day: "الخميس – السبت", time: "مغلق", closed: true },
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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-14">
          <nav aria-label="المركز الإعلامي">
            <FooterColumn section={mediaSection} />
          </nav>

          <div className="space-y-10">
            <div>
              <h3 className="mb-5 text-lg font-bold sm:text-xl">أوقات العمل</h3>
              <dl className="space-y-3">
                {openingHours.map(({ day, time, closed }) => (
                  <div key={day} className="flex flex-col gap-1">
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
              <h3 className="mb-5 text-lg font-bold sm:text-xl">معلومات الاتصال</h3>
              <dl className="space-y-4 text-sm sm:text-base">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="text-white/75">هاتف:</dt>
                  <dd>
                    <a
                      href={PHONE_HREF}
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="text-white/75">واتساب:</dt>
                  <dd>
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noreferrer"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 text-white/75">خدمة العملاء:</dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="space-y-10">
            {/* <div>
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
                    className="h-14 w-full rounded-full bg-white ps-6 pe-16 text-base text-secondary placeholder:text-[11px] placeholder:text-slate-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
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
            </div> */}

            <div>
              <h3 className="mb-5 text-lg font-bold sm:text-xl">تابعنا على وسائل التواصل الاجتماعي</h3>
              <ul className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="center size-11 rounded-full text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-amber-light focus-visible:bg-white/10 focus-visible:text-amber-light focus-visible:outline-none"
                    >
                      <SocialIcon id={social.id} className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold sm:text-xl">الموقع</h3>
            <iframe
              src={MAP_EMBED_SRC}
              title="موقع جمعية وسام على الخريطة"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-56 w-full rounded-3xl border-0 bg-white/5"
            />
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-white/75 transition-colors hover:text-amber-light"
            >
              افتح في خرائط Google
            </a>
          </div>
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
