import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { packages } from "@/data/packages";

const AUTOPLAY_MS = 3000;
const SLIDE_MS = 700;

const PackageDetails = ({ pkg, animateIn = false, baseDelay = 0 }) => {
  const enter = animateIn
    ? "animate-[package-fade-up_450ms_ease-out_both] motion-reduce:animate-none"
    : "";

  return (
    <>
      <p
        className={`${enter} mt-4 text-sm leading-relaxed text-secondary/75`}
        style={animateIn ? { animationDelay: `${baseDelay + 100}ms` } : undefined}
      >
        {pkg.description}
      </p>

      <Link
        to="/memberships"
        className={`${enter} btn btn-primary pointer-events-auto mt-6 w-fit rounded-full border-none px-6`}
        style={animateIn ? { animationDelay: `${baseDelay + 200}ms` } : undefined}
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        مزايا العضوية
      </Link>
    </>
  );
};

const PackageContent = ({ pkg, animateIn = true }) => {
  const enter = animateIn
    ? "animate-[package-fade-up_450ms_ease-out_both] motion-reduce:animate-none"
    : "";

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-8 text-center">
      <h3
        className={`${enter} text-xl font-extrabold leading-snug text-secondary lg:text-2xl`}
        style={animateIn ? { animationDelay: "0ms" } : undefined}
      >
        {pkg.title}
      </h3>

      <PackageDetails pkg={pkg} animateIn={animateIn} />
    </div>
  );
};

const PackagesSlider = () => {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [paused, setPaused] = useState(false);
  const leaveTimer = useRef(null);

  const select = useCallback(
    (index) => {
      if (index === active) return;

      setLeaving(active);
      setActive(index);

      window.clearTimeout(leaveTimer.current);
      leaveTimer.current = window.setTimeout(() => setLeaving(null), 450);
    },
    [active]
  );

  useEffect(() => () => window.clearTimeout(leaveTimer.current), []);

  // Auto-advance. Restarts after a manual pick because `active` is a dependency.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (paused || reduceMotion) return undefined;

    const timer = window.setTimeout(() => {
      select((active + 1) % packages.length);
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [active, paused, select]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Mobile: stacked accordion */}
      <div className="flex flex-col gap-2 md:hidden">
        {packages.map((pkg, index) => {
          const isActive = index === active;

          return (
            <div
              key={pkg.id}
              className={`overflow-hidden rounded-3xl transition-colors duration-300 ${
                isActive
                  ? "bg-white text-secondary"
                  : "bg-white/5 text-white ring-1 ring-white/10"
              }`}
            >
              <button
                type="button"
                onClick={() => select(index)}
                aria-pressed={isActive}
                className="block w-full px-5 py-4 text-start text-lg font-extrabold"
              >
                {pkg.title}
              </button>

              <div
                className={`grid transition-all duration-500 ease-out motion-reduce:transition-none ${
                  isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col items-center px-5 pb-6 text-center">
                    <PackageDetails pkg={pkg} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: glass panel with a single white card sliding between slots */}
      <div className="relative hidden rounded-4xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-md md:block">
        <div className="relative h-80">
          <div className="flex h-full">
            {packages.map((pkg, index) => {
              const isActive = index === active;

              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => select(index)}
                  aria-pressed={isActive}
                  aria-label={`عرض ${pkg.title}`}
                  className={`flex flex-1 items-center justify-center px-3 text-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary ${
                    isActive
                      ? "text-transparent"
                      : "text-white hover:text-amber-light"
                  }`}
                >
                  <span className="text-lg font-extrabold leading-snug lg:text-xl">
                    {pkg.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 start-0 w-1/4 transition-transform ease-out motion-reduce:transition-none"
            style={{
              transform: `translateX(-${active * 100}%)`,
              transitionDuration: `${SLIDE_MS}ms`,
            }}
          >
            <div className="relative h-full overflow-hidden rounded-3xl bg-white text-secondary shadow-2xl shadow-black/30">
              {leaving !== null && (
                <div
                  key={`out-${leaving}`}
                  className="absolute inset-0 animate-[package-content-out_350ms_ease-out_forwards] motion-reduce:animate-none"
                >
                  <PackageContent pkg={packages[leaving]} animateIn={false} />
                </div>
              )}

              <div key={active} className="absolute inset-0">
                <PackageContent pkg={packages[active]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSlider;
