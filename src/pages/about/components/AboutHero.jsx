import { motion } from "motion/react";
import Breadcrumbs from "@/componets/ui/Breadcrumbs";
import { SLOGAN } from "@/data/about";
import { reveal, stagger } from "./motion";
import Sparkle from "./Sparkle";

// Dark header shared by the "عن وسام" pages. It stays dark so the transparent
// navbar above it remains readable.
const AboutHero = ({ crumbs, title, children }) => (
  <section className="brand-gradient relative overflow-hidden pt-36 pb-16 text-white sm:pt-44 sm:pb-20">
    <Sparkle className="end-[8%] top-32 size-9 sm:size-12" delay={0.3} />
    <Sparkle className="end-[18%] top-48 size-4 sm:size-5" delay={1.1} />
    <Sparkle className="end-[5%] bottom-12 size-5 sm:size-7" delay={1.9} />

    <motion.div
      className="container"
      variants={stagger()}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={reveal}>
        <Breadcrumbs items={crumbs} />
      </motion.div>

      <motion.h1
        variants={reveal}
        className="mt-6 max-w-3xl text-4xl font-bold leading-snug sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>

      <motion.p
        variants={reveal}
        className="mt-4 flex items-center gap-3 text-base text-amber-light sm:text-lg"
      >
        <span aria-hidden="true" className="h-px w-10 bg-primary" />
        {SLOGAN}
      </motion.p>

      {children}
    </motion.div>
  </section>
);

export default AboutHero;
