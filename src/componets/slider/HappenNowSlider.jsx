import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles for this slider only (core styles load globally in main.jsx)
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';
import ProgramCard from '@/pages/home/components/ProgramCard';
import SliderControls from '@/pages/home/components/SliderControls';

const HappenNowSlider = ({ items }) => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-lg text-white/80">
        لا توجد برامج في هذه الفترة حالياً.
      </p>
    );
  }

  return (
    <div>
      <Swiper
        dir="rtl"
        slidesPerView={1.1}
        spaceBetween={20}
        freeMode={true}
        onSwiper={(instance) => {
          swiperRef.current = instance;
        }}
        onProgress={(_, value) => setProgress(value)}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 3, spaceBetween: 24 },
          1536: { slidesPerView: 4, spaceBetween: 24 },
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {/* !h-auto + flex makes every slide stretch to the tallest card, so
            cards with fewer meta rows still line up at the bottom. */}
        {items.map((program, index) => (
          <SwiperSlide key={program.id} className="!h-auto flex">
            <div
              className="flex w-full animate-[package-fade-up_450ms_ease-out_both] motion-reduce:animate-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProgramCard {...program} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderControls
        swiperRef={swiperRef}
        progress={progress}
        prevLabel="البرامج السابقة"
        nextLabel="البرامج التالية"
        className="mt-10"
      />
    </div>
  );
};

export default HappenNowSlider;
