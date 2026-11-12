import { Building2 } from "lucide-react";
import { InfiniteMovingCards } from "@/componets/ui/infinite-moving-cards";
import { partners } from "@/data/partners";

const PartnerCard = ({ name, logo }) => (
  <div
    dir="rtl"
    className="grid h-24 w-48 place-items-center rounded-2xl bg-white px-6 shadow-lg shadow-black/15 sm:h-28 sm:w-56"
  >
    {logo ? (
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
      />
    ) : (
      <span className="flex items-center gap-2 text-center font-bold text-secondary">
        <Building2 className="size-6 shrink-0 text-primary" strokeWidth={1.6} aria-hidden="true" />
        {name}
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
        <InfiniteMovingCards
          items={partners}
          getKey={(partner) => partner.id}
          renderItem={(partner) => <PartnerCard {...partner} />}
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Partners;
