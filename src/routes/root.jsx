import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";

export default function Root() {
  return (
    <div>
      <div className="w-full shadow-sm  top-0 z-50 bg-white fixed">
        <Header/>
      </div>
      <div className="mt-28 overflow">
        <Outlet/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}
