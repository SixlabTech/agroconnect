import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";
import FloatingWhatsAppButton from "../ui/FloatingWhatsAppButton"; // Import du bouton WhatsApp flottant
import NavbarMobile from "../view/mobile/navbar/NavbarMobile";

export default function Root() {
  return (
    <div className="flex flex-col ">
      {/* En-tête fixé */}
      <div className="w-full shadow-sm z-50 bg-white fixed">
        <Header />
      </div>

      {/* Zone pour afficher le contenu des pages */}
      <div className="flex-grow overflow-auto mt-16 mb-16">
        <Outlet />
      </div>

      {/* Footer et NavbarMobile */}
      <div >
        <NavbarMobile/>
        </div>
        <Footer />
   

      {/* Bouton WhatsApp flottant visible sur toutes les pages */}
      <FloatingWhatsAppButton />
    </div>
  );
}
