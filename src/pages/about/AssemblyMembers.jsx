import { motion, MotionConfig } from "motion/react";
import { NumberTicker } from "@/componets/ui/number-ticker";
import { assemblyArticles, assemblyMembers } from "@/data/about";
import AboutHero from "./components/AboutHero";
import { EASE, reveal, stagger } from "./components/motion";

const TITLE = "أعضاء الجمعية العمومية";

// Feeds the pointer position to the card's glow through CSS variables, so
// moving the mouse never re-renders React.
const trackPointer = (event) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
  card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
};

const MemberCard = ({ name, number }) => (
  <motion.li variants={reveal}>
    <div
      onPointerMove={trackPointer}
      className="group relative flex h-full items-center gap-4 overflow-hidden rounded-box border
        border-base-300 bg-base-100 p-5 transition-shadow duration-300
        hover:shadow-xl hover:shadow-secondary/10 sm:p-6"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--glow-x, 50%) var(--glow-y, 50%), color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%)",
        }}
      />
      {/* Accent bar on the start edge */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 start-0 w-1.5 scale-y-0 bg-primary transition-transform
          duration-300 ease-out group-hover:scale-y-100 motion-reduce:transition-none"
      />

      <span
        aria-hidden="true"
        className="relative grid size-14 shrink-0 place-items-center rounded-full bg-secondary
          text-2xl font-bold text-secondary-content"
      >
        {name.charAt(0)}
      </span>
      <span className="relative flex-1 text-base font-bold leading-relaxed text-secondary sm:text-lg">
        {name}
      </span>
      <span
        aria-hidden="true"
        className="relative self-start text-3xl font-bold tabular-nums text-accent/25
          transition-colors duration-300 group-hover:text-accent/60"
      >
        {String(number).padStart(2, "0")}
      </span>
    </div>
  </motion.li>
);

/* Bylaw articles on a navy panel, so they read apart from the member list. */
const Articles = () => (
  <motion.div
    variants={stagger(0.18)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="brand-gradient mt-10 grid gap-8 rounded-box p-6 text-white shadow-2xl
      shadow-secondary/25 sm:mt-14 sm:p-10 md:grid-cols-2 md:gap-12"
  >
    {assemblyArticles.map(({ title, text }) => (
      <motion.article key={title} variants={reveal}>
        <h2 className="text-2xl font-bold text-amber-light">{title}</h2>
        <motion.span
          aria-hidden="true"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
          }}
          className="mt-3 block h-0.5 w-16 rounded-full bg-primary ltr:origin-left rtl:origin-right"
        />
        <p className="mt-4 text-base leading-loose text-white/85 sm:text-lg sm:leading-loose">
          {text}
        </p>
      </motion.article>
    ))}
  </motion.div>
);

const AssemblyMembers = () => (
  <MotionConfig reducedMotion="user">
    <AboutHero
      crumbs={["عن وسام", "الجمعية العمومية", TITLE]}
      title={TITLE}
    />

    <section className="bg-base-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="flex items-baseline gap-3 text-secondary">
          <NumberTicker
            value={assemblyMembers.length}
            className="text-6xl font-bold text-accent"
          />
          <span className="text-lg font-bold">عدد الأعضاء</span>
        </p>

        <motion.ol
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          {assemblyMembers.map((name, index) => (
            <MemberCard key={name} name={name} number={index + 1} />
          ))}
        </motion.ol>

        <Articles />
      </div>
    </section>
  </MotionConfig>
);

export default AssemblyMembers;
