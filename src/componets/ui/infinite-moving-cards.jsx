import { cn } from "@/lib/utils";

const DURATIONS = { fast: "20s", normal: "40s", slow: "80s" };

// Port of Aceternity's InfiniteMovingCards: the list is rendered twice and the
// track slides by half its width, so the loop is seamless.
export const InfiniteMovingCards = ({
  items,
  renderItem,
  getKey = (_, index) => index,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const renderCopy = (copy) =>
    items.map((item, index) => (
      <li
        key={`${copy}-${getKey(item, index)}`}
        aria-hidden={copy === "clone" || undefined}
        className="shrink-0"
      >
        {renderItem(item)}
      </li>
    ));

  return (
    <div
      dir="ltr"
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "infinite-scroll flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          pauseOnHover && "pause-on-hover"
        )}
        style={{
          "--scroll-duration": DURATIONS[speed],
          "--scroll-direction": direction === "left" ? "normal" : "reverse",
        }}
      >
        {renderCopy("original")}
        {renderCopy("clone")}
      </ul>
    </div>
  );
};
