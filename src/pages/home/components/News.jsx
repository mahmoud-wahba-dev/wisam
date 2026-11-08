import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Core Swiper styles load globally in main.jsx — only the free-mode add-on here.
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router";
import SliderControls from "./SliderControls";

const newsItems = [
  {
    id: "aseel-alyaqoub",
    title: "إثراء يعلن فوز...",
    excerpt:
      "أعلن مركز الملك عبد العزيز الثقافي العالمي (إثراء) – مبادرة أرامكو السعودية – عن فوز الفنانة أسيل اليقوب بجائزة إثراء للفنون...",
    date: "04 أكتوبر 2026",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "impact-line",
    title: "يتجاوز الأثر خط...",
    excerpt:
      "يقاس أثر التجارب التعليمية بما تتركه في مسيرة المتعلم بعد انتهائها، حين تتحول المهارات إلى ثقة والاهتمامات إلى مسارات وإنجازات...",
    date: "29 سبتمبر 2026",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "saudi-national-day",
    title: "إثراء يحتفى باليوم...",
    excerpt:
      "يكتفي مركز الملك عبد العزيز الثقافي العالمي (إثراء) باليوم الوطني السعودي بمبادرة أرامكو السعودية من خلال برنامج متنوع يمتد لخمسة...",
    date: "22 سبتمبر 2026",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "design-talent",
    title: "إثراء يفتح باب...",
    excerpt:
      "مشاركة من أنحاء العالم سيتحول بموجبها برنامج إثراء الإبداعي لفتح باب التسجيل في مكانون تصميمي ضمن مسعى إثراء للتصميم...",
    date: "10 سبتمبر 2026",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "library-season",
    title: "المكتبة تطلق موسمها...",
    excerpt:
      "برنامج ثقافي متكامل يجمع الندوات وورش العمل وجلسات القراءة في مساحة مفتوحة لكل الأعمار على مدار الأسبوع...",
    date: "02 سبتمبر 2026",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "children-museum",
    title: "متحف الطفل يستقبل...",
    excerpt:
      "تجارب تفاعلية جديدة تمنح الأطفال فرصة الاستكشاف واللعب والتعلم عبر مسارات مصممة لاكتشاف العالم من حولهم...",
    date: "26 أغسطس 2026",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=70",
  },
];

const News = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  return (
    <section className="brand-gradient py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">الأخبار</h2>
          <Link to="/" className="btn btn-primary rounded-full border-none px-8">
            تصفح الجميع
          </Link>
        </div>

        <Swiper
          dir="rtl"
          slidesPerView={1.15}
          spaceBetween={20}
          freeMode
          modules={[FreeMode]}
          onSwiper={(instance) => {
            swiperRef.current = instance;
          }}
          onProgress={(_, value) => setProgress(value)}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
          }}
          className="mySwiper"
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto flex">
              <article className="flex w-full flex-col">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 line-clamp-1  text-xl font-extrabold leading-snug text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-3  text-sm leading-relaxed text-white/75">
                  {item.excerpt}
                </p>

                <p className="mt-auto pt-6  text-sm font-semibold text-white/80">
                  {item.date}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderControls
          swiperRef={swiperRef}
          progress={progress}
          prevLabel="الأخبار السابقة"
          nextLabel="الأخبار التالية"
          className="mt-10"
        />
      </div>
    </section>
  );
};

export default News;
