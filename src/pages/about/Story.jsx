import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { story } from "@/data/about";
import AboutHero from "./components/AboutHero";
import Sparkle from "./components/Sparkle";
import { EASE, reveal, stagger } from "./components/motion";

/* The three values, joined by a line that draws from the start edge. */
const Pillars = () => (
  <motion.ol
    variants={stagger(0.28, 0.5)}
    className="relative mt-12 grid max-w-2xl grid-cols-3 gap-2"
  >
    {/* Runs from the centre of the first dot to the centre of the last. */}
    <motion.li
      aria-hidden="true"
      variants={{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 1.1, ease: EASE } },
      }}
      className="absolute inset-x-[16.66%] top-2 h-px bg-primary/60 ltr:origin-left rtl:origin-right"
    />

    {story.pillars.map((pillar) => (
      <motion.li
        key={pillar}
        variants={reveal}
        className="relative flex flex-col items-center gap-4"
      >
        <span
          aria-hidden="true"
          className="size-4 rounded-full border-4 border-secondary bg-primary ring-1 ring-primary"
        />
        <span
          className="whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3 py-2
            text-sm font-bold backdrop-blur-sm sm:px-6 sm:text-lg"
        >
          {pillar}
        </span>
      </motion.li>
    ))}
  </motion.ol>
);

const Chapter = ({ title, text, year }) => (
  <li className="relative ps-10 sm:ps-16">
    {/* Node sitting on the timeline */}
    <motion.span
      aria-hidden="true"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -30% 0px" }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="absolute start-0 top-8 grid size-6 place-items-center rounded-full bg-primary/20"
    >
      <span className="size-2.5 rounded-full bg-primary" />
    </motion.span>

    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      className="relative overflow-hidden rounded-box border border-base-300 bg-base-100 p-6
        shadow-xl shadow-secondary/5 sm:p-10"
    >
      {year && (
        <span
          aria-hidden="true"
          className="mb-4 block text-6xl font-bold leading-tight text-primary sm:text-8xl"
        >
          {year}
        </span>
      )}
      <h2 className="text-2xl font-bold leading-snug text-secondary sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-loose text-secondary/80">{text}</p>
    </motion.article>
  </li>
);

/* Story chapters along a line that fills as the page scrolls. */
const Timeline = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="bg-base-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 text-center text-2xl font-bold leading-relaxed text-secondary sm:text-4xl sm:leading-relaxed"
        >
          {story.lead}
        </motion.p>

        <div ref={ref} className="relative mt-8">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 start-[11px] w-0.5 bg-base-300"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : progress }}
            className="absolute inset-y-0 start-[11px] w-0.5 origin-top bg-primary"
          />

          <ol className="space-y-10 sm:space-y-16">
            {story.chapters.map((chapter, index) => (
              <Chapter
                key={chapter.title}
                {...chapter}
                year={index === 0 ? story.year : undefined}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* Closing quote, revealed one whole word at a time so letters stay joined. */
const Quote = () => (
  <section className="brand-gradient relative overflow-hidden text-white">
    <Sparkle className="start-[8%] top-10 size-8 sm:size-11" />
    <Sparkle className="end-[10%] bottom-12 size-6 sm:size-8" delay={1.4} />

    <figure className="container max-w-4xl py-10 text-center sm:py-16">
      <motion.figcaption
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-base leading-loose text-white/75 sm:text-lg"
      >
        {story.quote.intro}
      </motion.figcaption>

      <motion.blockquote
        variants={stagger(0.16, 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="mt-8 text-3xl font-bold leading-relaxed text-amber-light sm:text-5xl sm:leading-relaxed"
      >
        <span aria-hidden="true">«</span>
        {story.quote.text.split(" ").map((word, index) => (
          <span key={`${word}-${index}`}>
            {index > 0 && " "}
            <motion.span variants={reveal} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
        <span aria-hidden="true">»</span>
      </motion.blockquote>
    </figure>
  </section>
);

const Story = () => (
  <MotionConfig reducedMotion="user">
    <AboutHero crumbs={["عن وسام", story.title]} title={story.title}>
      <Pillars />
    </AboutHero>
    <Timeline />
    <Quote />
  </MotionConfig>
);

export default Story;
