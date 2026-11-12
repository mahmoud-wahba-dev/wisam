import { useState } from "react";
import {
  Atom,
  BookOpen,
  Drama,
  Film,
  Image as ImageIcon,
  Lightbulb,
  Puzzle,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import kid1 from "@/assets/imgs/kids/kid.webp";
import kid2 from "@/assets/imgs/kids/kid2.webp";
import kid3 from "@/assets/imgs/kids/kid3.webp";
import kid4 from "@/assets/imgs/kids/kid4.webp";
import kid5 from "@/assets/imgs/kids/kid5.webp";
import kid6 from "@/assets/imgs/kids/kid6.webp";
import kid7 from "@/assets/imgs/kids/kid7.webp";
import kid8 from "@/assets/imgs/kids/kid8.webp";
import kid9 from "@/assets/imgs/kids/kid9.webp";

const facilities = [
  {
    key: "theater",
    name: "مسرح وسام",
    title: "مسرح",
    subtitle: "وسام",
    icon: Drama,
    image: kid1,
  },
  {
    key: "child-museum",
    name: "متحف الطفل",
    title: "متحف",
    subtitle: "الطفل",
    icon: Puzzle,
    image: kid2,
  },
  {
    key: "museum",
    name: "متحف وسام",
    title: "متحف",
    subtitle: "وسام",
    icon: ImageIcon,
    image: kid3,
  },
  {
    key: "cinema",
    name: "السينما",
    title: "السينما",
    icon: Film,
    image: kid4,
  },
  {
    key: "idea-lab",
    name: "مختبر الأفكار",
    title: "مختبر",
    subtitle: "الأفكار",
    icon: Lightbulb,
    image: kid5,
  },
  {
    key: "library",
    name: "مكتبة وسام",
    title: "مكتبة",
    subtitle: "وسام",
    icon: BookOpen,
    image: kid6,
  },
  {
    key: "dining",
    name: "تجارب الطعام",
    title: "تجارب",
    subtitle: "الطعام",
    icon: UtensilsCrossed,
    image: kid7,
  },
  {
    key: "academy",
    name: "أكاديمية وسام",
    title: "أكاديمية",
    subtitle: "وسام",
    icon: Atom,
    image: kid8,
  },
  {
    key: "energy",
    name: "معرض الطاقة",
    title: "معرض",
    subtitle: "الطاقة",
    icon: Zap,
    image: kid9,
  },
];

const DEFAULT_ACTIVE = 3;

const Marafeqna = () => {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-secondary py-20 text-white lg:py-24">
      {/* Cross-fading facility backdrop */}
      <div className="absolute inset-0 -z-20">
        {facilities.map((facility, index) => (
          <img
            key={facility.key}
            src={facility.image}
            alt=""
            aria-hidden="true"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
              index === activeIndex ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Brand-tinted overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-secondary/95 via-secondary/70 to-secondary/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-secondary/80 via-secondary/10 to-secondary/40" />
      <div className="absolute inset-0 -z-10 bg-accent/10" />

      <div className="container relative z-10 flex justify-start">
        <div>
          <h2 data-aos="fade-right" className="mb-8 text-4xl font-bold sm:text-5xl lg:mb-10">برامجنا</h2>

          <div dir="ltr" className="grid w-fit grid-cols-3 gap-3 sm:gap-5 lg:gap-9 xl:gap-12">
            {facilities.map(({ key, name, title, subtitle, icon: Icon }, index) => {
              const isActive = index === activeIndex;

              // AOS lives on the wrapper: React rewriting the button's className would strip `aos-animate`.
              return (
                <div key={key} data-aos="zoom-in" data-aos-delay={index * 60}>
                <button
                  type="button"
                  aria-label={name}
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`flex size-24 flex-col items-center justify-center gap-2 rounded-3xl border-2 p-2 text-center transition-colors duration-300 sm:size-28 sm:gap-3 xl:size-32 ${
                    isActive
                      ? "border-white bg-primary text-primary-content shadow-2xl shadow-primary/40"
                      : "border-white/80 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                  } focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60`}
                >
                  <Icon className="size-7 sm:size-8" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-xs font-bold leading-tight sm:text-sm xl:text-base">
                    {title}
                    {subtitle && (
                      <>
                        <br />
                        {subtitle}
                      </>
                    )}
                  </span>
                </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marafeqna;
