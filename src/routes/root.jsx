// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "../components/header/Header";
// import Footer from "../components/Footer/footer";

// export default function Root() {
//   return (
//     <div>
//       <div className="w-full shadow-sm  top-0 z-50 bg-white fixed">
//         <Header/>
//       </div>
//       <div className="mt-28 overflow">
//         <Outlet/>
//       </div>

//       <div>
//         <Footer/>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";
import FloatingWhatsAppButton from "../ui/FloatingWhatsAppButton"; // Import du bouton WhatsApp flottant
import MobileButtonBar from "../global/MobileButtonBa";

export default function Root() {
  return (
    <div>
      {/* En-tête fixé */}
      <div className="w-full shadow-sm top-0 z-50 bg-white fixed">
        <Header />
      </div>

      {/* Zone pour afficher le contenu des pages */}
      <div className="mt-28 overflow">
        <Outlet />
      </div>

      {/* Footer */}
      <div>
        <MobileButtonBar/>
        <Footer />
      </div>

      {/* Bouton WhatsApp flottant visible sur toutes les pages */}
      <FloatingWhatsAppButton />
    </div>
  );
}
