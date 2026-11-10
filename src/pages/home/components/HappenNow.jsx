import { useState } from "react";
import HappenNowSlider from "@/componets/slider/HappenNowSlider";
import DayCarousel from "./DayCarousel";
import DayCard from "./DayCard";
import { Link } from "react-router";

// ─── Period filter data ───────────────────────────────────────────────────────
// DayCard expects a `day` prop shaped like { weekday, day, month }.
// We reuse the same shape here — weekday = top label, day = bold middle, month = bottom.
const PERIOD_FILTERS = [
  { id: "recommended", day: { weekday: "البرامج",        day: "مقترحة لك", month: ""        } },
  { id: "week",        day: { weekday: "هذا الاسبوع",   day: "7 - 1",     month: "نوفمبر"  } },
  { id: "next-week",   day: { weekday: "الاسبوع القادم", day: "14 - 8",    month: "نوفمبر"  } },
  { id: "month",       day: { weekday: "هذا الشهر",     day: "30 - 1",    month: "نوفمبر"  } },
];

const HappenNow = () => {
  const [activePeriod, setActivePeriod] = useState("recommended");

  return (
    <section id="program" className="bg-accent py-16">
      <div className="container">

        {/* ── Title row ── */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-bold text-white text-5xl">يحدث الآن</h2>
          <Link to="/programs" className="btn btn-primary">اكتشف البرامج</Link>
        </div>

        {/* ── Full filter row: period chips + day picker ── */}
        <div className="flex items-center justify-between gap-4 mb-10">

          {/* Left side — day picker with navigation arrows */}
          <DayCarousel />

          {/* Right side — period filter chips (reusing DayCard!) */}
          <div className="flex gap-3">
            {PERIOD_FILTERS.map((filter) => (
              <DayCard
                key={filter.id}
                day={filter.day}
                isActive={activePeriod === filter.id}
                onSelect={() => setActivePeriod(filter.id)}
              />
            ))}
          </div>

        </div>

        {/* ── Event cards slider ── */}
        <HappenNowSlider />

      </div>
    </section>
  );
};

export default HappenNow;
