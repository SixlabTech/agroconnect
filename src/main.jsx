// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import "./index.css";

// // *** import components//
// import Root from "./routes/root";
// import Home from "./pages/home";
// import MarketPlace from "./pages/marketplace";
// import Offers from "./pages/Offers";
// import AboutUs from "./pages/AboutUs";
// import Team from "./pages/team";
// import Bourses from "./pages/Bourses";
// import Login from "./pages/auth/login";
//  import ProductDetailPage from "./components/ProductDetailPage.jsx";
// import SignUp from "./pages/auth/SignUp";
// import ArticleForm from "./components/marquetplace/ArticleForm.jsx";
// import Modal from "./components/modals/Modal.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";
// import ScrollToTop  from "./utils/ScrollToTop.jsx"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/", 
//         element: <Home/>,

//       },
//       {
//         path: "/login",
//         element:  <Login/>
//       },
//       {
//         path: "MarketPlace",
//         element: <MarketPlace/>
//       },
   
//       {
//         path: "Offers", 
//         element: <Offers/>
     
//       },
//       {
//         path: "AboutUs", 
//         element: <AboutUs/>
     
//       },
//       {
//         path: "ArticleForm", 
//         element: <ArticleForm/>
     
//       },
//       {
//         path: "Team", 
//         element: <Team/>
     
//       },
//       {
//         path: "ProductDetailPage", 
//         element: <ProductDetailPage/>
     
//       },
//       {
//         path: "Bourses", 
//         element: <Bourses/>
//       },

//       {
//         path: "/signup", 
//         element: <SignUp/>
//       },
//       {
//         path: "modal ", 
//         element: <Modal/>
//       },
//     ],
//   },
// ]);



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <ScrollToTop /> {/* Ajoutez ScrollToTop ici */}
//     </RouterProvider>
//   </React.StrictMode>
// );

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
import Login from "./pages/auth/login";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
import SignUp from "./pages/auth/SignUp";
import ArticleForm from "./components/marquetplace/ArticleForm.jsx";
import Modal from "./components/modals/Modal.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

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
      {
        path: "/login",
        element: <Login />,
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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "modal",
        element: <Modal />,
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
