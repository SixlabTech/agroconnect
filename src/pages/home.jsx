// import React from "react";
// // ** import components **
// import Carousel from "../components/heroSection/carrousel";
// import BannerHeroSction from "../components/heroSection/BannerHeroSction";
// import ConstructionNoticeModal from "../components/modals/ConstructionNoticeModal";
// import CardGrid from "../components/CardGrid";
// import BannerFooter from "../components/Footer/BannerFooter";
// import FaqsList from "../components/FaqsList";

// export default function Home() {
//   return (
//     <div className="  b-0 m-0">
//         <div className="flex justify-center  items-center">
//           <ConstructionNoticeModal />
//         </div>
//         <Carousel />
//         <BannerHeroSction />
//         <div className="my-8 container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mt-10 flex justify-center items-center">
//             <CardGrid />
//           </div>
//         </div>
//         <div className="mt-8">
//         </div>
//         <BannerFooter />
//         <FaqsList/>
//     </div>
//   );
// }


// import React, { useEffect } from "react";
// import { useModal } from "../context/ModalContext";  // Import du hook
// import WelcomeModal from "../components/modals/WelcomeModal";  // Import de la WelcomeModal

// // Import des autres composants
// import Carousel from "../components/heroSection/carrousel";
// import BannerHeroSction from "../components/heroSection/BannerHeroSction";
// import CardGrid from "../components/CardGrid";
// import BannerFooter from "../components/Footer/BannerFooter";
// import FaqsList from "../components/FaqsList";

// export default function Home() {
//   const { hasSeenWelcomeModal, markModalAsSeen } = useModal();

//   // Affiche la modale de bienvenue si l'utilisateur ne l'a pas vue
//   useEffect(() => {
//     if (!hasSeenWelcomeModal) {
//       markModalAsSeen();  // Marque la modale comme vue
//     }
//   }, [hasSeenWelcomeModal, markModalAsSeen]);

//   return (
//     <div className="b-0 m-0">
//       {/* Si la modale n'a pas encore été vue, afficher la modale de bienvenue */}
//       {!hasSeenWelcomeModal && <WelcomeModal onClose={markModalAsSeen} />}
      
//       <Carousel />
//       <BannerHeroSction />
//       <div className="my-8 container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mt-10 flex justify-center items-center">
//           <CardGrid />
//         </div>
//       </div>
//       <div className="mt-8"></div>
//       <BannerFooter />
//       <FaqsList />
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";  // Import du hook
import WelcomeModal from "../components/modals/WelcomeModal";  // Import de la WelcomeModal

// Import des autres composants
import Carousel from "../components/heroSection/carrousel";
import BannerHeroSction from "../components/heroSection/BannerHeroSction";
import CardGrid from "../components/CardGrid";
import BannerFooter from "../components/Footer/BannerFooter";
import FaqsList from "../components/FaqsList";
import Testimony from "../components/testimonies/testimony";

export default function Home() {
  const { hasSeenWelcomeModal, markModalAsSeen } = useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);  // Local state pour contrôler l'ouverture de la modale

  // Affiche la modale de bienvenue si l'utilisateur ne l'a pas vue
  useEffect(() => {
    if (!hasSeenWelcomeModal) {
      setIsModalOpen(true); // Ouvre la modale si elle n'a pas encore été vue
    }
  }, [hasSeenWelcomeModal]);

  // Fonction pour fermer la modale
  const handleModalClose = () => {
    markModalAsSeen();  // Marque la modale comme vue
    setIsModalOpen(false);  // Ferme la modale
  };

  return (
    <div className="b-0 m-0">
      {/* Affiche la modale si elle n'a pas encore été vue */}
      {isModalOpen && <WelcomeModal onClose={handleModalClose} />}

      <Carousel />
      <BannerHeroSction />
      <div className="my-8 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 flex justify-center items-center">
          <CardGrid />
        </div>
      </div>
      <div className="mt-8"></div>
     
      <BannerFooter />
      <Testimony/>
      <FaqsList />
    </div>
  );
}
