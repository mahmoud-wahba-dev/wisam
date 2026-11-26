import { Link } from "react-router";

// Breadcrumb trail for dark page headers. "الرئيسية" is always the first crumb;
// empty and repeated items are skipped.
const Breadcrumbs = ({ items }) => {
  const crumbs = items.filter(
    (crumb, index, all) => crumb && all.indexOf(crumb) === index
  );

  return (
    <nav aria-label="مسار التصفح" className="text-sm text-white/60">
      <Link to="/" className="transition-colors hover:text-primary">
        الرئيسية
      </Link>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span key={crumb}>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span className={isLast ? "text-white" : undefined}>{crumb}</span>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
