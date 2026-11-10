import SectionPage from "@/pages/section/SectionPage";
import { products } from "@/data/products";

const Products = () => {
  return (
    <SectionPage
      section="منتجاتنا"
      title="منتجاتنا"
      intro="منتجات وهدايا تعود عوائدها لدعم برامج الجمعية وتمكين الأسر المستفيدة."
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-col overflow-hidden rounded-3xl bg-white text-secondary shadow-lg shadow-black/15"
          >
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-xl font-extrabold leading-snug">
                {product.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                {product.description}
              </p>
              <p className="mt-auto pt-5 text-lg font-bold text-primary">
                {product.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  );
};

export default Products;
