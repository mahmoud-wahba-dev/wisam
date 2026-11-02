import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MasterLayout = () => {
  return (
    <div>
      <Navbar />
     <main className="min-h-[70vh]">
       <Outlet />
     </main>
      <Footer />
    </div>
  );
};

export default MasterLayout;
