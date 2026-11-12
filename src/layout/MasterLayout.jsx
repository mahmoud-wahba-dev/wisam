import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import AOS from "aos";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MasterLayout = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 950,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
