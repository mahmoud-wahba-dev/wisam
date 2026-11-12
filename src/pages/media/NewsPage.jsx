import { Link } from "react-router";
import SectionPage from "@/pages/section/SectionPage";
import { newsItems } from "@/data/news";
import { CardBody, CardContainer, CardItem } from "@/componets/ui/3d-card";

const NewsPage = () => {
  return (
    <SectionPage
      section="المركز الإعلامي"
      title="أخبار وسام"
      intro="آخر أخبار الجمعية وبرامجها ومبادراتها."
    >
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <CardContainer key={item.id} className="h-full">
            <CardBody
              as={Link}
              to={`/media-center/news/${item.id}`}
              className="group flex w-full flex-col"
            >
              <CardItem translateZ={40} className="w-full overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </CardItem>

              <CardItem as="h2" translateZ={30} className="mt-5 line-clamp-1 text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-primary">
                {item.title}
              </CardItem>

              <CardItem as="p" translateZ={20} className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
                {item.excerpt}
              </CardItem>

              <p className="mt-auto pt-5 text-sm font-semibold text-white/80">
                {item.date}
              </p>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </SectionPage>
  );
};

export default NewsPage;
