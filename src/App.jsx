import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MasterLayout from "./layout/MasterLayout";
import Home from "@/pages/home/Home";
import VisitIthra from "@/pages/visit-ithra/VisitIthra";
import Memberships from "@/pages/memberships/Memberships";
import JoinIthra from "@/pages/join-ithra/JoinIthra";
import PressRoom from "@/pages/press-room/PressRoom";
import AboutIthra from "@/pages/about-ithra/AboutIthra";
import ToursIthra from "@/pages/tours-ithra/ToursIthra";
import NotFound from "@/pages/not-found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/visit-ithra",
        element: <VisitIthra />,
      },
      {
        path: "/memberships",
        element: <Memberships />,
      },
      {
        path: "/join-ithra",
        element: <JoinIthra />,
      },
      {
        path: "/press-room",
        element: <PressRoom />,
      },
      {
        path: "/about-ithra",
        element: <AboutIthra />,
      },
      {
        path: "/tours-ithra",
        element: <ToursIthra />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
