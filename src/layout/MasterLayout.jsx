import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MasterLayout = () => {
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
