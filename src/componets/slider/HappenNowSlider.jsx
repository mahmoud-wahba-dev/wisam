import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles for this slider only (core styles load globally in main.jsx)
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';
import ProgramCard from '@/pages/home/components/ProgramCard';
import SliderControls from '@/pages/home/components/SliderControls';

const programs = [
  {
    id: 'child-saturday',
    title: 'سبت الطفل',
    image:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=70',
    tags: [{ label: 'أطفال' }],
    date: '14 نوفمبر 2026',
    age: '+3 سنوات مع العائلات',
    location: 'متحف الطفل',
    moreTimes: 7,
  },
  {
    id: 'wind-energy',
    title: 'طاقة الرياح',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=70',
    tags: [{ label: 'نشاط', tone: 'cool' }],
    date: '14 نوفمبر 2026',
    age: '+7 سنوات مع العائلات',
    location: 'معرض الطاقة',
    moreTimes: 8,
  },
  {
    id: 'library-workshop',
    title: 'ورشة عمل في المكتبة',
    image:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=70',
    tags: [{ label: 'نشاط', tone: 'cool' }, { label: 'المكتبة' }],
    date: '14 نوفمبر 2026',
    age: 'العائلات',
    location: 'المكتبة - الطابق 2',
    moreTimes: 14,
  },
  {
    id: 'cat-in-a-box',
    title: 'قطة في صندوق',
    image:
      'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=70',
    tags: [{ label: 'نشاط', tone: 'cool' }, { label: 'أطفال' }],
    date: '14 نوفمبر 2026',
    age: '6-2 سنوات مع العائلات',
    location: 'المكتبة - الطابق 2',
    moreTimes: 4,
  },
  {
    id: 'craft-session',
    title: 'ورشة الحرف اليدوية',
    image:
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=70',
    tags: [{ label: 'أطفال' }],
    date: '15 نوفمبر 2026',
    age: '+6 سنوات مع العائلات',
    location: 'متحف الطفل',
    moreTimes: 5,
  },
  {
    id: 'idea-lab',
    title: 'مختبر الأفكار',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=70',
    tags: [{ label: 'نشاط', tone: 'cool' }],
    date: '15 نوفمبر 2026',
    age: '+9 سنوات',
    location: 'مختبر الأفكار',
    moreTimes: 6,
  },
];

const HappenNowSlider = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

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
        {programs.map((program) => (
          <SwiperSlide key={program.id} className="!h-auto flex">
            <ProgramCard {...program} />
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
