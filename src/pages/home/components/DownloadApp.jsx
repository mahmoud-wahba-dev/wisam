import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import appleImg from "@/assets/imgs/apple-store-ar.svg";
import gPlayImg from "@/assets/imgs/google-store-ar.svg";
import phoneFrame from "@/assets/imgs/iphone-arabic.svg";
import appPreview from "@/assets/videos/app-preview.mp4";

/*
 * The phone artwork is a white shell with a transparent screen, and the whole
 * handset sits at a slight angle. The path below is the frame file's own inner
 * contour, so clipping the video with it fits the display exactly — notch,
 * rounded corners and tilt included — at any rendered size.
 */
const SCREEN_PATH =
  "M120.2-73.7l41.6,1c3.6,0.1,6.6,2.8,7,6.4l1.3,11.4c0.8,6.6,6.2,12,12,12.2L373.8-38c5.9,0.2,10-5.1,9.3-11.6l-1.1-9.3c-0.5-4.4,3-8.1,7.4-8l39.5,1c22.2,0.6,48.4,21.2,51.2,46l96.6,830.8c2.9,24.8-12.9,44.5-35.1,44l-314.3-4.3c-22.2-0.6-42.7-21.2-45.6-46L85.1-29.7C82.2-54.5,98-74.2,120.2-73.7z";

// The screen is a 381x890 rectangle rotated -6.6°, centred on (329, 388).
// Its axis-aligned bounding box is ~480x928, so the foreignObject must be at
// least that big or the rotation gets clipped at the edges.
const SCREEN_BOX = { x: 79, y: -87, width: 500, height: 950 };
const SCREEN_SIZE = { width: 390, height: 900 };

const DownloadApp = () => {
  const holderRef = useRef(null);
  const videoRef = useRef(null);
  const [nearViewport, setNearViewport] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  // The clip is a few megabytes, so it only starts downloading once the
  // section is about to be seen.
  useEffect(() => {
    const node = holderRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Autoplay is the default; users who ask for reduced motion get a still frame.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, [nearViewport]);

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
                   * The box is wider than the screen so the rotated content has
                   * room to breathe; the clipPath does the actual cropping.
                   */}
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className="flex items-center justify-center bg-black"
                    style={{
                      width: `${SCREEN_BOX.width}px`,
                      height: `${SCREEN_BOX.height}px`,
                    }}
                  >
                    <div
                      className="overflow-hidden bg-black"
                      style={{
                        width: `${SCREEN_SIZE.width}px`,
                        height: `${SCREEN_SIZE.height}px`,
                        transform: "rotate(-6.6deg)",
                      }}
                    >
                      {nearViewport && (
                        <video
                          ref={videoRef}
                          src={appPreview}
                          className="h-full w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
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
