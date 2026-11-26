import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

// The four-point star from the Wisam logo. Fades in, then twinkles slowly.
const Sparkle = ({ className, delay = 0 }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("pointer-events-none absolute text-primary", className)}
      initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
      animate={
        reduceMotion
          ? { opacity: 0.85, scale: 1 }
          : { opacity: [0, 1, 0.45, 1], scale: [0, 1, 0.8, 1] }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 4,
              delay,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }
      }
    >
      <path d="M12 0C12.9 7.2 16.8 11.1 24 12 16.8 12.9 12.9 16.8 12 24 11.1 16.8 7.2 12.9 0 12 7.2 11.1 11.1 7.2 12 0Z" />
    </motion.svg>
  );
};

export default Sparkle;
