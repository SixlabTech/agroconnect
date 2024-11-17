// //version de base 


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";

// // *** import components//
// import Root from "./routes/root";
// import Home from "./pages/home";
// import MarketPlace from "./pages/marketplace";
// import Offers from "./pages/Offers";
// import AboutUs from "./pages/AboutUs";
// import Team from "./pages/team";
// import Bourses from "./pages/Bourses";
// // import Login from "./pages/auth/login";
// import ProductDetailPage from "./components/ProductDetailPage.jsx";
// // import SignUp from "./pages/auth/SignUp";
// import ArticleForm from "./components/marquetplace/ArticleForm.jsx";
// import ConstructionNoticeModal from "./components/modals/ConstructionNoticeModal.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";
// import ScrollToTop from "./utils/ScrollToTop.jsx";
// import ContactPage from "./components/ContactPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       // {
//       //   path: "/login",
//       //   element: <Login />,
//       // },
//       {
//         path: "/ContactPage",
//         element: <ContactPage/>,
//       },
//       {
//         path: "MarketPlace",
//         element: <MarketPlace />,
//       },
//       {
//         path: "Offers",
//         element: <Offers />,
//       },
//       {
//         path: "AboutUs",
//         element: <AboutUs />,
//       },
//       {
//         path: "ArticleForm",
//         element: <ArticleForm />,
//       },
//       {
//         path: "Team",
//         element: <Team />,
//       },
//       {
//         path: "ProductDetailPage",
//         element: <ProductDetailPage />,
//       },
//       {
//         path: "Bourses",
//         element: <Bourses />,
//       },
//       // {
//       //   path: "/signup",
//       //   element: <SignUp />,
//       // },
//       {
//         path: "ConstructionNoticeModal",
//         element: <ConstructionNoticeModal />,
//       },
//     ],
//   },
// ]);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <ScrollToTop />
//     </RouterProvider>
//   </React.StrictMode>
// );

// // version de base 


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";

// // *** import components//
// import Root from "./routes/root";
// import Home from "./pages/home";
// import MarketPlace from "./pages/marketplace";
// import Offers from "./pages/Offers";
// import AboutUs from "./pages/AboutUs";
// import Team from "./pages/team";
// import Bourses from "./pages/Bourses";
// // import Login from "./pages/auth/login";
// import ProductDetailPage from "./components/ProductDetailPage.jsx";
// // import SignUp from "./pages/auth/SignUp";
// import ArticleForm from "./components/marquetplace/ArticleForm.jsx";
// // import ConstructionNoticeModal from "./components/modals/ConstructionNoticeModal.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";
// import ScrollToTop from "./utils/ScrollToTop.jsx";
// import ContactPage from "./components/ContactPage.jsx";
// import { ModalProvider } from "./context/ModalContext.jsx"; // Import du provider pour le modal
// import WelcomeModal from "./components/modals/WelcomeModal.jsx"; // Import de la modale de bienvenue

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/ContactPage",
//         element: <ContactPage />,
//       },
//       {
//         path: "MarketPlace",
//         element: <MarketPlace />,
//       },
//       {
//         path: "Offers",
//         element: <Offers />,
//       },
//       {
//         path: "AboutUs",
//         element: <AboutUs />,
//       },
//       {
//         path: "ArticleForm",
//         element: <ArticleForm />,
//       },
//       {
//         path: "Team",
//         element: <Team />,
//       },
//       {
//         path: "ProductDetailPage",
//         element: <ProductDetailPage />,
//       },
//       {
//         path: "Bourses",
//         element: <Bourses />,
//       },
//       {
//         path: "WelcomeModal",
//         element: <WelcomeModal />,
//       }
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* Envelopper l'application dans le ModalProvider pour rendre le contexte accessible */}
//     <ModalProvider>
//       <RouterProvider router={router}>
//         <ScrollToTop />
//       </RouterProvider>
//     </ModalProvider>
//   </React.StrictMode>
// );



//////////////////////////////////


//    la version avec le flag   //


/////////////////////////////////


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";

// // *** import components
// import Root from "./routes/root";
// import Home from "./pages/home";
// import MarketPlace from "./pages/marketplace";
// import Offers from "./pages/Offers";
// import AboutUs from "./pages/AboutUs";
// import Team from "./pages/team";
// import Bourses from "./pages/Bourses";
// import ProductDetailPage from "./components/ProductDetailPage.jsx";
// import ArticleForm from "./components/marquetplace/ArticleForm.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";
// import ScrollToTop from "./utils/ScrollToTop.jsx";
// import ContactPage from "./components/ContactPage.jsx";
// import { ModalProvider } from "./context/ModalContext.jsx"; // Import du provider pour le modal
// import WelcomeModal from "./components/modals/WelcomeModal.jsx"; // Import de la modale de bienvenue


// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Root />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/ContactPage",
//           element: <ContactPage />,
//         },
//         {
//           path: "MarketPlace",
//           element: <MarketPlace />,
//         },
//         {
//           path: "Offers",
//           element: <Offers />,
//         },
//         {
//           path: "AboutUs",
//           element: <AboutUs />,
//         },
//         {
//           path: "ArticleForm",
//           element: <ArticleForm />,
//         },
//         {
//           path: "Team",
//           element: <Team />,
//         },
//         {
//           path: "ProductDetailPage",
//           element: <ProductDetailPage />,
//         },
//         {
//           path: "Bourses",
//           element: <Bourses />,
//         },
//         {
//           path: "WelcomeModal",
//           element: <WelcomeModal />,
//         },
//       ],
//     },
//   ],
//   {
//     // Ajout du future flag ici
//     future: {
//       v7_normalizeFormMethod: true,
//     },
//   }
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* Envelopper l'application dans le ModalProvider pour rendre le contexte accessible */}
//     <ModalProvider>
//       <RouterProvider router={router}>
//         <ScrollToTop />
//       </RouterProvider>
//     </ModalProvider>
//   </React.StrictMode>
// );


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// *** import components
import Root from "./routes/root";
import Home from "./pages/home";
import MarketPlace from "./pages/marketplace";
import Offers from "./pages/Offers";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/team";
import Bourses from "./pages/Bourses";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
import ArticleForm from "./components/marquetplace/ArticleForm.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import ContactPage from "./components/ContactPage.jsx";
import { ModalProvider } from "./context/ModalContext.jsx"; // Import du provider pour le modal
import WelcomeModal from "./components/modals/WelcomeModal.jsx"; // Import de la modale de bienvenue
import FloatingWhatsAppButton from "./ui/FloatingWhatsAppButton.jsx"; // Import du bouton WhatsApp
import Testimony from "./components/testimonies/testimony.jsx";
import CategorieProduit from "./components/Footer/CategorieProduit/CategorieProduit.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ContactPage",
          element: <ContactPage />,
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
        {
          path: "WelcomeModal",
          element: <WelcomeModal />,
        },
        {
          path: "Testimony ",
          element: <Testimony />,
        },
        {
          path: "CategorieProduit ",
          element:<CategorieProduit/>,
        },
     
      ],
    },
  ],
  {
    // Ajout du future flag ici
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Envelopper l'application dans le ModalProvider pour rendre le contexte accessible */}
    <ModalProvider>
      <RouterProvider router={router}>
        <ScrollToTop />
        {/* Ajouter le bouton WhatsApp flottant globalement */}
        <FloatingWhatsAppButton />
      </RouterProvider>
    </ModalProvider>
  </React.StrictMode>
);
