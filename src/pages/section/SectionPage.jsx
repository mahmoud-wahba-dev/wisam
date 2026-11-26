import { Link } from "react-router";
import { FileText, Mail } from "lucide-react";
import Breadcrumbs from "@/componets/ui/Breadcrumbs";

/* Fallback body so a page that has no content yet never looks broken. */
const EmptyState = ({ title }) => (
  <div className="mt-10 max-w-2xl rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:p-8">
    <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
      <FileText className="size-6" strokeWidth={1.8} aria-hidden="true" />
    </span>

    <h2 className="mt-5 text-2xl font-extrabold leading-snug">
      محتوى «{title}» قيد الإعداد
    </h2>
    <p className="mt-3 text-sm leading-relaxed text-secondary/75">
      نعمل على استكمال هذا القسم. يمكنك في الوقت الحالي متابعة أخبار الجمعية
      أو التواصل معنا للاستفسار عن أي معلومة تحتاجها.
    </p>

    <div className="mt-6 flex flex-wrap gap-3">
      <Link to="/media-center/news" className="btn btn-primary rounded-full px-6">
        تابع أخبارنا
      </Link>
      <a
        href="mailto:info@wisam.org.sa"
        className="btn btn-outline rounded-full px-6"
      >
        <Mail className="size-4" aria-hidden="true" />
        تواصل معنا
      </a>
    </div>
  </div>
);

/*
 * Shared page shell for every sub-page: brand backdrop, breadcrumb, title and
 * an optional intro. Pages pass their own content as children.
 */
const SectionPage = ({ section, parent, title, intro, children }) => {
  return (
    <section className="brand-gradient min-h-[70vh] pt-36 pb-20 text-white sm:pt-44">
      <div className="container">
        <Breadcrumbs items={[section, parent, title]} />

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>

        {intro && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {intro}
          </p>
        )}

        {children ?? <EmptyState title={title} />}
      </div>
    </section>
  );
};

export default SectionPage;
