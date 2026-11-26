import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE } from "./motion";

// Round portrait (or initial letter) inside a ring that draws itself when it
// scrolls into view. The name is always printed next to it, so it is decorative.
const MemberAvatar = ({ name, photo, delay = 0, className }) => {
  const reduceMotion = useReducedMotion();

  return (
    <span aria-hidden="true" className={cn("relative block shrink-0", className)}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full -rotate-90">
        <circle
          cx="50"
          cy="50"
          r="48.5"
          fill="none"
          strokeWidth="1"
          className="stroke-accent/20"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="48.5"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="stroke-accent transition-colors duration-500 group-hover:stroke-primary"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 1.4, delay, ease: EASE }}
        />
      </svg>

      <span className="absolute inset-[6%] grid place-items-center overflow-hidden rounded-full bg-base-200">
        {photo ? (
          <img
            src={photo}
            alt=""
            // Slightly enlarged so the circle clips the edges of the crop.
            className="size-full scale-105 object-cover transition-transform duration-700 ease-out
              group-hover:scale-[1.13] motion-reduce:transition-none"
          />
        ) : (
          <span className="text-4xl font-bold text-accent">{name.charAt(0)}</span>
        )}
      </span>
    </span>
  );
};

export default MemberAvatar;
