import { useEffect, useRef, useState } from "react";
import phoneFrame from "@/assets/imgs/iphone-arabic.svg";
import { HERO_POSTER, HERO_VIDEO } from "@/data/heroVideo";

// TODO: replace with the society's own Salla store link.
const SALLA_STORE_URL = "https://salla.sa/";

// Salla mark (Simple Icons).
const SallaLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.862 13.439a1.27 1.27 0 0 0-.81-.555 1.27 1.27 0 0 0-.964.18c-3.422 2.231-6.75 2.231-10.178 0a1.27 1.27 0 0 0-.964-.18 1.283 1.283 0 0 0-.434 2.327c2.142 1.394 4.326 2.1 6.49 2.1 2.166 0 4.348-.706 6.488-2.102a1.27 1.27 0 0 0 .555-.81 1.27 1.27 0 0 0-.18-.964zm5.103 2.82-1.171-9.764a5.24 5.24 0 0 0-5.2-4.614H6.406a5.236 5.236 0 0 0-5.198 4.612l-1.17 9.766a5.235 5.235 0 0 0 5.198 5.86h13.529a5.238 5.238 0 0 0 5.198-5.86zm-3.21 2.4c-.532.6-1.265.929-2.066.929H5.311c-.801 0-1.536-.33-2.066-.929a2.73 2.73 0 0 1-.676-2.16l1.157-9.657A2.764 2.764 0 0 1 6.468 4.41h11.064a2.765 2.765 0 0 1 2.742 2.432l1.157 9.656a2.72 2.72 0 0 1-.676 2.161" />
  </svg>
);

/*
 * The phone artwork is a white shell with a transparent screen, and the whole
 * handset sits at a slight angle. The path below is the frame file's own inner
 * contour, so clipping the footage with it fits the display exactly — notch,
 * rounded corners and tilt included — at any rendered size.
 */
const SCREEN_PATH =
  "M120.2-73.7l41.6,1c3.6,0.1,6.6,2.8,7,6.4l1.3,11.4c0.8,6.6,6.2,12,12,12.2L373.8-38c5.9,0.2,10-5.1,9.3-11.6l-1.1-9.3c-0.5-4.4,3-8.1,7.4-8l39.5,1c22.2,0.6,48.4,21.2,51.2,46l96.6,830.8c2.9,24.8-12.9,44.5-35.1,44l-314.3-4.3c-22.2-0.6-42.7-21.2-45.6-46L85.1-29.7C82.2-54.5,98-74.2,120.2-73.7z";

// The screen is a 381x890 rectangle rotated -6.6°, centred on (329, 388).
// Its axis-aligned bounding box is ~480x928, so the foreignObject must be at
// least that big or the rotation gets clipped at the edges.
const SCREEN_BOX = { x: 79, y: -87, width: 500, height: 950 };

/*
 * The layer that holds the footage is intentionally larger than the screen
 * (~520x1000, still centred). The clip path does the cropping, but the content
 * box has to cover the *whole* tilt-adjusted contour — the screen reaches about
 * 483px from the centre along its own axis, so a 390x900 box left the top-left
 * and bottom edges unlit and the dark section background showed through as a
 * black notch. Anything bigger than the contour is invisible: the frame artwork
 * paints over it and the clip trims it.
 */
const SCREEN_SIZE = { width: 520, height: 1000 };

const DownloadApp = () => {
  const holderRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  // The clip is shared with the hero, so it is usually already cached. It is
  // mounted just after the first paint, and the timer is a guarantee: some
  // browsers delay or never deliver IntersectionObserver callbacks, and the
  // screen must never stay as a still poster. Playback pauses whenever the
  // phone leaves the viewport.
  useEffect(() => {
    const node = holderRef.current;
    const mountTimer = window.setTimeout(() => setShowVideo(true), 600);

    if (!node || typeof IntersectionObserver === "undefined") {
      return () => window.clearTimeout(mountTimer);
    }

    const reduceMotion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowVideo(true);

        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting && !reduceMotion()) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(mountTimer);
      observer.disconnect();
    };
  }, []);

  // Autoplay is the default; users who ask for reduced motion get a still frame.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, [showVideo]);

  return (
    <section
      id="download-app"
      className="brand-gradient relative overflow-hidden pb-16 lg:pb-0"
    >
      {/* Aurora accent — teal bloom behind the top of the handset */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-48 size-[32rem] rounded-full bg-accent/35 blur-[140px]" />
      </div>

      <div className="container relative">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col items-center text-center">
            <h2 data-aos="fade-right" className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                    تجول في متجر وسام
            </h2>

            <div data-aos="fade-up" data-aos-delay="150" className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={SALLA_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white py-2 ps-2 pe-6 text-secondary shadow-xl shadow-black/30 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                <span className="grid size-11 place-items-center rounded-full bg-[#004D5A] text-[#BAF3E6] sm:size-12">
                  <SallaLogo className="size-6 sm:size-7" />
                </span>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-xs text-secondary/70">تسوّق الآن عبر</span>
                  <span className="text-lg font-extrabold">متجرنا على سلة</span>
                </span>
              </a>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="relative flex justify-center lg:self-end">
            <div
              ref={holderRef}
              className="relative w-64 sm:w-80 lg:-mb-28 lg:w-[26rem] xl:-mb-36 xl:w-[32rem]"
            >
              <svg
                viewBox="5 -109 622 1010"
                className="block h-auto w-full"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <clipPath id="phone-screen-clip">
                    <path d={SCREEN_PATH} />
                  </clipPath>
                </defs>

                <foreignObject
                  x={SCREEN_BOX.x}
                  y={SCREEN_BOX.y}
                  width={SCREEN_BOX.width}
                  height={SCREEN_BOX.height}
                  clipPath="url(#phone-screen-clip)"
                >
                  {/*
                   * The layer is bigger than the screen so the rotated content
                   * covers the whole contour; the clipPath does the actual
                   * cropping. Centring is explicit (translate + rotate) so the
                   * overflow can never settle to one side. The poster sits
                   * behind the video so the screen is never black — not before
                   * the video mounts, and not while it buffers.
                   */}
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className="relative overflow-hidden"
                    style={{
                      width: `${SCREEN_BOX.width}px`,
                      height: `${SCREEN_BOX.height}px`,
                      backgroundImage: `url(${HERO_POSTER})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 overflow-hidden"
                      style={{
                        width: `${SCREEN_SIZE.width}px`,
                        height: `${SCREEN_SIZE.height}px`,
                        transform: "translate(-50%, -50%) rotate(-6.6deg)",
                      }}
                    >
                      <img
                        src={HERO_POSTER}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 size-full object-cover"
                      />
                      {showVideo && (
                        <video
                          ref={videoRef}
                          src={HERO_VIDEO}
                          poster={HERO_POSTER}
                          className="absolute inset-0 size-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      )}
                    </div>
                  </div>
                </foreignObject>
              </svg>

              <img
                src={phoneFrame}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
