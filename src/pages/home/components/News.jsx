import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Core Swiper styles load globally in main.jsx — only the free-mode add-on here.
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router";
import SliderControls from "./SliderControls";
import { newsItems } from "@/data/news";

const News = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  return (
    <section className="brand-gradient py-16">
      <div className="container">
        <div data-aos="fade-up" className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            أخبار الجمعية
          </h2>
          <Link
            to="/media-center/news"
            className="btn btn-primary rounded-full border-none px-8"
          >
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
          {newsItems.map((item, index) => (
            <SwiperSlide key={item.id} className="!h-auto flex">
              <Link
                data-aos="fade-up"
                data-aos-delay={index * 100}
                to={`/media-center/news/${item.id}`}
                className="group flex w-full flex-col"
              >
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 line-clamp-1 text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-primary sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/75">
                  {item.excerpt}
                </p>

                <p className="mt-auto pt-6 text-sm font-semibold text-white/80">
                  {item.date}
                </p>
              </Link>
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
