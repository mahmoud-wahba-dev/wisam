import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/imgs/logo-nav-removebg.webp";
import { Link } from "react-router";
import { ChevronLeft, ShoppingCart, Users } from "lucide-react";
import { navSections } from "@/data/siteNav";
import navAbout from "@/assets/imgs/nav/about.svg";
import navBook from "@/assets/imgs/nav/book.svg";
import navContacts from "@/assets/imgs/nav/contacts.svg";
import navEservices from "@/assets/imgs/nav/eservices.svg";
import navExternal from "@/assets/imgs/nav/external.svg";
import navFaqs from "@/assets/imgs/nav/faqs.svg";

const navlinks = navSections.map((s) => s.label);

// One glyph per top-level section, shown above its label on desktop. The marks
// are the white outline icons used by the reference government navbar, so they
// read cleanly on the dark bar; `انضم لفريقنا` falls back to the users icon.
const navIcons = {
  "عن وسام": navAbout,
  الحوكمة: navBook,
  برامجنا: navEservices,
  التقارير: navFaqs,
  "تواصل معنا": navContacts,
  "المركز الإعلامي": navExternal,
};
// Each page can optionally carry `children` — sub-links shown in a second
// hover column next to it inside the same mega panel.
const navMenus = Object.fromEntries(
  navSections.map(({ label, basePath, pages }) => [
    label,
    pages.map((p) => ({
      label: p.label,
      to: `${basePath}/${p.slug}`,
      children: p.children?.map((c) => ({
        label: c.label,
        to: `${basePath}/${p.slug}/${c.slug}`,
      })),
    })),
  ]),
);

// Height of the fixed navbar — keep in sync with the h-20 bar below
const NAV_H = "5rem";

