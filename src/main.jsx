import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// *** import components//
import Root from "./routes/root";
import Home from "./pages/home";
import MarketPlace from "./pages/marketplace";
import Offers from "./pages/Offers";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/team";
import Bourses from "./pages/Bourses";
// import Login from "./pages/auth/login";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
// import SignUp from "./pages/auth/SignUp";
import ArticleForm from "./components/marquetplace/ArticleForm.jsx";
import ConstructionNoticeModal from "./components/modals/ConstructionNoticeModal.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import ContactPage from "./components/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      {
        path: "/ContactPage",
        element: <ContactPage/>,
      },
      {
        path: "MarketPlace",
        element: <MarketPlace />,
      },
      {
        path: "Offers",
        element: <Offers />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "ArticleForm",
        element: <ArticleForm />,
      },
      {
        path: "Team",
        element: <Team />,
      },
      {
        path: "ProductDetailPage",
        element: <ProductDetailPage />,
      },
      {
        path: "Bourses",
        element: <Bourses />,
      },
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
      {
        path: "ConstructionNoticeModal",
        element: <ConstructionNoticeModal />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </React.StrictMode>
);
