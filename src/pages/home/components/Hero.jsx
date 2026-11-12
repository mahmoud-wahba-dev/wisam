import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

import kid1 from "@/assets/imgs/kids/kid.webp";
import kid2 from "@/assets/imgs/kids/kid2.webp";
import kid3 from "@/assets/imgs/kids/kid3.webp";
import kid4 from "@/assets/imgs/kids/kid4.webp";
import kid5 from "@/assets/imgs/kids/kid5.webp";
import { HERO_POSTER, HERO_VIDEO } from "@/data/heroVideo";
import { CardBody, CardContainer, CardItem } from "@/componets/ui/3d-card";

const slides = [
  {
    title: "تعرّف علينا",
    to: "/about-wisam/story",
    image: kid1,
    overlay: "from-secondary/95 via-secondary/35",
  },
  {
    title: "الحوكمة والشفافية",
    to: "/governance/legal-documents",
    image: kid2,
    overlay: "from-info/90 via-info/35",
  },
  {
    title: "تقاريرنا",
    to: "/reports/profile",
    image: kid3,
    overlay: "from-accent/90 via-accent/35",
  },
  {
    title: "المركز الإعلامي",
    to: "/media-center/news",
    image: kid4,
    overlay: "from-secondary/85 via-secondary/30",
  },
  {
    title: "انضم إلينا",
    to: "/memberships",
    image: kid5,
    overlay: "from-secondary/95 via-secondary/35",
  },
];

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M16.041 15.856c-.034.026-.067.055-.099.087s-.06.064-.087.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-.782-4.95-2.05s-2.05-3.017-2.05-4.95.782-3.682 2.05-4.95 3.017-2.05 4.95-2.05 3.682.782 4.95 2.05 2.05 3.017 2.05 4.95c0 1.886-.745 3.597-1.959 4.856zm5.666 4.437-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-.737 5.618-1.968l3.675 3.675c.391.391 1.024.391 1.414 0s.391-1.024 0-1.414z" />
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

const shouldPlayHeroVideo = () => {
  if (typeof window === "undefined") return false;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
  const connection = navigator.connection;
  if (connection?.saveData) return false;
  return !/(^|-)2g$/.test(connection?.effectiveType ?? "");
};

const Hero = () => {
  const [swiper, setSwiper] = useState(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo] = useState(shouldPlayHeroVideo);
  const headerRef = useRef(null);
  const videoRef = useRef(null);

  // Pause the decorative clip when the hero is off-screen to avoid needless
  // decoding; resume when it comes back into view.
  useEffect(() => {
    const element = headerRef.current;
    const video = videoRef.current;
    if (!element || !video || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.01 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [showVideo]);

  const syncNavigation = (instance) => {
    setAtStart(instance.isBeginning);
    setAtEnd(instance.isEnd);
    setActiveIndex(instance.activeIndex);
  };

  return (
    <header
      ref={headerRef}
      className="brand-gradient relative isolate min-h-screen overflow-x-clip text-white"
    >
      {/* Background layer: clipped so blurs/video never leak, while the
          floating carousel below can extend beyond the hero edge. */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Cheap radial pools instead of 160px CSS blurs — same softness
            without the per-frame paint cost, and hidden under the footage. */}
        <div className="absolute -top-40 -start-32 size-[36rem] rounded-full bg-[radial-gradient(circle,var(--color-primary),transparent_70%)] opacity-25" />
        <div className="absolute bottom-0 end-0 size-[32rem] rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_70%)] opacity-25" />

        {/* Still frame — covers the first paint and doubles as the fallback
            when motion/video is reduced or playback is unavailable. */}
        <img
          src={HERO_POSTER}
          alt=""
          fetchPriority="high"
          decoding="async"
          draggable="false"
          className="absolute inset-0 size-full select-none object-cover"
        />

        {/* Native, muted looping clip — no controls/UI, served locally for
            performance. Paused automatically when scrolled out of view. */}
        {showVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            disablePictureInPicture
            disableRemotePlayback
            className="pointer-events-none absolute inset-0 size-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}

        {/* Side scrim + bottom overlay keep the text legible over the footage */}
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/85 via-secondary/35 to-secondary/10" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
      </div>

      <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-10 pt-36 sm:pt-44 lg:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Heading, search and CTA */}
          <div className="relative z-20 lg:col-span-7">
            <h1
              data-aos="fade-up"
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              ألهم عالمك
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="mt-2 text-lg text-white/85 sm:text-xl">
              وسام، عطاءٌ يمتد
            </p>

            <form
              data-aos="fade-up"
              data-aos-delay="200"
              role="search"
              onSubmit={(event) => event.preventDefault()}
              className="relative mt-8 w-full max-w-lg"
            >
              <label htmlFor="hero-search" className="sr-only">
                ابحث عن البرامج والخدمات والمبادرات
              </label>
              <input
                id="hero-search"
                type="search"
                placeholder="ابحث عن البرامج والخدمات والمبادرات..."
                className="h-14 w-full rounded-full border-0 bg-white ps-12 pe-6 text-base text-secondary shadow-xl placeholder:text-slate-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
              />
              <button
                type="submit"
                aria-label="بحث"
                className="absolute start-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full text-secondary/70 transition-colors hover:bg-secondary/5 hover:text-secondary"
              >
                <SearchIcon />
              </button>
            </form>

            <div data-aos="fade-up" data-aos-delay="300" className="mt-6">
              <Link
                to="/programs"
                className="btn btn-primary h-14 rounded-full px-7 text-base font-bold"
              >
                اكتشف البرامج
                <ArrowIcon direction="left" />
              </Link>
            </div>
          </div>

          {/* Cards slider */}
          <div data-aos="fade-left" data-aos-delay="200" className="relative z-10 min-w-0 lg:col-span-5">
            <Swiper
              onSwiper={(instance) => {
                setSwiper(instance);
                syncNavigation(instance);
              }}
              onSlideChange={syncNavigation}
              onActiveIndexChange={syncNavigation}
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
              className="hero-swiper !overflow-visible"
            >
              {slides.map(({ title, to, image, overlay }, index) => {
                const isActive = index === activeIndex;
                return (
                  <SwiperSlide key={to}>
                    <CardContainer>
                      <CardBody
                        as={Link}
                        to={to}
                        className="group relative flex aspect-9/16 w-full flex-col justify-end rounded-3xl bg-secondary/80 ring-1 ring-white/15"
                      >
                        {/* The artwork floats off the card on hover, like Aceternity's 3D card demo. */}
                        <CardItem
                          translateZ={70}
                          rotateX={10}
                          rotateZ={-5}
                          className="absolute inset-0 overflow-hidden rounded-3xl group-hover:shadow-2xl group-hover:shadow-black/50"
                        >
                          <img
                            src={image}
                            alt=""
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div
                            className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${overlay} to-transparent`}
                          />
                          {/* Inactive/slid cards stay visible but sit under a dim
                              layer so the active card reads clearly. */}
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-secondary/55 transition-opacity duration-500"
                            style={{ opacity: isActive ? 0 : 1 }}
                          />
                        </CardItem>
                        <CardItem translateZ={110} className="relative w-full p-6 pb-7 text-center">
                          <p className="text-lg font-bold text-white drop-shadow-lg sm:text-xl">
                            {title}
                          </p>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="relative z-20 mt-6 flex items-center justify-end gap-3">
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
