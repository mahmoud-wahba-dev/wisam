import { SaudiRiyal } from "lucide-react";
import PackagesSlider from "./PackagesSlider";

const Packages = () => {
  return (
    <section className="brand-gradient py-16">
      <div className="container">
        <div data-aos="fade-up" className="center mb-14">
          <h2 className="font-bold text-white text-5xl">
            باقات العضوية
          </h2>
        </div>
        <p data-aos="fade-up" data-aos-delay="100" className="center font-semibold text-2xl text-white mb-10">تبدأ من</p>
        <div data-aos="zoom-in" data-aos-delay="150" className="center text-white font-bold text-7xl text-primary relative w-fit m-auto ">
          <p className="text-primary font-bold relative">200</p>
          <SaudiRiyal
            aria-label="ريال سعودي"
            strokeWidth={2.5}
            className="absolute -top-2 -end-14 size-12 text-white"
          />
        </div>
        <div className="mb-10">
          <PackagesSlider />
        </div>
      </div>
    </section>
  );
};

export default Packages;
