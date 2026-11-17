import { InfiniteMovingCards } from "@/componets/ui/infinite-moving-cards";
import { partners } from "@/data/partners";

// Cycling badge colors from the brand palette, so placeholder marks still
// look varied and intentional before real logos are dropped in.
const BADGE_COLORS = ["bg-secondary", "bg-primary", "bg-accent"];

// A single representative Arabic letter for the placeholder mark — strips a
// leading "ال" so e.g. "الراجحي" reads as "ر" rather than "ا".
const getInitial = (name) => {
  const firstWord = name.trim().split(" ")[0];
  const stripped =
    firstWord.startsWith("ال") && firstWord.length > 3 ? firstWord.slice(2) : firstWord;
  return stripped.charAt(0);
};

const PartnerCard = ({ id, name, logo }) => (
  <div className="flex h-24 w-40 items-center justify-center px-3 sm:h-28 sm:w-48">
    {logo ? (
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-14 w-auto max-w-full object-contain brightness-0 invert opacity-75 transition duration-300 hover:opacity-100 sm:max-h-16"
      />
    ) : (
      <span
        title={name}
        aria-label={name}
        className={`grid size-16 place-items-center rounded-full text-2xl font-extrabold text-white
          shadow-md shadow-black/10 transition-transform duration-300 hover:scale-105 sm:size-20 sm:text-3xl
          ${BADGE_COLORS[(parseInt(id.match(/\d+$/)?.[0] ?? "0", 10)) % BADGE_COLORS.length]}`}
      >
        {getInitial(name)}
      </span>
    )}
  </div>
);

const Partners = () => {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="container">
        <h2 data-aos="fade-up" className="mb-10 text-center text-4xl font-bold text-white sm:text-5xl">
          شركاء <span className="text-primary">النجاح</span>
        </h2>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        {/* ~30s per loop: between "normal" (40s) and "fast" (20s), so it feels
            noticeably quicker while the logos stay legible. */}
        <InfiniteMovingCards
          items={partners}
          getKey={(partner) => partner.id}
          renderItem={(partner) => <PartnerCard {...partner} />}
          speed="30s"
        />
      </div>
    </section>
  );
};

export default Partners;
