
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Mail, User, Heart, ShoppingCart } from "lucide-react";

// Constants et configurations
const SCROLL_THRESHOLD = 0;
const ICON_SIZE = 18;

const styles = {
  hoverEffect: "hover:text-[#3f6341] transition-colors duration-200",
  buttonHover: "hover:bg-[#3f6341] transition-all duration-200",
  dropdownHover: "hover:bg-[#3f6341] hover:text-white transition-colors duration-200",
  iconLink: "transform transition-transform duration-200 hover:scale-110",
  mobileFullWidth: "w-full py-2 px-4",
  actionButton: "block font-thin bg-green text-white rounded-lg w-full py-1 px-3 text-center text-black hover:text-[#3f6341]"
};

const navigationConfig = {
  mainMenu: [
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
  ],
  contactMenu: [
    { title: "Nous contacter", to: "/ContactPage" },
  ],
  actionItems: [
    { title: "Nous contacter", to: "/ContactPage", Icon: Mail },
    { title: "Connexion", to: "/connexion", Icon: User },
    { title: "", to: "/favoris", Icon: Heart },
    { title: "", to: "/panier", Icon: ShoppingCart }
  ]
};

// Composants réutilisables
const IconLink = ({ to, Icon, title, className = "" }) => (
  <NavLink to={to} className={`${styles.hoverEffect} ${styles.iconLink} ${className}`}>
    <div className="flex items-center gap-2">
      <Icon size={ICON_SIZE} />
      {title && <span className="text-sm">{title}</span>}
    </div>
  </NavLink>
);

const Logo = () => (
  <NavLink to="/">
    <div className="flex-shrink-0">
      <img 
        src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg"
        alt="Agroconnect" 
        className="h-12  lg:mt-5  mt-10 sm:mt-10 mb-4 md:h-16" 
      />
    </div>
  </NavLink>
);

const MenuItem = ({ item, isMobile = false, onMouseLeave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = Array.isArray(item.dropdown);

  const handleMouseEnter = () => !isMobile && setIsOpen(true);
  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false);
    if (isMobile && onMouseLeave) onMouseLeave();
  };
  const handleClick = () => isMobile && setIsOpen(!isOpen);

  if (!hasDropdown) {
    return (
      <li className={isMobile ? 'w-full' : ''}>
        <NavLink 
          to={item.to} 
          className={`${styles.hoverEffect} ${isMobile ? styles.mobileFullWidth : ''}`}
        >
          {item.title}
        </NavLink>
      </li>
    );
  }

  return (
    <li
      className={isMobile ? 'w-full' : ''}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative ${isMobile ? 'w-full' : ''}`}>
        <button
          onClick={handleClick}
          className={`flex items-center gap-2 ${styles.hoverEffect} ${isMobile ? styles.mobileFullWidth + ' text-left' : ''}`}
        >
          {item.title}
          <span className="transform transition-transform duration-200">
            {isOpen ? '⌟' : '⌝'}
          </span>
        </button>
        {isOpen && (
          <ul className={`shadow-lg rounded bg-white z-50 ${
            isMobile ? 'relative w-full pl-4' : 'absolute top-full left-0 min-w-[200px]'
          }`}>
            {item.dropdown.map((dropdownItem, index) => (
              <li key={index} className={styles.dropdownHover}>
                <NavLink to={dropdownItem.to} className="block w-full p-2">
                  {dropdownItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white z-40 shadow-lg">
      <ul className="flex flex-col items-center py-4">
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {navigationConfig.mainMenu.map((item, index) => (
            <MenuItem key={index} item={item} isMobile={true} onMouseLeave={onClose} />
          ))}
          {navigationConfig.contactMenu.map((item, index) => (
            <MenuItem key={index} item={item} isMobile={false} onMouseLeave={onClose} />
          ))}
        </div>
        <div className="mt-5 space-y-4">
          {["Se connecter", "Créer un compte"].map((text, index) => (
            <li key={index} className="w-36">
              <NavLink
                to={index === 0 ? "/connexion" : "/compte"}
                className={styles.actionButton}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

const DesktopNavigation = ({ visible }) => (
  <div 
    className={`w-full bg-white transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`} 
    style={{ position: 'fixed', top: '80px', left: 0, right: 0, zIndex: 40 }}
  >
    <div className="max-w-7xl lg:mt-10 mx-auto px-4">
      <nav className="hidden lg:block">
        <ul className="py-3 flex flex-wrap justify-center lg:gap-12">
          {navigationConfig.mainMenu.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < SCROLL_THRESHOLD);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <div className="w-full mb-10 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between md:py-10 lg:py-1 gap-4">
            <Logo />
            
            {/* Mobile Actions */}
            <div className="flex mt-10 items-center gap-5 lg:hidden ml-auto">
              {navigationConfig.actionItems.slice(-2).map((item, index) => (
                <IconLink key={index} {...item} />
              ))}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded ${styles.buttonHover}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {navigationConfig.actionItems.map((item, index) => (
                <IconLink key={index} {...item} showTitle={index < 2} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <DesktopNavigation visible={visible} />
    </>
  );
}