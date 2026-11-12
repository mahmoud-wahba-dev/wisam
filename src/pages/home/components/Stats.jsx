import { createRef, useMemo, useRef } from "react";
import { AnimatedBeam } from "@/componets/ui/animated-beam";
import { NumberTicker } from "@/componets/ui/number-ticker";
import { CardBody, CardContainer, CardItem } from "@/componets/ui/3d-card";
import { stats } from "@/data/stats";

const Stats = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const dotRefs = useMemo(() => stats.map(() => createRef()), []);

  return (
    <section className="brand-gradient overflow-hidden py-20 text-white">
      <div ref={containerRef} className="container relative">
        {stats.map(({ key }, index) => (
          <AnimatedBeam
            key={key}
            className="hidden md:block"
            containerRef={containerRef}
            fromRef={titleRef}
            toRef={dotRefs[index]}
            delay={index * 0.2}
          />
        ))}

        <h2 data-aos="fade-up" className="text-center text-4xl font-bold sm:text-5xl">
          <span className="text-primary">أرقام</span> تميزنا
        </h2>
        <span ref={titleRef} aria-hidden="true" className="mx-auto mt-4 block size-1" />

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-28 md:grid-cols-5 lg:gap-8">
          {stats.map(({ key, value, label, icon: Icon }, index) => (
            <li
              key={key}
              className={`relative ${index === stats.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
            >
              {/* Beam target sits outside the AOS wrapper so its position is never transformed. */}
              <span
                ref={dotRefs[index]}
                aria-hidden="true"
                className="absolute top-0 left-1/2 z-10 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px] shadow-primary"
              />

              <div data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                <CardContainer containerClassName="h-full" className="h-full">
                  <CardBody className="flex w-full flex-col items-center rounded-3xl border border-b-0 border-primary/40 bg-gradient-to-b from-white/[0.07] to-transparent px-4 pt-9 pb-10 text-center">
                    <CardItem translateZ={40}>
                      <Icon className="size-9 text-white" strokeWidth={1.5} aria-hidden="true" />
                    </CardItem>
                    <CardItem
                      translateZ={60}
                      dir="ltr"
                      className="mt-4 text-4xl font-extrabold text-primary lg:text-5xl"
                    >
                      <span className="align-top text-2xl lg:text-3xl">+</span>
                      <NumberTicker value={value} delay={index * 0.1} />
                    </CardItem>
                    <CardItem translateZ={30} className="mt-3 text-lg text-white/90 lg:text-xl">
                      {label}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
