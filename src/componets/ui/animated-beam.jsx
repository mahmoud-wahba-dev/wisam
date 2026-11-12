import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Quadratic curve that leaves the source at an angle and lands vertically on the target.
const buildPath = (container, from, to, spread) => {
  const box = container.getBoundingClientRect();
  const a = from.getBoundingClientRect();
  const b = to.getBoundingClientRect();

  const endX = b.left - box.left + b.width / 2;
  const endY = b.top - box.top + b.height / 2;
  const centerX = a.left - box.left + a.width / 2;
  const startX = centerX + (endX - centerX) * spread;
  const startY = a.top - box.top + a.height / 2;

  return {
    width: box.width,
    height: box.height,
    d: `M ${startX},${startY} Q ${endX},${(startY + endY) / 2} ${endX},${endY}`,
  };
};

export const AnimatedBeam = ({
  containerRef,
  fromRef,
  toRef,
  spread = 0.15,
  delay = 0,
  duration = 3,
  pathColor = "rgba(255,255,255,0.25)",
  beamColor = "var(--color-primary)",
  pathWidth = 1.5,
  className,
}) => {
  const [geometry, setGeometry] = useState({ width: 0, height: 0, d: "" });

  useEffect(() => {
    const update = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        setGeometry(buildPath(containerRef.current, fromRef.current, toRef.current, spread));
      }
    };

    const observer = new ResizeObserver(update);
    if (containerRef.current) observer.observe(containerRef.current);
    update();
    return () => observer.disconnect();
  }, [containerRef, fromRef, toRef, spread]);

  const { width, height, d } = geometry;

  return (
    <svg
      fill="none"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className={cn("pointer-events-none absolute top-0 left-0 transform-gpu", className)}
    >
      <motion.path
        d={d}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
      />
      <path
        d={d}
        pathLength={1}
        stroke={beamColor}
        strokeWidth={pathWidth + 1}
        strokeLinecap="round"
        strokeDasharray="0.18 1"
        className="motion-reduce:hidden"
        style={{
          animation: `beam-travel ${duration}s ease-in-out ${delay + 1.2}s infinite both`,
          filter: `drop-shadow(0 0 4px ${beamColor})`,
        }}
      />
    </svg>
  );
};
