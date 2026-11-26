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
import VisitUs from "@/pages/contact/VisitUs";
import ShareFeedback from "@/pages/contact/ShareFeedback";
import ContactUs from "@/pages/contact/ContactUs";
import RateExperience from "@/pages/contact/RateExperience";
import Volunteer from "@/pages/join/Volunteer";
import Careers from "@/pages/join/Careers";
import NotFound from "@/pages/not-found/NotFound";
import Story from "@/pages/about/Story";
import AssemblyMembers from "@/pages/about/AssemblyMembers";
import BoardMembers from "@/pages/about/BoardMembers";
import { navSections } from "@/data/siteNav";

// Megamenu entries that have a richer page than the shared placeholder.
const specialPages = {
  story: Story,
  "assembly-members": AssemblyMembers,
  "board-members": BoardMembers,
  news: NewsPage,
  visit: VisitUs,
  feedback: ShareFeedback,
  "contact-us": ContactUs,
  "rate-experience": RateExperience,
  volunteer: Volunteer,
  careers: Careers,
};

const pageElement = (page, fallback) => {
  const Special = page ? specialPages[page] : null;
  return Special ? <Special /> : <SectionPage {...fallback} />;
};

// One index redirect + one page per megamenu entry, plus one more per nested
// (hover sub-column) entry, so every link in the navbar — top-level or
// nested — always resolves to a real, recognizable page. An entry with
// children has no page of its own and redirects to its first child.
const navRoutes = navSections.flatMap(({ label: section, basePath, pages }) => [
  {
    path: basePath,
    element: <Navigate to={`${basePath}/${pages[0].slug}`} replace />,
  },
  ...pages.flatMap(({ label, slug, page, children }) => {
    const path = `${basePath}/${slug}`;

    const route = {
      path,
      element: children ? (
        <Navigate to={`${path}/${children[0].slug}`} replace />
      ) : (
        pageElement(page, { section, title: label })
      ),
    };

    const childRoutes = (children ?? []).map((child) => ({
      path: `${path}/${child.slug}`,
      element: pageElement(child.page, {
        section,
        parent: label,
        title: child.label,
      }),
    }));

    return [route, ...childRoutes];
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
