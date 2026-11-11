import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import appleImg from "@/assets/imgs/apple-store-ar.svg";
import gPlayImg from "@/assets/imgs/google-store-ar.svg";
import phoneFrame from "@/assets/imgs/iphone-arabic.svg";
import { HERO_POSTER, HERO_VIDEO } from "@/data/heroVideo";

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
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                    تجول في متجر وسام
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                aria-label="تحميل التطبيق من متجر آبل"
                className="inline-flex items-center rounded-full bg-white px-4 py-2.5 shadow-xl shadow-black/30 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                <img
                  src={appleImg}
                  alt="تحميل من App Store"
                  className="h-9 w-auto sm:h-10"
                />
              </Link>

              <Link
                to="/"
                aria-label="تحميل التطبيق من متجر جوجل"
                className="inline-flex items-center rounded-full bg-white px-4 py-2.5 shadow-xl shadow-black/30 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                <img
                  src={gPlayImg}
                  alt="تحميل من Google Play"
                  className="h-9 w-auto sm:h-10"
                />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:self-end">
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
