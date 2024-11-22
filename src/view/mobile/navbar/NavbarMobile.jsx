
import React, { useContext } from 'react';
import { DisplayContext } from '../../../context/DisplayContext';
import { FaStore, FaShoppingCart, FaClipboardList, FaCog } from 'react-icons/fa';
import './Style.css';

export default function NavbarMobile() {
  const { isMobile } = useContext(DisplayContext);

  if (!isMobile) return null;

  const navigate = (page) => {
    alert(`Redirection vers ${page}`);
  };

  return (
    <div className="mobile-navbar">
      <div className="flex justify-around items-center">
        <button
          className="nav-button"
          onClick={() => navigate('boutique')}
          aria-label="Boutique"
        >
          <FaStore className="icon" />
          <span>Boutique</span>
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('panier')}
          aria-label="Panier"
        >
          <FaShoppingCart className="icon" />
          <span>Panier</span>
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('commandes')}
          aria-label="Commandes"
        >
          <FaClipboardList className="icon" />
          <span>Commandes</span>
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('parametres')}
          aria-label="Paramètres"
        >
          <FaCog className="icon" />
          <span>Paramètres</span>
        </button>
      </div>
    </div>
  );
}


// import React, { useContext } from 'react';
// import { DisplayContext } from '../../../context/DisplayContext';
// import { FaStore, FaShoppingCart, FaClipboardList, FaCog } from 'react-icons/fa';

// export default function NavbarMobile() {
//   const { isMobile } = useContext(DisplayContext);

//   if (!isMobile) return null;

//   const navigate = (page) => {
//     alert(`Redirection vers ${page}`);
//   };

//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-green text-white p-3 shadow-lg">
//       <div className="flex justify-around items-center">
//         <button
//           className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-yellow-400 focus:outline-none focus:bg-gray-200"
//           onClick={() => navigate('boutique')}
//           aria-label="Boutique"
//         >
//           <FaStore className="text-xl mb-1" />
//           <span className="text-sm">Boutique</span>
//         </button>
//         <button
//           className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:bg-gray-200"
//           onClick={() => navigate('panier')}
//           aria-label="Panier"
//         >
//           <FaShoppingCart className="text-xl mb-1" />
//           <span className="text-sm">Panier</span>
//         </button>
//         <button
//           className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-500 focus:outline-none focus:bg-gray-200"
//           onClick={() => navigate('commandes')}
//           aria-label="Commandes"
//         >
//           <FaClipboardList className="text-xl mb-1" />
//           <span className="text-sm">Commandes</span>
//         </button>
//         <button
//           className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-yellow-600 focus:outline-none focus:bg-gray-200"
//           onClick={() => navigate('parametres')}
//           aria-label="Paramètres"
//         >
//           <FaCog className="text-xl mb-1" />
//           <span className="text-sm">Paramètres</span>
//         </button>
//       </div>
//     </div>
//   );
// }
