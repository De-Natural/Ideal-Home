import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllServiceApartment from "../pages/AllServiceApartment";
import NotFound from "../pages/NotFound";
import ErrorBoundary from "../pages/ErrorBoundary";
import ViewApartment from "../pages/ViewApartment";



const router = createBrowserRouter([
 
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "all-apartments", element: <AllServiceApartment /> },
      { path: "view-apartment", element: <ViewApartment /> },
    //   { path: ":slug", element: <ProductDetail /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  
]);
export default router