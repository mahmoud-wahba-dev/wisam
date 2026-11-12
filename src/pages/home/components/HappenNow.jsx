import { useState } from "react";
import { Link } from "react-router";
import HappenNowSlider from "@/componets/slider/HappenNowSlider";
import { programs } from "@/data/programs";

const QUARTERS = [
  { id: 1, label: "الربع الأول" },
  { id: 2, label: "الربع الثاني" },
  { id: 3, label: "الربع الثالث" },
];

const HappenNow = () => {
  const [activeQuarter, setActiveQuarter] = useState(QUARTERS[0].id);
  const items = programs.filter((program) => program.quarter === activeQuarter);

  return (
    <section id="program" className="bg-accent py-16">
      <div className="container">
        <div data-aos="fade-up" className="mb-10 flex items-center justify-between">
          <h2 className="text-5xl font-bold text-white">يحدث الآن</h2>
          <Link to="/programs" className="btn btn-primary">اكتشف البرامج</Link>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mb-10">
          <div
            role="tablist"
            aria-label="فترات البرامج"
            className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-white/10 p-1.5 ring-1 ring-white/15 backdrop-blur-md"
          >
            {QUARTERS.map(({ id, label }) => {
              const isActive = id === activeQuarter;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`quarter-tab-${id}`}
                  aria-selected={isActive}
                  aria-controls="quarter-panel"
                  onClick={() => setActiveQuarter(id)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-7 sm:text-base ${
                    isActive
                      ? "bg-primary text-primary-content shadow-lg shadow-black/20"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" id="quarter-panel" role="tabpanel" aria-labelledby={`quarter-tab-${activeQuarter}`}>
          <HappenNowSlider key={activeQuarter} items={items} />
        </div>
      </div>
    </section>
  );
};

export default HappenNow;