// How long the pointer has to rest on another row before an open sub-list
// changes, so a diagonal move towards it doesn't close it on the way.
const SUB_SWITCH_DELAY = 200;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [menuKey, setMenuKey] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const prevScrollY = useRef(0);
  const closeTimer = useRef(null);
  const subTimer = useRef(null);
  const pressPointer = useRef(null);
  const mobileNavRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const isOpen = openMenu !== null;

  // ── Helpers ────────────────────────────────────────────────────────────
  const keepSub = () => clearTimeout(subTimer.current);

  const showSub = (item) => {
    keepSub();
    setActiveSub(item?.children ? item : null);
  };

  const hoverSub = (event, item) => {
    // A tap also emits pointerenter; taps are handled by the click instead.
    if (event.pointerType !== "mouse") return;
    keepSub();
    if (!activeSub) showSub(item);
    else subTimer.current = setTimeout(() => showSub(item), SUB_SWITCH_DELAY);
  };

  // A mouse click keeps the hovered sub-list open; touch and keyboard toggle it.
  const pressParent = (item) => {
    const byMouse = pressPointer.current === "mouse";
    pressPointer.current = null;
    const isShown = activeSub?.label === item.label;
    showSub(!byMouse && isShown ? null : item);
  };

  const openPanel = (item) => {
    clearTimeout(closeTimer.current);
    if (openMenu !== item) {
      setActiveMenu(item);
      setMenuKey((k) => k + 1);
      showSub(null);
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
    showSub(null);
    setMobileOpen(false);
  };

  // Mobile: tapping a section in the hamburger dropdown opens the shared mega panel
  const toggleMenu = (item) => {
    const closing = openMenu === item;
    setActiveMenu(item);
    if (!closing) {
      setMenuKey((k) => k + 1);
      showSub(null);
    }
    setOpenMenu(closing ? null : item);
    setMobileOpen(false);
  };

  // ── Scroll ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavVisible(y < 10 || y < prevScrollY.current);
      setScrolled(y > 24);
      if (openMenu) closeMenu();
      if (mobileOpen) setMobileOpen(false);
      prevScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openMenu, mobileOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMenu]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!mobileOpen) return;
    const onPointerDown = (e) => {
      if (
        !mobileNavRef.current?.contains(e.target) &&
        !mobileDropdownRef.current?.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [mobileOpen]);

  // `revealed` = the bar has dropped back in while the page is scrolled (the
  // "show on scroll up" state). This is the state to target if its background
  // should ever differ from the normal scrolled bar.
  const revealed = scrolled && navVisible;

  return (
    <>
      <div
        className={`navbar h-20 py-0 px-4 sm:px-6 lg:px-10 xl:px-16 fixed top-0 left-0 z-50 w-full border-b
        transition-[translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          scrolled && !revealed
            ? "navbar-gradient border-white/10 shadow-lg shadow-black/20 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent shadow-none backdrop-blur-none"
        }
        ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
        data-nav-state={revealed ? "revealed" : scrolled ? "scrolled" : "top"}
        style={{ gap: "1.75rem" }}
      >
        {/* Logo — rendered white so it reads on the dark navbar */}
        <div className="relative z-50 flex-shrink-0">
          <Link to="/" className="flex items-center p-1" onClick={closeMenu}>
            <img
              src={logo}
              alt="وسام"
              className="h-14 w-auto sm:h-16 object-contain brightness-0 invert"
            />
          </Link>
        </div>

        <div className="hidden lg:block lg:w-1/3" aria-hidden="true" />

        <div className="relative z-50 flex flex-1 flex-nowrap items-center justify-end gap-3">
          {/* ── Desktop: hover nav buttons (icon above label, compact) ──────── */}
          <ul className="max-lg:hidden flex items-center gap-0.5 list-none">
            {navlinks.map((item) => {
              const icon = navIcons[item];
              return (
                <li key={item}>
                  <button
                    type="button"
                    onMouseEnter={() => openPanel(item)}
                    onMouseLeave={scheduleClose}
                    onClick={() => openPanel(item)}
                    aria-expanded={openMenu === item}
                    aria-controls="mega-panel"
                    className={`group relative flex flex-col items-center gap-2 whitespace-nowrap
                    px-2.5 py-1.5 text-xs font-semibold transition-colors duration-200
                    ${openMenu === item ? "text-primary" : "text-white hover:text-primary"}`}
                  >
                    {icon ? (
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className={`h-6 w-auto transition-opacity duration-200
                        ${openMenu === item ? "opacity-70" : "opacity-100"}`}
                      />
                    ) : (
                      // Same 24px box as the SVG marks so this label keeps the
                      // same baseline as the rest of the row.
                      <span className="flex h-6 w-6 items-center justify-center">
                        <Users className="size-5" aria-hidden="true" />
                      </span>
                    )}
                    {item}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-2 -bottom-1 h-0.5 origin-center rounded-full bg-primary
                      transition-transform duration-300 ease-out
                      ${openMenu === item ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ── Mobile / tablet: animated hamburger + dropdown ──────────────── */}
          <div ref={mobileNavRef} className="relative lg:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
              className="relative flex size-10 flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ease-out
                ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-white transition-opacity duration-200 ease-out
                ${mobileOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ease-out
                ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>

          {/* ── Cart (decorative — no link, just simulates an e-commerce icon) ── */}
          <Link
            to={"https://store.wisam.org.sa/"}
            target="_blank"
            type="button"
            aria-label="السلة"
            className="relative inline-flex items-center justify-center rounded-full p-2
            text-white transition-colors hover:text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="size-6 sm:size-7"
            >
              <path d="M18.862 13.439a1.27 1.27 0 0 0-.81-.555 1.27 1.27 0 0 0-.964.18c-3.422 2.231-6.75 2.231-10.178 0a1.27 1.27 0 0 0-.964-.18 1.283 1.283 0 0 0-.434 2.327c2.142 1.394 4.326 2.1 6.49 2.1 2.166 0 4.348-.706 6.488-2.102a1.27 1.27 0 0 0 .555-.81 1.27 1.27 0 0 0-.18-.964zm5.103 2.82-1.171-9.764a5.24 5.24 0 0 0-5.2-4.614H6.406a5.236 5.236 0 0 0-5.198 4.612l-1.17 9.766a5.235 5.235 0 0 0 5.198 5.86h13.529a5.238 5.238 0 0 0 5.198-5.86zm-3.21 2.4c-.532.6-1.265.929-2.066.929H5.311c-.801 0-1.536-.33-2.066-.929a2.73 2.73 0 0 1-.676-2.16l1.157-9.657A2.764 2.764 0 0 1 6.468 4.41h11.064a2.765 2.765 0 0 1 2.742 2.432l1.157 9.656a2.72 2.72 0 0 1-.676 2.161"></path>
            </svg>
            {/* <ShoppingCart className="size-5" aria-hidden="true" />
          <span
            dir="ltr"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            className="absolute -top-1 -end-1 flex size-4 items-center justify-center rounded-full
              bg-primary text-[10px] leading-none text-primary-content"
          >
            0
          </span> */}
          </Link>
        </div>
      </div>

      {/* ── Mobile / tablet hamburger dropdown (full width) ─────────────── */}
      <ul
        ref={mobileDropdownRef}
        className={`fixed inset-x-0 z-40 space-y-1 rounded-b-3xl bg-white p-4 shadow-2xl shadow-black/20
          transition-[opacity,transform,visibility] duration-200 ease-out lg:hidden
          ${mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
        style={{ top: NAV_H }}
      >
        {navlinks.map((item) => {
          const icon = navIcons[item];
          return (
            <li key={item}>
              <button
                type="button"
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-base
                  font-semibold text-secondary transition-colors hover:bg-primary/10 hover:text-primary
                  ${openMenu === item ? "bg-primary/10 text-primary" : ""}`}
                onClick={() => toggleMenu(item)}
                aria-expanded={openMenu === item}
                aria-controls="mega-panel"
              >
                {icon ? (
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-auto brightness-0 opacity-70"
                  />
                ) : (
                  <Users className="size-5 opacity-70" aria-hidden="true" />
                )}
                {item}
                <ChevronLeft
                  className="ms-auto size-4 opacity-40"
                  aria-hidden="true"
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* Hover bridge: tiny invisible strip that covers the gap between the
          navbar bottom and the mega panel top so the cursor doesn't briefly
          leave both elements and trigger the close timer. */}
      <div
        aria-hidden="true"
        onMouseEnter={cancelClose}
        className="fixed left-0 w-full z-40"
        style={{
          top: NAV_H,
          height: "0.5rem",
          pointerEvents: isOpen ? "auto" : "none",
        }}
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
        <div
          key={`${activeMenu}-${menuKey}`}
          className="container min-h-full py-10 lg:py-20"
        >
          {activeMenu && (
            <div className="grid min-h-full grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
              {/* Section title */}
              <div className="lg:col-span-1 lg:border-e lg:border-white/10 lg:pe-8">
                <h2 className="menu-item-in text-2xl font-bold motion-reduce:animate-none sm:text-3xl lg:text-4xl">
                  {activeMenu}
                </h2>
              </div>

              {/* Top-level items. One with children opens its sub-list: in
                  the next column on desktop, inline underneath on mobile. */}
              <div className="relative lg:col-span-1 lg:border-e lg:border-white/10 lg:ps-8">
                <ul className="space-y-4 sm:space-y-5">
                  {navMenus[activeMenu].map((item, index) => {
                    const expanded = activeSub?.label === item.label;
                    // The entrance animation sits on the trigger, not the <li>:
                    // a transform there would trap the absolute sub-list.
                    const triggerProps = {
                      style: { animationDelay: `${index * 45}ms` },
                      className: `menu-item-in flex w-full items-center justify-between gap-2
                        text-start text-base transition-colors hover:text-primary
                        motion-reduce:animate-none sm:text-lg
                        ${expanded ? "text-primary" : "text-white/80"}`,
                      onPointerEnter: (e) => hoverSub(e, item),
                    };

                    return (
                      <li key={item.label}>
                        {item.children ? (
                          <>
                            <button
                              type="button"
                              {...triggerProps}
                              aria-expanded={expanded}
                              onPointerDown={(e) => {
                                pressPointer.current = e.pointerType;
                              }}
                              onClick={() => pressParent(item)}
                            >
                              {item.label}
                              <ChevronLeft
                                className={`size-4 shrink-0 opacity-60 transition-transform duration-300
                                  ${expanded ? "max-lg:-rotate-90" : ""}`}
                                aria-hidden="true"
                              />
                            </button>

                            {expanded && (
                              // At lg, `top-0 start-full` places the list at
                              // the head of the third column.
                              <ul
                                onPointerEnter={keepSub}
                                className="mt-4 space-y-4 border-s border-primary/40 ps-5 sm:space-y-5
                                  lg:absolute lg:start-full lg:top-0 lg:mt-0 lg:w-full lg:border-s-0 lg:ps-8"
                              >
                                {item.children.map((child, childIndex) => (
                                  <li
                                    key={child.label}
                                    style={{
                                      animationDelay: `${childIndex * 45}ms`,
                                    }}
                                    className="menu-item-in motion-reduce:animate-none"
                                  >
                                    <Link
                                      to={child.to}
                                      onClick={closeMenu}
                                      className="block text-base text-white/80 transition-colors
                                        hover:text-primary sm:text-lg"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <Link
                            to={item.to}
                            {...triggerProps}
                            onFocus={() => showSub(null)}
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Empty columns: the third one hosts the desktop sub-list. */}
              <div
                className="hidden lg:col-span-1 lg:block lg:border-e lg:border-white/10"
                aria-hidden="true"
              />
              <div
                className="hidden lg:col-span-1 lg:block"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
