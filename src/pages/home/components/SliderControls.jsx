import { ArrowLeft, ArrowRight } from "lucide-react";

const NavButton = ({ label, onClick, disabled, children }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    disabled={disabled}
    className="grid size-11 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/40 disabled:hover:bg-transparent"
  >
    {children}
  </button>
);

/**
 * Shared footer for the home sliders: a progress line on the right (RTL)
 * and prev/next arrows on the left.
 *
 * @param {object}  props.swiperRef  ref holding the Swiper instance
 * @param {number}  props.progress   Swiper progress, 0..1
 */
const SliderControls = ({
  swiperRef,
  progress,
  prevLabel = "السابق",
  nextLabel = "التالي",
  className = "",
}) => (
  <div className={`flex items-center justify-between gap-6 ${className}`}>
    <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/25">
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-150 ease-linear"
        style={{ width: `${Math.max(progress, 0.04) * 100}%` }}
      />
    </div>

    <div className="flex items-center gap-3">
      <NavButton
        label={prevLabel}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={progress <= 0.001}
      >
        <ArrowRight className="size-5" aria-hidden="true" />
      </NavButton>

      <NavButton
        label={nextLabel}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={progress >= 0.999}
      >
        <ArrowLeft className="size-5" aria-hidden="true" />
      </NavButton>
    </div>
  </div>
);

export default SliderControls;
