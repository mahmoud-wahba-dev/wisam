import HappenNow from "./components/HappenNow";
import Hero from "./components/Hero";
import IthraaAcademy from "./components/IthraaAcademy";
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
      <IthraaAcademy />
      <Packages />
      <News />
      <DownloadApp />
    </>
  );
};

export default Home;
