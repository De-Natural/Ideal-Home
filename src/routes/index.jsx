import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllServiceApartment from "../pages/AllServiceApartment";
import NotFound from "../pages/NotFound";
import ErrorBoundary from "../pages/ErrorBoundary";
import ViewApartment from "../pages/ViewApartment";
import Contact from "../pages/ContactUs";
import Navbar from "../component/Navbar";
import Footer from "../UI/Footer";
import LeisureApartment from "../pages/LeisureApartment";
import BusinessApartment from "../pages/BusinessApartment";
import CooperateApartment from "../pages/CooperateApartment";
import ContractorApartment from "../pages/ContractorApartment";
import PropertyManagementApartment from "../pages/PropertyManagementApartment";
import TestimonalPage from "../pages/TestimonalPage";
import AboutUsPage from "../pages/AboutUsPage";
import FAQ from "../pages/FAQ";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "all-apartments", element: <AllServiceApartment /> },
      { path: "view-apartment/:id?", element: <ViewApartment /> },
      { path: "leisure-apartment", element: <LeisureApartment /> },
      { path: "business-apartment", element: <BusinessApartment /> },
      { path: "cooperate-apartment", element: <CooperateApartment /> },
      { path: "contractor-apartment", element: <ContractorApartment /> },
      { path: "property-management-apartment", element: <PropertyManagementApartment /> },
      { path: "about-us", element: <AboutUsPage /> },
      { path: "faq", element: <FAQ /> },
    ],
  },
  // Standalone contact route (not a child of the main layout)
  {
    path: "/contact-us",
    element: (
      <>
        <Navbar />
        <main>
          <Contact />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/testimonial",
    element: (
      <>
        <Navbar />
        <main>
          <TestimonalPage />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;