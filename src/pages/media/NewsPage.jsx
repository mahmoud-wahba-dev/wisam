import { Link } from "react-router";
import SectionPage from "@/pages/section/SectionPage";
import { newsItems } from "@/data/news";

const NewsPage = () => {
  return (
    <SectionPage
      section="المركز الإعلامي"
      title="أخبار وسام"
      intro="آخر أخبار الجمعية وبرامجها ومبادراتها."
    >
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Link
            key={item.id}
            to={`/media-center/news/${item.id}`}
            className="group flex flex-col"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h2 className="mt-5 line-clamp-1 text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-primary">
              {item.title}
            </h2>

            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
              {item.excerpt}
            </p>

            <p className="mt-auto pt-5 text-sm font-semibold text-white/80">
              {item.date}
            </p>
          </Link>
        ))}
      </div>
    </SectionPage>
  );
};

export default NewsPage;
