import { Link } from "react-router";
import SectionPage from "@/pages/section/SectionPage";

const NotFound = () => {
  return (
    <SectionPage section="خطأ" title="الصفحة غير موجودة">
      <div className="mt-8 max-w-xl rounded-4xl bg-white p-6 text-secondary shadow-2xl shadow-black/20 sm:p-8">
        <p className="text-5xl font-extrabold text-primary">404</p>
        <p className="mt-4 text-base leading-relaxed text-secondary/75">
          يبدو أن الرابط الذي فتحته غير صحيح أو أن الصفحة قد نُقلت. يمكنك العودة
          إلى الصفحة الرئيسية أو استكشاف برامجنا.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-primary rounded-full px-6">
            الصفحة الرئيسية
          </Link>
          <Link
            to="/programs"
            className="btn btn-outline rounded-full px-6"
          >
            استكشف البرامج
          </Link>
        </div>
      </div>
    </SectionPage>
  );
};

export default NotFound;
