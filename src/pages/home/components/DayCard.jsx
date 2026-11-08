const DayCard = ({ day, isActive, onSelect }) => (
  <button
    type="button"
    aria-pressed={isActive}
    onClick={onSelect}
    className={`flex w-24 shrink-0 flex-col items-center justify-center gap-2 rounded-[1.75rem] border-4 px-2 py-4 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-28 sm:py-3.5 ${
      isActive
        ? "scale-105 border-white bg-primary text-primary-content shadow-xl shadow-black/25"
        : "border-white/25 text-white hover:border-white/60 hover:bg-white/5"
    }`}
  >
    <span className="whitespace-nowrap text-xs font-medium opacity-90 sm:text-sm">
      {day.weekday}
    </span>
    <span className="whitespace-nowrap py-0.5 text-xl font-extrabold leading-4 opacity-50 sm:text-xl">
      {day.day}
    </span>
    <span className="text-xs opacity-90 sm:text-sm">{day.month}</span>
  </button>
);

export default DayCard;
