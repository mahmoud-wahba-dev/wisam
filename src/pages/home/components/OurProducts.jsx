import { Link } from "react-router";
import { products } from "@/data/products";

const OurProducts = () => {
  const featured = products[0];

  return (
    <section className="bg-accent py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-5xl font-bold text-white">منتجاتنا</h2>
          <Link to="/products" className="btn btn-primary">
            اكتشف منتجاتنا
          </Link>
        </div>

        <article className="flex max-w-sm flex-col overflow-hidden rounded-3xl bg-white text-secondary shadow-lg shadow-black/10">
          <img
            src={featured.image}
            alt={featured.title}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-2xl font-extrabold leading-snug">
              {featured.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary/75">
              {featured.description}
            </p>
            <p className="mt-4 text-lg font-bold text-primary">
              {featured.price}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurProducts;
