import { useMemo, useState } from "react";
import DayCard from "./DayCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAY = new Intl.DateTimeFormat("ar", {
  weekday: "long",
  calendar: "gregory",
});
const MONTH = new Intl.DateTimeFormat("ar", { month: "long", calendar: "gregory" });

const buildDays = (count = 7) =>
  Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    return {
      key: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      weekday: WEEKDAY.format(date),
      day: date.getDate(),
      month: MONTH.format(date),
    };
  });

const VISIBLE = 3;

// export const DayCard = ({ day, isActive, onSelect }) => (
//   <button
//     type="button"
//     aria-pressed={isActive}
//     onClick={onSelect}
//     className={`flex w-24 shrink-0 flex-col items-center justify-center gap-2 rounded-[1.75rem] border-4 px-2 py-4 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-28 sm:py-3.5 ${
//       isActive
//         ? "scale-105 border-white bg-primary text-primary-content shadow-xl shadow-black/25"
//         : "border-white/25 text-white hover:border-white/60 hover:bg-white/5"
//     }`}
//   >
//     <span className="text-xs font-medium opacity-90 sm:text-sm whitespace-nowrap">{day.weekday}</span>
//     <span className="text-xl font-extrabold leading-4 sm:text-xl opacity-50 py-0.5 whitespace-nowrap ">{day.day}</span>
//     <span className="text-xs opacity-90 sm:text-sm">{day.month}</span>
//   </button>
// );

const NavButton = ({ label, onClick, disabled, children }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    disabled={disabled}
    className="grid size-11 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
  >
    {children}
  </button>
);

const DayCarousel = ({ count = 7 }) => {
  const days = useMemo(() => buildDays(count), [count]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const maxStart = Math.max(0, days.length - VISIBLE);
  const visibleDays = days.slice(startIndex, startIndex + VISIBLE);

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <NavButton
        label="الأيام السابقة"
        onClick={() => setStartIndex((current) => Math.max(0, current - 1))}
        disabled={startIndex === 0}
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </NavButton>

      <div className="flex items-center gap-3 sm:gap-4">
        {visibleDays.map((day) => {
          const index = days.indexOf(day);
          return (
            <DayCard
              key={day.key}
              day={day}
              isActive={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
            />
          );
        })}
      </div>

      <NavButton
        label="الأيام التالية"
        onClick={() => setStartIndex((current) => Math.min(maxStart, current + 1))}
        disabled={startIndex === maxStart}
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </NavButton>
    </div>
  );
};

export default DayCarousel;
