
import PackagesSlider from "./PackagesSlider";

const Packages = () => {
  return (
    <section className="brand-gradient py-16">
      <div className="container">
        <div className="center mb-14">
          <h2 className="font-bold text-white text-5xl">
            أرقام تميزنا
          </h2>
        </div>
        <p className="center font-semibold text-2xl text-white mb-10">تبدأ من</p>
        <div className="center text-white font-bold text-7xl text-primary relative w-fit m-auto ">
          <p className="text-primary font-bold relative">200</p>
          <sup className="font-semibold text-4xl absolute top-[-20px] end-[-80px]">ر.س</sup>
        </div>
        <div className="mb-10">
          <PackagesSlider />
        </div>
      </div>
    </section>
  );
};

export default Packages;
