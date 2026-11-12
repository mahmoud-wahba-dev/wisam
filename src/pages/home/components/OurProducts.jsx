import { Link } from "react-router";
import { products } from "@/data/products";
import { CardBody, CardContainer, CardItem } from "@/componets/ui/3d-card";
import { ProductPrice } from "@/componets/ui/ProductPrice";

const OurProducts = () => {
  const featured = products[0];

  return (
    <section className="bg-accent py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <h2 data-aos="fade-right" className="text-5xl font-bold text-white">منتجاتنا</h2>
          <Link data-aos="fade-left" to="/products" className="btn btn-primary">
            اكتشف منتجاتنا
          </Link>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="150" className="max-w-sm">
          <CardContainer>
            <CardBody as="article" className="flex w-full flex-col rounded-3xl bg-white text-secondary shadow-lg shadow-black/10">
              <CardItem translateZ={40} className="w-full">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="aspect-4/3 w-full rounded-t-3xl object-cover"
                />
              </CardItem>
              <CardItem translateZ={25} className="flex flex-1 flex-col p-5">
                <h3 className="text-2xl font-extrabold leading-snug">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                  {featured.description}
                </p>
                <ProductPrice product={featured} className="mt-4" />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
