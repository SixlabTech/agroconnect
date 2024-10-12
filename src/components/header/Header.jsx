import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search, Mail, User, Heart, ShoppingCart } from "lucide-react";

// Ajout des styles personnalisés pour la couleur spécifique
const styles = {
  hoverEffect: "hover:text-[#3f6341] transition-colors duration-200",
  buttonHover: "hover:bg-[#3f6341] transition-all duration-200",
  dropdownHover: "hover:bg-[#3f6341] hover:text-white transition-colors duration-200"
};

const menuItems = [
  { title: "Accueil", to: "/" },
  {
    title: "Boutique en ligne",
    to: "/marketplace",
    dropdown: [
      { title: "Boutique en ligne", to: "/marketplace" },
      { title: "Pack alimentaire", to: "/offerForm" },
    ],
  },
  {
    title: "Marchés",
    dropdown: [
      { title: "Tableau de bords", to: "/calendar" },
      { title: "Prix du Maïs", to: "" },
      { title: "Prix du Manioc", to: "" },
      { title: "Prix du Sorgho", to: "" },
      { title: "Prix du Niebe", to: "" },
    ],
  },
  {
    title: "Portail",
    to: "#",
    dropdown: [
      { title: "Trouver un Angins agricole", to: "" },
      { title: "Formation et éducation", to: "" },
      { title: "Formation et éducation", to: "" },
      { title: "Recruter un Ir Agronome", to: "" },
    ],
  },
  {
    title: "À propos de Nous",
    to: "/AboutUs",
    dropdown: [
      { title: "Notre Équipe", to: "/team" },
      { title: "Nos Partenaires", to: "" },
      { title: "Nos Valeurs", to: "ProductDetailPage" },
      { title: "Notre Vision", to: "" },
    ],
  },
];

function MenuItem({ item, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = Array.isArray(item.dropdown);

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false);
  };

  const handleClick = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <li 
      className={`${isMobile ? 'w-full' : ''}`}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {hasDropdown ? (
        <div className={`relative ${isMobile ? 'w-full' : ''}`}>
          <button 
            onClick={handleClick}
            className={`
              flex items-center gap-2 
              ${styles.hoverEffect}
              ${isMobile ? 'w-full py-2 px-4 text-left' : ''}
            `}
          >
            {item.title} 
            <span className="transform transition-transform duration-200">
              {isOpen ? '⌟' : '⌝'}
            </span>
          </button>
          {isOpen && (
            <ul className={`
              shadow-lg rounded bg-white z-50
              ${isMobile ? 'relative w-full pl-4' : 'absolute top-full left-0 min-w-[200px]'}
            `}>
              {item.dropdown.map((dropdownItem, index) => (
                <li
                  key={index}
                  className={styles.dropdownHover}
                >
                  <NavLink 
                    to={dropdownItem.to}
                    className="block w-full p-2"
                  >
                    {dropdownItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <NavLink 
          to={item.to}
          className={`
            ${styles.hoverEffect}
            ${isMobile ? 'block w-full py-2 px-4' : ''}
          `}
        >
          {item.title}
        </NavLink>
      )}
    </li>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section supérieure */}
        <div className="flex flex-wrap items-center justify-between py-4 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg" 
              alt="Agroconnect" 
              className="h-12 md:h-16"
            />
          </div>

          {/* Bouton hamburger mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden ml-auto p-2 rounded ${styles.buttonHover}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Barre de recherche */}
          {/* <div className="w-full lg:flex-1 lg:max-w-xl lg:w-auto order-3 lg:order-none">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher produit ici"
                className="w-full border pl-4 pr-12 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3f6341] transition-all duration-200"
              />
              <button className={`
                absolute right-0 top-0 h-full px-4 
                bg-[#3f6341] text-white rounded-r-md
                ${styles.buttonHover}
                transform transition-transform duration-200 hover:scale-105
              `}>
                <Search size={18} />
              </button>
            </div>
          </div> */}

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink 
              to="/contact" 
              className={`flex items-center gap-2 ${styles.hoverEffect}`}
            >
              <Mail size={18} />
              <span className="text-sm">Nous contacter</span>
            </NavLink>
            <NavLink 
              to="/compte" 
              className={`flex items-center gap-2 ${styles.hoverEffect}`}
            >
              <User size={18} />
              <span className="text-sm">Créer un compte</span>
            </NavLink>
            <NavLink 
              to="/favoris" 
              className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
            >
              <Heart size={18} />
            </NavLink>
            <NavLink 
              to="/panier" 
              className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
            >
              <ShoppingCart size={18} />
            </NavLink>
          </div>
        </div>

        {/* Navigation principale */}
        <nav className={`
          border-t
          ${isMenuOpen ? 'block' : 'hidden lg:block'}
        `}>
          <ul className={`
            py-4 
            ${isMenuOpen 
              ? 'flex flex-col space-y-2' 
              : 'flex flex-wrap justify-center gap-12'}
          `}>
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index} 
                item={item} 
                isMobile={isMenuOpen}
              />
            ))}
          </ul>

          {/* Actions mobiles */}
          {isMenuOpen && (
            <div className="lg:hidden border-t py-4 space-y-4">
              <NavLink 
                to="/contact" 
                className={`flex items-center gap-2 px-4 ${styles.hoverEffect}`}
              >
                <Mail size={18} />
                <span>Nous contacter</span>
              </NavLink>
              <NavLink 
                to="/compte" 
                className={`flex items-center gap-2 px-4 ${styles.hoverEffect}`}
              >
                <User size={18} />
                <span>Créer un compte</span>
              </NavLink>
              <div className="flex gap-6 px-4">
                <NavLink 
                  to="/favoris" 
                  className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
                >
                  <Heart size={18} />
                </NavLink>
                <NavLink 
                  to="/panier" 
                  className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
                >
                  <ShoppingCart size={18} />
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}