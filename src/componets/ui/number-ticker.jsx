import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

const format = (value) => new Intl.NumberFormat("en-US").format(Math.round(value));

export const NumberTicker = ({ value, delay = 0, className, ...props }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return undefined;
    if (reduceMotion) {
      springValue.jump(value);
      return undefined;
    }
    const timer = window.setTimeout(() => motionValue.set(value), delay * 1000);
    return () => window.clearTimeout(timer);
  }, [isInView, reduceMotion, value, delay, motionValue, springValue]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) ref.current.textContent = format(latest);
      }),
    [springValue]
  );

  // The invisible copy of the final value reserves the full width/height up front, so counting
  // up never changes the layout (no wrapping, no shifting of surrounding content).
  return (
    <span
      dir="ltr"
      className={cn("inline-grid whitespace-nowrap tabular-nums", className)}
      {...props}
    >
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {format(value)}
      </span>
      <span ref={ref} className="col-start-1 row-start-1">
        0
      </span>
    </span>
  );
};
