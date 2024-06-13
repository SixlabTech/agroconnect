// import React from "react";
// import { Link } from "react-router-dom";

// export default function HomeCarrouselPromo() {
//   return (
//     <div className="flex  border relative overflow-hidden flex-col bg-green justify-center font-semibold text-white min-h-[349px]">
//       <div className="flex flex-col items-start px-20 pt-10 pb-20 w-full bg-neutral-800 max-md:px-5 max-md:w-full">
//         <div className="ml-16 text-xl leading-5 max-md:ml-0">
//           <span className="text-white">S'inscrire</span>
//         </div>
//         <div className="mt-11 ml-16 text-4xl font-bold leading-[52px] max-md:mt-5 max-md:ml-0 max-md:text-3xl max-sm:text-2xl">
//           15% de réduction sur tous 
//           <br />
//           nos produits 
//         </div>
//         <Link to="/marketplace" className="px-4 py-3 rounded-full mt-8 mb-4 ml-16 text-base bg-[#F89C0E]   shadow-lg max-md:mt-5 max-md:ml-0">   Boutique</Link>
//       </div>
//       <img 
//         src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717787069/Frame_t4deys.png" 
//         alt="Promo"
//         className="w-[40rem] h-[30rem] ml-[58%] mt-[5%] z-50 absolute max-md:w-[30rem] max-md:h-[20rem] max-md:ml-[50%] max-sm:w-[20rem] max-sm:h-[15rem] max-sm:ml-[40%]"
//       />
//     </div>
//   );
// // }
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function HomeCarrouselPromo() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Simuler la vérification de l'état de connexion (remplacer par votre logique réelle)
//   useEffect(() => {
//     const userToken = localStorage.getItem("userToken"); // Exemple d'obtention d'un token
//     if (userToken) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleButtonClick = () => {
//     if (isLoggedIn) {
//       navigate("/marketplace");
//     } else {
//       alert("Veuillez créer un compte pour accéder à la boutique.");
//       navigate("/signup"); // Redirige vers la page de création de compte
//     }
//   };

//   return (
//     <div className="flex border relative overflow-hidden flex-col bg-green-500 justify-center font-semibold text-white min-h-[349px]">
//       <div className="flex flex-col items-start px-20 pt-10 pb-20 w-full bg-neutral-800 max-md:px-5 max-md:w-full">
//         <div className="ml-16 text-xl leading-5 max-md:ml-0">
//           <span className="text-white">S'inscrire</span>
//         </div>
//         <div className="mt-11 ml-16 text-4xl font-bold leading-[52px] max-md:mt-5 max-md:ml-0 max-md:text-3xl max-sm:text-2xl">
//           15% de réduction sur tous 
//           <br />
//           nos produits 
//         </div>
//         <button 
//           onClick={handleButtonClick} 
//           className="px-4 py-3 rounded-full mt-8 mb-4 ml-16 text-base bg-[#F89C0E] shadow-lg max-md:mt-5 max-md:ml-0"
//         >
//           Boutique
//         </button>
//       </div>
//       <img 
//         src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717787069/Frame_t4deys.png" 
//         alt="Promo"
//         className="w-[40rem] h-[30rem] ml-[58%] mt-[5%] z-50 absolute max-md:w-[30rem] max-md:h-[20rem] max-md:ml-[50%] max-sm:w-[20rem] max-sm:h-[15rem] max-sm:ml-[40%]"
//       />
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from '../modals/ModalePopup'; // Assurez-vous de corriger le chemin d'import

export default function HomeCarrouselPromo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Simuler la vérification de l'état de connexion (remplacer par votre logique réelle)
  useEffect(() => {
    const userToken = localStorage.getItem("userToken"); // Exemple d'obtention d'un token
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/marketplace");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/signup"); // Redirige vers la page de création de compte
  };

  return (
    <div className="flex  flex-col bg-green justify-center font-semibold text-white min-h-[349px]">
      <div className="flex flex-col z-30 items-start   max-md:px-5 max-md:w-full">
        <div className="ml-16 text-xl leading-5 max-md:ml-0">
          <span className="text-white text-sm font-light">S'inscrire</span>
        </div>
        <div className="mt-11  text-4xl font-semibold ml-16  max-md:mt-5 max-md:ml-0 max-md:text-3xl max-sm:text-2xl">
          15% de réduction sur tous 
          <br />
          nos produits 
        </div>
        <button 
          onClick={handleButtonClick} 
          className="px-4 py-3 rounded-full mt-8 mb-4 ml-16 text-sm font-light bg-[#F89C0E] shadow-lg max-md:mt-5 max-md:ml-0"
        >
          Boutique
        </button>
      </div>
      <img 
        src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717787069/Frame_t4deys.png" 
        alt="Promo"
        className="w-[39rem]  z-20 h-[30rem] ml-[56%] mt-[10%]  absolute max-md:w-[30rem] max-md:h-[20rem] max-md:ml-[40%] max-sm:w-[15rem] max-sm:h-[15rem] max-sm:ml-[25%]"
      />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold">Créez un compte</h2>
        <p className="mt-4">Veuillez créer un compte pour accéder à la boutique.</p>
        <button 
          onClick={closeModal} 
          className="mt-4 bg-[#F89C0E] text-white px-4 py-2 rounded"
        >
          Créer un compte
        </button>
      </Modal>
    </div>
  );
}
