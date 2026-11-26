import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { boardMembers } from "@/data/about";
import AboutHero from "./components/AboutHero";
import MemberAvatar from "./components/MemberAvatar";
import Sparkle from "./components/Sparkle";
import { reveal, stagger } from "./components/motion";

const TITLE = "أعضاء مجلس الإدارة";

const chairmen = boardMembers.filter((member) => member.featured);
const members = boardMembers.filter((member) => !member.featured);

const Chairman = ({ name, role, photo }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={reveal}
      className="group brand-gradient relative flex flex-col items-center overflow-hidden
        rounded-box px-6 py-10 text-center text-white shadow-2xl shadow-secondary/25"
    >
      <Sparkle className="start-8 top-8 size-7" delay={0.4} />
      <Sparkle className="end-10 top-24 size-4" delay={1.5} />

      <div className="relative">
        {/* Slowly rotating orange → teal halo */}
        <motion.span
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          className="absolute -inset-3 rounded-full bg-conic from-primary via-accent to-primary
            opacity-70 blur-lg"
        />
        <span className="relative block rounded-full bg-base-100 p-1">
          <MemberAvatar name={name} photo={photo} className="size-40" />
        </span>
      </div>

      <h2 className="mt-8 text-2xl font-bold leading-snug sm:text-3xl">{name}</h2>
      <p className="mt-3 rounded-full border border-primary/50 bg-primary/15 px-5 py-1.5 text-base text-amber-light">
        {role}
      </p>
    </motion.article>
  );
};

const MemberCard = ({ name, role, photo, delay }) => (
  <motion.li variants={reveal}>
    {/* The hover lift lives on an inner element so it never competes with the
        reveal animation on the list item. */}
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-box border
        border-base-300 bg-base-100 px-4 py-8 text-center transition-shadow duration-300
        hover:shadow-2xl hover:shadow-secondary/15"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5 scale-x-0 bg-primary transition-transform
          duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
      />
      <MemberAvatar name={name} photo={photo} delay={delay} className="size-36" />
      <h3 className="mt-5 text-lg font-bold leading-relaxed text-secondary">{name}</h3>
      <p className="mt-1 text-sm text-accent">{role}</p>
    </motion.article>
  </motion.li>
);

const BoardMembers = () => (
  <MotionConfig reducedMotion="user">
    <AboutHero crumbs={["عن وسام", "مجلس الإدارة", TITLE]} title={TITLE} />

    <section className="bg-base-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          variants={stagger(0.18)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {chairmen.map((chairman) => (
            <Chairman key={chairman.name} {...chairman} />
          ))}
        </motion.div>

        <motion.ul
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 max-md:mx-auto max-md:max-w-sm md:grid-cols-3 lg:mt-12"
        >
          {members.map((member, index) => (
            <MemberCard key={member.name} {...member} delay={index * 0.14} />
          ))}
        </motion.ul>
      </div>
    </section>
  </MotionConfig>
);

export default BoardMembers;
