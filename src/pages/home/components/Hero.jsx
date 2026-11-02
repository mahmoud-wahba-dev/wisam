import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  {
    title: "سجل الآن!",
    href: "https://www.ithra.com/ar/special-programs/iread",
    image:
      "https://www.ithra.com/application/files/cache/thumbnails/139685522d2e62e198246a38e594fdd0.jpg",
    overlay: "from-info/90 via-info/35",
  },
  {
    title: "سجل الآن!",
    href: "https://www.ithra.com/ar/special-programs/stem-racing-ksa/stem-racing-registration-2027",
    image:
      "https://www.ithra.com/application/files/cache/thumbnails/ee28d3bea2ddef4f09130ae778ae5220.jpg",
    overlay: "from-primary/95 via-primary/40",
  },
  {
    title: "اكتشف الآن!",
    href: "https://ithraeyat.ithra.com/ar/editions/jdhwr",
    image:
      "https://www.ithra.com/application/files/cache/thumbnails/b3e716a185f005ef36fecc292a4d3359.jpg",
    overlay: "from-accent/90 via-accent/35",
  },
  {
    title: "اكتشف المعرض الآن!",
    href: "https://www.ithra.com/ar/programme/2026/ithra-art-prize-exhibition",
    image:
      "https://www.ithra.com/application/files/cache/thumbnails/393ceb35c6b42e0c009eba72ca3ad551.png",
    overlay: "from-info/90 via-info/35",
  },
  {
    title: "احجز مقعدك الآن!",
    href: "https://www.ithra.com/ar/visit-ithra/attractions/ithra-academy",
    image:
      "https://www.ithra.com/application/files/cache/thumbnails/d781995bfa4b7f5563460af85311dbfc.png",
    overlay: "from-secondary/85 via-secondary/30",
  },
];

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M16.041 15.856c-.034.026-.067.055-.099.087s-.06.064-.087.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-.782-4.95-2.05s-2.05-3.017-2.05-4.95.782-3.682 2.05-4.95 3.017-2.05 4.95-2.05 3.682.782 4.95 2.05 2.05 3.017 2.05 4.95c0 1.886-.745 3.597-1.959 4.856zm5.666 4.437-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-.737 5.618-1.968l3.675 3.675c.391.391 1.024.391 1.414 0s.391-1.024 0-1.414z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ArrowIcon = ({ direction }) => (
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
    <path d={direction === "right" ? "m9 5 7 7-7 7" : "m15 5-7 7 7 7"} />
  </svg>
);

const Hero = () => {
  const [swiper, setSwiper] = useState(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncNavigation = (instance) => {
    setAtStart(instance.isBeginning);
    setAtEnd(instance.isEnd);
  };

  return (
    <header className="relative isolate min-h-screen overflow-hidden bg-primary text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://www.ithra.com/application/files/cache/thumbnails/6ed2768de9916a7f3f6d40e5e9f3d877.jpg"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="https://www.ithra.com/application/files/8416/9884/3351/drone_1.mp4"
      />

      {/* Bottom-half overlay + side scrim, as in the original banner */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-primary/80 via-primary/25 to-primary/10" />

      <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-10 pt-36 sm:pt-44 lg:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Heading, search and CTA */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              ألهم عالمك
            </h1>
            <p className="mt-2 text-lg text-white/85 sm:text-xl">إثراء, وجهتك الثقافية</p>

            <form
              role="search"
              onSubmit={(event) => event.preventDefault()}
              className="relative mt-8 w-full max-w-lg"
            >
              <label htmlFor="hero-search" className="sr-only">
                ابحث عن المعارض والبرامج والفعاليات والعروض
              </label>
              <input
                id="hero-search"
                type="search"
                placeholder="ابحث عن المعارض والبرامج والفعاليات والعروض..."
                className="h-14 w-full rounded-full border-0 bg-white ps-12 pe-6 text-base text-primary shadow-xl placeholder:text-slate-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary/40"
              />
              <button
                type="submit"
                aria-label="بحث"
                className="absolute start-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full text-primary/70 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                <SearchIcon />
              </button>
            </form>

            <div className="mt-6">
              <a
                href="#program"
                className="btn btn-secondary h-14 rounded-full px-7 text-base font-bold"
              >
                اكتشف البرامج
                <ChevronDownIcon />
              </a>
            </div>
          </div>

          {/* Cards slider */}
          <div className="relative min-w-0 lg:col-span-5">
            <Swiper
              dir="rtl"
              onSwiper={(instance) => {
                setSwiper(instance);
                syncNavigation(instance);
              }}
              onSlideChange={syncNavigation}
              onResize={syncNavigation}
              slidesPerView={1.15}
              spaceBetween={16}
              speed={600}
              grabCursor
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 24 },
                1536: { slidesPerView: 2, spaceBetween: 30 },
              }}
              className="hero-swiper"
            >
              {slides.map(({ title, href, image, overlay }) => (
                <SwiperSlide key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex aspect-9/16 w-full flex-col justify-end overflow-hidden rounded-3xl bg-primary"
                  >
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${overlay} to-transparent`}
                    />
                    <div className="relative p-6 pb-7 text-center">
                      <p className="text-lg font-bold text-white sm:text-xl">{title}</p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-5 flex items-center justify-end gap-3 lg:absolute lg:bottom-0 lg:end-0 lg:mt-0">
              <button
                type="button"
                aria-label="الشريحة السابقة"
                onClick={() => swiper?.slidePrev()}
                disabled={atStart}
                className="grid size-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:text-white/30"
              >
                <ArrowIcon direction="right" />
              </button>
              <button
                type="button"
                aria-label="الشريحة التالية"
                onClick={() => swiper?.slideNext()}
                disabled={atEnd}
                className="grid size-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:text-white/30"
              >
                <ArrowIcon direction="left" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
