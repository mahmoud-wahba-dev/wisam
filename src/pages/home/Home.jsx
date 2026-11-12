import HappenNow from "./components/HappenNow";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import Marafeqna from "./components/OurPrograms";
import News from "./components/News";
import Packages from "./components/Packages";
import DownloadApp from "./components/DownloadApp";
import Stats from "./components/Stats";
import Partners from "./components/Partners";

const Home = () => {
  return (
    <>
      <Hero />
      <Marafeqna />
      <HappenNow />
      <OurProducts />
      <Stats />
      <Packages />
      <News />
      <DownloadApp />
      <Partners />
    </>
  );
};

export default Home;
