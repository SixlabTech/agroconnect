import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import des composants nécessaires
import Root from "./routes/root.jsx";
import Home from "./pages/home.jsx";
import MarketPlace from "./pages/marketplace.jsx";
import Offers from "./pages/Offers.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Team from "./pages/team.jsx";
import Bourses from "./pages/Bourses.jsx";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
import ArticleForm from "./components/marquetplace/ArticleForm.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import WelcomeModal from "./components/modals/WelcomeModal.jsx";
import FloatingWhatsAppButton from "./ui/FloatingWhatsAppButton.jsx";
import Testimony from "./components/testimonies/testimony.jsx";
import CategorieProduit from "./components/Footer/CategorieProduit/CategorieProduit.jsx";
import { ModalProvider } from "./context/ModalContext.jsx"; // Modal Context
import { DisplayProvider } from './context/DisplayContext.jsx'; // DisplayContext

// Créer le router
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/ContactPage", element: <ContactPage /> },
        { path: "MarketPlace", element: <MarketPlace /> },
        { path: "Offers", element: <Offers /> },
        { path: "AboutUs", element: <AboutUs /> },
        { path: "ArticleForm", element: <ArticleForm /> },
        { path: "Team", element: <Team /> },
        { path: "ProductDetailPage", element: <ProductDetailPage /> },
        { path: "Bourses", element: <Bourses /> },
        { path: "WelcomeModal", element: <WelcomeModal /> },
        { path: "Testimony", element: <Testimony /> },
        { path: "CategorieProduit", element: <CategorieProduit /> },




      ],
    },
  ]
);

// Rendu de l'application avec DisplayProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DisplayProvider>
      <ModalProvider>
        <RouterProvider router={router}>
          <ScrollToTop />
          <FloatingWhatsAppButton />
        </RouterProvider>
      </ModalProvider>
    </DisplayProvider>
  </React.StrictMode>
);
