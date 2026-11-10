import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MasterLayout from "./layout/MasterLayout";
import Home from "@/pages/home/Home";
import SectionPage from "@/pages/section/SectionPage";
import Programs from "@/pages/programs/Programs";
import ProgramDetail from "@/pages/programs/ProgramDetail";
import Products from "@/pages/products/Products";
import Memberships from "@/pages/memberships/Memberships";
import Join from "@/pages/join/Join";
import NewsPage from "@/pages/media/NewsPage";
import NewsDetail from "@/pages/media/NewsDetail";
import NotFound from "@/pages/not-found/NotFound";
import { navSections } from "@/data/siteNav";

// Megamenu entries that have a richer page than the shared placeholder.
const specialPages = {
  news: NewsPage,
};

// One index redirect + one page per megamenu entry.
const navRoutes = navSections.flatMap(({ label: section, basePath, pages }) => [
  {
    path: basePath,
    element: <Navigate to={`${basePath}/${pages[0].slug}`} replace />,
  },
  ...pages.map(({ label, slug, page }) => {
    const Special = page ? specialPages[page] : null;

    return {
      path: `${basePath}/${slug}`,
      element: Special ? (
        <Special />
      ) : (
        <SectionPage section={section} title={label} />
      ),
    };
  }),
]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      // Pathless route: keeps the navbar/footer around both page content and
      // errors thrown while rendering a page.
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/programs",
            element: <Programs />,
          },
          {
            path: "/programs/:id",
            element: <ProgramDetail />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/memberships",
            element: <Memberships />,
          },
          {
            path: "/join",
            element: <Join />,
          },
          {
            path: "/media-center/news/:id",
            element: <NewsDetail />,
          },
          {
            path: "/privacy",
            element: <SectionPage section="قانوني" title="سياسة الخصوصية" />,
          },
          {
            path: "/terms",
            element: <SectionPage section="قانوني" title="الشروط والأحكام" />,
          },
          ...navRoutes,
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
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
