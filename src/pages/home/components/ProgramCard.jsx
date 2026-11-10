import { Calendar, Heart, MapPin, Users } from "lucide-react";
import { Link } from "react-router";

const Tag = ({ children, tone = "warm" }) => (
  <span
    className={`rounded-full px-3 py-1 text-xs font-semibold ${
      tone === "cool"
        ? "bg-accent/10 text-accent"
        : "bg-primary/10 text-secondary"
    }`}
  >
    {children}
  </span>
);

const MetaRow = ({ icon: Icon, children }) => (
  <li className="flex items-start gap-2 text-sm leading-relaxed text-secondary/75">
    <Icon
      className="mt-0.5 size-4 shrink-0 text-secondary/50"
      strokeWidth={1.8}
      aria-hidden="true"
    />
    <span>{children}</span>
  </li>
);

const ProgramCard = ({
  id,
  image,
  title,
  tags = [],
  date,
  age,
  location,
  moreTimes,
  cta = "تفاصيل أكثر",
  onFavorite,
}) => {
  const detailPath = `/programs/${id}`;

  return (
    <article className="flex w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-white text-secondary shadow-lg shadow-black/10">
      <Link
        to={detailPath}
        tabIndex={-1}
        aria-hidden="true"
        className="relative aspect-4/3 w-full shrink-0 overflow-hidden"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      {/* Card body: content at the top, link + CTA pinned to the bottom */}
      <div className="flex flex-1 flex-col p-5">
        {tags.length > 0 && (
          <div className="mb-3 flex flex-wrap justify-between gap-2">
            <div className="gap-2 space-x-2">
              {tags.map((tag) => (
                <Tag key={tag.label} tone={tag.tone}>
                  {tag.label}
                </Tag>
              ))}
            </div>
            <button
              type="button"
              aria-label={`إضافة ${title} إلى المفضلة`}
              onClick={onFavorite}
              className=" grid size-9 place-items-center rounded-full bg-white/90 text-primary shadow-sm transition-colors hover:bg-white"
            >
              <Heart className="size-4" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        )}

        <h3 className="mb-4 text-2xl font-extrabold leading-snug">
          <Link to={detailPath} className="transition-colors hover:text-primary">
            {title}
          </Link>
        </h3>

        <ul className="space-y-2">
          <MetaRow icon={Calendar}>{date}</MetaRow>
          {age && <MetaRow icon={Users}>{age}</MetaRow>}
          {location && <MetaRow icon={MapPin}>{location}</MetaRow>}
        </ul>

        {/* Bottom block — separated from the meta list by vertical space */}
        <div className="mt-auto flex flex-col gap-4 pt-8">
          {moreTimes && (
            <Link
              to={`${detailPath}#times`}
              className="text-sm font-semibold text-accent hover:underline"
            >
              بالإضافة إلى {moreTimes} أوقات أخرى
            </Link>
          )}

          <Link
            to={detailPath}
            className="btn btn-primary w-full rounded-full"
          >
            {cta}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProgramCard;
