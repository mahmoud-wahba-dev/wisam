import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/imgs/logo-nav-removebg.webp";
import { Link } from "react-router";
import { HeartHandshake } from "lucide-react";
import { navSections } from "@/data/siteNav";

const navlinks = navSections.map((section) => section.label);

// Each menu points at the pages registered in `navSections`.
const navMenus = Object.fromEntries(
  navSections.map(({ label, basePath, pages }) => [
    label,
    pages.map((page) => ({
      label: page.label,
      to: `${basePath}/${page.slug}`,
    })),
  ])
);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  // One step behind `openMenu`: keeps the previous menu mounted so the panel
  // still has content to show while it animates out.
  const [activeMenu, setActiveMenu] = useState(null);
  // Bumped on every open so the staggered content animation replays even when
  // the same menu is reopened.
  const [menuKey, setMenuKey] = useState(0);
  const mobileMenuRef = useRef(null);
  const isOpen = openMenu !== null;

  const toggleMenu = (item) => {
    const closing = openMenu === item;
    setActiveMenu(item);
    // Only replay the staggered entrance when something is actually opening —
    // bumping it on close would make the links re-animate while fading out.
    if (!closing) setMenuKey((key) => key + 1);
    setOpenMenu(closing ? null : item);
    mobileMenuRef.current?.hidePopover?.();
  };

  const closeMenu = () => setOpenMenu(null);

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
    <div className="navbar gap-7 absolute top-0 left-0 z-50 w-full">
      <div className="relative z-50">
        <Link to={"/"} className="btn btn-link text-xl" onClick={() => setOpenMenu(null)}>
          <img src={logo} alt="وسام" className="max-h-20" />
        </Link>
      </div>

      <div className="hidden lg:block lg:w-1/3" aria-hidden="true" />

      <div className="relative z-50 flex-1 flex-nowrap">
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
                className={`flex items-center whitespace-nowrap px-4 py-2 text-base font-bold text-white underline-offset-8 transition-colors hover:text-primary max-sm:text-primary ${
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

        <Link to="/join" className="btn btn-primary gap-2" onClick={() => setOpenMenu(null)}>
          <HeartHandshake className="size-5" aria-hidden="true" />
          انضم إلينا
        </Link>
      </div>

      {/* Backdrop — fades in/out instead of snapping. */}
      <button
        type="button"
        aria-label="إغلاق القائمة"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 cursor-default bg-secondary/80 backdrop-blur-sm transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/*
        The panel stays mounted so `opacity`/`transform`/`visibility` can
        transition in both directions. `activeMenu` keeps its content alive
        during the closing animation.
      */}
      <div
        id="c1"
        aria-hidden={!isOpen}
        className={`footer-gradient fixed inset-x-0 top-28 bottom-0 z-50 overflow-y-auto text-white transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div
          key={`${activeMenu}-${menuKey}`}
          className="container min-h-full py-10 lg:py-20"
        >
          {activeMenu && (
            <div className="grid min-h-full grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
              <div className="lg:col-span-1 lg:border-e lg:border-white/10 lg:pe-8">
                <h2 className="menu-item-in text-2xl font-bold motion-reduce:animate-none sm:text-3xl lg:text-4xl">
                  {activeMenu}
                </h2>
              </div>

              <div className="lg:col-span-1 lg:border-e lg:border-white/10 lg:ps-8">
                <ul className="space-y-4 sm:space-y-5">
                  {navMenus[activeMenu].map(({ label, to }, index) => (
                    <li
                      key={label}
                      style={{ animationDelay: `${index * 45}ms` }}
                      className="menu-item-in motion-reduce:animate-none"
                    >
                      <Link
                        to={to}
                        onClick={closeMenu}
                        className="text-base text-white/80 transition-colors hover:text-primary sm:text-lg"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
