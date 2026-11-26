// Motion presets shared by the "عن وسام" pages.

export const EASE = [0.22, 1, 0.36, 1];

export const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const stagger = (step = 0.12, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: step, delayChildren: delay } },
});
