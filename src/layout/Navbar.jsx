import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/imgs/logo-nav.webp";
import { Link } from "react-router";

const navlinks = [
  "زورونا",
  "البرامج",
  "انضم الينا",
  "غرفة الأخبار",
  "عن إثراء",
  "عضوية إثراء",
];

const navMenus = {
  زورونا: [
    "خطط زيارتك",
    "الزيارات المدرسية",
    "الزيارات الجماعية",
    "جولة إثراء الافتراضية 360",
    "معلومات الدخول والأوقات",
    "سهولة الوصول",
    "الأسئلة الشائعة",
  ],
  البرامج: [
    "مسابقة إثراء للمسريات القصيرة",
    "أسبوع إثراء للتصميم",
    "مبادرة إثراء المحتوى العربي",
    "الشرقية تُبدع",
    "مسابقة أقرأ للعالم العربي",
    "جائزة إثراء للفنون",
    "سياق STEM السعودية",
    "إثراء التطوع",
    "سينك",
  ],
  "انضم الينا": ["التوظيف", "التطوع", "عضوية إثراء", "تعاون مع إثراء"],
  "غرفة الأخبار": ["الأخبار", "البيانات الصحفية", "مكتبة الصور", "تواصل معنا"],
  "عن إثراء": ["عن إثراء", "الرؤية والرسالة", "دليل الهوية", "تقرير إثراء السنوي"],
  "عضوية إثراء": ["عضوية الأفراد", "عضوية العائلات", "مزايا العضوية", "انضم الآن"],
};

const TicketIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
    aria-hidden="true"
  >
    <path d="M4 9V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a3 3 0 0 0 0 6v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a3 3 0 0 0 0-6Z" />
    <path d="M14 5v14" strokeDasharray="2 2" />
  </svg>
);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = (item) => {
    setOpenMenu((current) => (current === item ? null : item));
    mobileMenuRef.current?.hidePopover?.();
  };

  useEffect(() => {
    if (!openMenu) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  return (
    <div className="navbar gap-7 absolute top-4 left-0 z-50 w-full">
      <div className="relative z-50">
        <a className="btn btn-ghost text-xl" onClick={() => setOpenMenu(null)}>
          <img src={logo} alt="إثراء" className="h-20 max-h-full sm:h-24 lg:h-28" />
        </a>
      </div>

      <div className="hidden lg:block lg:w-1/3" aria-hidden="true" />

      <div className="relative z-50 flex-1">
        <ul className="menu menu-horizontal px-1">
          <button
            type="button"
            className="btn sm:hidden"
            popoverTarget="my-megamenu-3"
            onClick={() => setOpenMenu(null)}
          >
            Menu
          </button>

          <div
            ref={mobileMenuRef}
            className="megamenu max-sm:megamenu-vertical p-2"
            id="my-megamenu-3"
            popover="auto"
          >
            {navlinks.map((item) => (
              <button
                key={item}
                type="button"
                className={`flex items-center px-4 py-2 text-lg font-bold text-white underline-offset-8 transition-colors hover:text-primary max-sm:text-primary ${
                  openMenu === item ? "underline decoration-primary decoration-2" : ""
                }`}
                onClick={() => toggleMenu(item)}
                aria-expanded={openMenu === item}
                aria-controls="c1"
              >
                {item}
              </button>
            ))}
          </div>
        </ul>

        <Link to="/tours-ithra" className="btn btn-primary gap-2" onClick={() => setOpenMenu(null)}>
          <TicketIcon />
          جولات إثراء
        </Link>
      </div>

      {openMenu && (
        <>
          <button
            type="button"
            aria-label="إغلاق القائمة"
            className="fixed inset-0 z-40 cursor-default bg-secondary/80 backdrop-blur-sm"
            onClick={() => setOpenMenu(null)}
          />

          <div
            id="c1"
            className="footer-gradient fixed inset-x-0 top-28 bottom-0 z-50 overflow-y-auto text-white"
          >
            <div className="container min-h-full py-10 lg:py-20">
              <div className="grid min-h-full grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
                <div className="lg:col-span-1 lg:border-e lg:border-white/10 lg:pe-8">
                  <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{openMenu}</h2>
                </div>

                <div className="lg:col-span-1 lg:border-e lg:border-white/10 lg:ps-8">
                  <ul className="space-y-4 sm:space-y-5">
                    {navMenus[openMenu].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          onClick={() => setOpenMenu(null)}
                          className="text-base text-white/80 transition-colors hover:text-primary sm:text-lg"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
