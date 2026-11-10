import HappenNow from "./components/HappenNow";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import Marafeqna from "./components/OurPrograms";
import News from "./components/News";
import Packages from "./components/Packages";
import DownloadApp from "./components/DownloadApp";

const Home = () => {
  return (
    <>
      <Hero />
      <Marafeqna />
      <HappenNow />
      <OurProducts />
      <Packages />
      <News />
      <DownloadApp />
    </>
  );
};

export default Home;
