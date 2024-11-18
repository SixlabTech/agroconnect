import React, { useContext } from 'react'; 
import { DisplayContext } from '../context/DisplayContext'; 
import { FaStore, FaShoppingCart, FaClipboardList, FaCog } from 'react-icons/fa';
import './MobileButtonBar.css'; // Import du fichier CSS

const MobileButtonBar = () => {
  const { isMobile } = useContext(DisplayContext);

  if (!isMobile) return null;

  const navigate = (page) => {
    alert(`Redirection vers ${page}`);
  };

  return (
    <div className="mobile-navbar z-10 ">
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
};

export default MobileButtonBar;
