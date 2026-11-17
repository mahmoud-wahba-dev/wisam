import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/imgs/logo-nav-removebg.webp";
import { Link } from "react-router";
import { navSections } from "@/data/siteNav";

const navlinks = navSections.map((s) => s.label);
const navMenus = Object.fromEntries(
  navSections.map(({ label, basePath, pages }) => [
    label,
    pages.map((p) => ({ label: p.label, to: `${basePath}/${p.slug}` })),
  ])
);

// Height of the fixed navbar — keep in sync with the img h-12/sm:h-14 + daisyUI min-h-16
const NAV_H = "4rem";

const Navbar = () => {
  const [openMenu, setOpenMenu]     = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuKey, setMenuKey]       = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  const mobileMenuRef = useRef(null);
  const prevScrollY   = useRef(0);
  const closeTimer    = useRef(null);

  const isOpen = openMenu !== null;

  // ── Helpers ────────────────────────────────────────────────────────────
  const openPanel = (item) => {
    clearTimeout(closeTimer.current);
    if (openMenu !== item) {
      setActiveMenu(item);
      setMenuKey((k) => k + 1);
    }
    setOpenMenu(item);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  const cancelClose = () => clearTimeout(closeTimer.current);

  const closeMenu = () => {
    clearTimeout(closeTimer.current);
    setOpenMenu(null);
  };

  // Mobile click toggle
  const toggleMenu = (item) => {
    const closing = openMenu === item;
    setActiveMenu(item);
    if (!closing) setMenuKey((k) => k + 1);
    setOpenMenu(closing ? null : item);
    mobileMenuRef.current?.hidePopover?.();
  };

  // ── Scroll ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavVisible(y < 10 || y < prevScrollY.current);
      if (openMenu) closeMenu();
      prevScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openMenu]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e) => { if (e.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMenu]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    <div
      className={`navbar py-0 fixed top-0 left-0 z-50 w-full border-b border-black/5
        transition-transform duration-300
        ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
      style={{
        gap: "1.75rem",
        background: "linear-gradient(180deg, rgba(244,247,248,0.97) 0%, rgba(244,247,248,0.90) 100%)",
      }}
    >
      {/* Logo — kept in its original brand colors in every state */}
      <div className="relative z-50 flex-shrink-0">
        <Link to="/" className="flex items-center p-1" onClick={closeMenu}>
          <img
            src={logo}
            alt="وسام"
            className="h-12 w-auto sm:h-14 object-contain"
          />
        </Link>
      </div>

      <div className="hidden lg:block lg:w-1/3" aria-hidden="true" />

      <div className="relative z-50 flex flex-1 flex-nowrap items-center justify-end gap-3">

        {/* ── Desktop: hover nav buttons ────────────────────────────────── */}
        <ul className="max-lg:hidden flex items-center gap-1 list-none">
          {navlinks.map((item) => (
            <li key={item}>
              <button
                type="button"
                onMouseEnter={() => openPanel(item)}
                onMouseLeave={scheduleClose}
                className={`group relative bg-transparent px-4  font-bold whitespace-nowrap
                  text-base text-secondary transition-colors duration-200 hover:bg-transparent
                  focus:bg-transparent focus-visible:outline-none hover:text-primary
                  ${openMenu === item ? "text-primary" : ""}`}
              >
                {item}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-1.5 h-0.5 origin-center rounded-full bg-primary
                    transition-transform duration-300 ease-out
                    ${openMenu === item ? "scale-x-100" : "scale-x-0"}`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* ── Mobile: popover + click ───────────────────────────────────── */}
        <ul className="menu menu-horizontal px-1 lg:hidden">
          <button
            type="button"
            className="btn sm:hidden"
            popoverTarget="my-megamenu-3"
            onClick={closeMenu}
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
                className={`flex items-center whitespace-nowrap px-4 py-2 text-base font-bold
                  text-white underline-offset-8 transition-colors hover:text-primary max-sm:text-primary
                  ${openMenu === item ? "underline decoration-primary decoration-2" : ""}`}
                onClick={() => toggleMenu(item)}
                aria-expanded={openMenu === item}
                aria-controls="mega-panel"
              >
                {item}
              </button>
            ))}
          </div>
        </ul>
      </div>
    </div>

      {/* Hover bridge: tiny invisible strip that covers the gap between the
          navbar bottom and the mega panel top so the cursor doesn't briefly
          leave both elements and trigger the close timer. */}
      <div
        aria-hidden="true"
        onMouseEnter={cancelClose}
        className="fixed left-0 w-full z-40"
        style={{ top: NAV_H, height: "0.5rem", pointerEvents: isOpen ? "auto" : "none" }}
      />

      {/* ── Backdrop ────────────────────────────────────────────────────── */}
      <button
        type="button"
        aria-label="إغلاق القائمة"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 cursor-default bg-secondary/70 backdrop-blur-sm
          transition-[opacity,visibility] duration-300 ease-out
          ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      />

      {/* ── Mega panel (desktop hover + mobile click) ───────────────────── */}
      <div
        id="mega-panel"
        aria-hidden={!isOpen}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={`footer-gradient fixed inset-x-0 bottom-0 z-50 overflow-y-auto text-white
          transition-[opacity,transform,visibility] duration-300 ease-out
          ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}
        style={{ top: NAV_H }}
      >
        <div key={`${activeMenu}-${menuKey}`} className="container min-h-full py-10 lg:py-20">
          {activeMenu && (
            <div className="grid min-h-full grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
              {/* Section title */}
              <div className="lg:col-span-1 lg:border-e lg:border-white/10 lg:pe-8">
                <h2 className="menu-item-in text-2xl font-bold motion-reduce:animate-none sm:text-3xl lg:text-4xl">
                  {activeMenu}
                </h2>
              </div>

              {/* Links */}
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
    </>
  );
};

export default Navbar;
