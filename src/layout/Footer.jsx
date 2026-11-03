import React from "react";

const visitLinks = [
  "زورونا",
  "الزيارات المدرسية",
  "الزيارات الجماعية",
  "جولة إثراء الافتراضية 360",
  "يحث الآن",
  "سهولة الوصول",
  "جولات إثراء",
  "معلومات الدخول والأوقات",
  "مرافق للتأجير",
  "الأسئلة الشائعة",
];

const aboutLinks = [
  "معاصر",
  "عن إثراء",
  "المتحف",
  "متحف الطفل",
  "مسرح إثراء",
  "السينما",
  "المكتبة",
  "مختبر الأفكار",
  "معرض الطاقة",
  "تجارب الطعام",
];

const identityLinks = [
  "دليل الهوية",
  "تقرير إثراء السنوي",
  "مدونة إثراء",
  "مجلة إثرائيات",
  "النشرة الإخبارية",
];

const joinLinks = ["التوظيف", "عضوية إثراء", "تعاون مع إثراء", "التطوع"];

const openingHours = [
  { day: "الأحد", time: "مغلق", closed: true },
  { day: "الاثنين", time: "مغلق", closed: true },
  { day: "الثلاثاء", time: "9 صباحًا – 11 مساءً" },
  { day: "الأربعاء", time: "9 صباحًا – 11 مساءً" },
  { day: "الخميس", time: "9 صباحًا – 11 مساءً" },
  { day: "الجمعة", time: "4 عصرًا – 11 مساءً" },
  { day: "السبت", time: "9 صباحًا – 11 مساءً" },
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

const FooterLink = ({ children }) => (
  <li>
    <a
      href="#"
      className="inline-block text-base text-white/75 transition-colors duration-200 hover:text-amber-light focus-visible:text-amber-light focus-visible:outline-none"
    >
      {children}
    </a>
  </li>
);

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer dir="rtl" className="footer-gradient relative mt-20 text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 xl:gap-24">
          {/* النشرة الإخبارية + التواصل + أوقات الزيارة */}
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
                <a href="#" className="text-amber-light underline underline-offset-2 hover:text-white">
                  سياسة الخصوصية
                </a>{" "}
                و
                <a href="#" className="text-amber-light underline underline-offset-2 hover:text-white">
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
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-lg font-bold sm:text-xl">معلومات الدخول</h3>
                <p className="text-sm text-white/75">أوقات الزيارة لمركز إثراء هي كالتالي:</p>
              </div>

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

              <p className="mt-4 max-w-md text-xs leading-relaxed text-white/75">
                ملاحظة: تغلق أبواب متحف الطفل ومعرض الطاقة قبل موعد إغلاق المركز بساعتين.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold sm:text-xl">الموقع</h3>
              <address className="text-sm not-italic leading-relaxed text-white/80 sm:text-base">
                8386 الطريق الدائري، غرب الظهران
                <br />
                34461 الظهران
              </address>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold sm:text-xl">معلومات الاتصال</h3>
              <dl className="space-y-4 text-sm sm:text-base">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="text-white/75">هاتف:</dt>
                  <dd>
                    <a
                      href="tel:+9661338169799"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      +9661338169799
                    </a>
                  </dd>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="text-white/75">الرقم المجاني و الواتساب:</dt>
                  <dd>
                    <a
                      href="tel:8001221224"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      8001221224
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 text-white/75">خدمة العملاء:</dt>
                  <dd>
                    <a
                      href="mailto:customercare@ithra.com"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      customercare@ithra.com
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 text-white/75">المركز الإعلامي:</dt>
                  <dd>
                    <a
                      href="mailto:media@ithra.com"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      media@ithra.com
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 text-white/75">للشراكات والتعاون:</dt>
                  <dd>
                    <a
                      href="mailto:relations@ithra.com"
                      dir="ltr"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      relations@ithra.com
                    </a>
                  </dd>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="text-white/75">مواقع أخرى:</dt>
                  <dd>
                    <a
                      href="https://www.aramco.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-white/85 transition-colors hover:text-amber-light"
                    >
                      Aramco
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* خطط زيارتك + انضم إلينا */}
          <nav aria-label="خطط زيارتك" className="order-2 space-y-12 lg:order-1">
            <div>
              <h2 className="mb-6 text-lg font-bold sm:text-xl">خطط زيارتك</h2>
              <ul className="space-y-3.5">
                {visitLinks.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-lg font-bold sm:text-xl">انضم إلينا</h2>
              <ul className="space-y-3.5">
                {joinLinks.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </ul>
            </div>
          </nav>

          {/* عن إثراء */}
          <nav aria-label="عن إثراء" className="order-3 space-y-12 lg:order-2">
            <div>
              <h2 className="mb-6 text-lg font-bold sm:text-xl">عن إثراء</h2>
              <ul className="space-y-3.5">
                {aboutLinks.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-3.5">
                {identityLinks.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/75 sm:flex-row">
          <p>© {currentYear} مركز إثراء. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-amber-light">
              سياسة الخصوصية
            </a>
            <a href="#" className="transition-colors hover:text-amber-light">
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;
