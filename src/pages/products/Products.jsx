import SectionPage from "@/pages/section/SectionPage";
import { products } from "@/data/products";
import { CardBody, CardContainer, CardItem } from "@/componets/ui/3d-card";
import { ProductPrice } from "@/componets/ui/ProductPrice";

const Products = () => {
  return (
    <SectionPage
      section="منتجاتنا"
      title="منتجاتنا"
      intro="منتجات وهدايا تعود عوائدها لدعم برامج الجمعية وتمكين الأسر المستفيدة."
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <CardContainer key={product.id} className="h-full">
            <CardBody
              as="article"
              className="flex w-full flex-col rounded-3xl bg-white text-secondary shadow-lg shadow-black/15"
            >
              <CardItem translateZ={40} className="w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="aspect-4/3 w-full rounded-t-3xl object-cover"
                />
              </CardItem>
              <CardItem translateZ={25} className="flex flex-1 flex-col p-5">
                <h2 className="text-xl font-extrabold leading-snug">
                  {product.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                  {product.description}
                </p>
                <ProductPrice product={product} className="mt-auto pt-5" />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </SectionPage>
  );
};

export default Products;
