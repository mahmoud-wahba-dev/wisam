import { Link, Navigate, useParams } from "react-router";
import SectionPage from "@/pages/section/SectionPage";
import { newsItems } from "@/data/news";

const NewsDetail = () => {
  const { id } = useParams();
  const item = newsItems.find((article) => article.id === id);

  if (!item) return <Navigate to="/media-center/news" replace />;

  return (
    <SectionPage section="المركز الإعلامي" title={item.title}>
      <article className="mt-10 overflow-hidden rounded-4xl bg-white text-secondary shadow-2xl shadow-black/25">
        <img
          src={item.image}
          alt={item.title}
          className="h-64 w-full object-cover sm:h-96"
        />

        <div className="p-6 sm:p-10">
          <p className="text-sm font-semibold text-accent">{item.date}</p>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-secondary/80">
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link
            to="/media-center/news"
            className="btn btn-primary mt-8 rounded-full px-6"
          >
            العودة إلى الأخبار
          </Link>
        </div>
      </article>
    </SectionPage>
  );
};

export default NewsDetail;
