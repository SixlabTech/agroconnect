
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Mail, User, Heart, ShoppingCart, Search } from "lucide-react";
import { navigationConfig } from "./config/navigationConfig"; // Importation de la configuration
// Constants et configurations
const SCROLL_THRESHOLD = 0;
const ICON_SIZE = 18;

const styles = {
  hoverEffect: "hover:text-[#3f6341] transition-colors duration-200",
  buttonHover: "hover:bg-[#3f6341] transition-all duration-200",
  dropdownHover: "hover:bg-[#3f6341] hover:text-white transition-colors duration-200",
  iconLink: "transform transition-transform duration-200 hover:scale-110",
  mobileFullWidth: "w-full py-2 px-4",
  actionButton: "block font-thin bg-[#3f6341] text-white rounded-lg w-full py-1 px-3 text-center hover:bg-[#2d4830]",
  searchBar: "relative hidden lg:flex items-center",
  mobileSidebar: {
    overlay: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300", // Modifié pour plus de transparence et effet de flou
    container: "fixed w-[95%] top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
    content: "flex flex-col h-full",
    header: "flex items-center justify-between p-4",
    nav: "flex-1 overflow-y-auto py-4",
    footer: "p-4"
  }
};

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = navigationConfig.mainMenu
      .flatMap(item => 
        item.dropdown 
          ? [item, ...item.dropdown]
          : item
      )
      .filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    setSearchResults(results);
    setShowResults(true);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.search-container')) {
      setShowResults(false);
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`${styles.searchBar} search-container`}>
      {isExpanded ? (
        <div className="relative ">
          <form onSubmit={handleSearch} className="flex border items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher..."
              className="px-4 py-1 border border-gray-300 rounded-l-lg focus:outline-none focus:border-[#3f6341]"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-1 bg-[#3f6341] text-white rounded-r-lg hover:bg-[#2d4830] transition-colors duration-200"
            >
              <Search size={ICON_SIZE} />
            </button>
          </form>
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-50">
              {searchResults.map((result, index) => (
                <NavLink
                  key={index}
                  to={result.to}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setShowResults(false);
                    setIsExpanded(false);
                  }}
                >
                  {result.title}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <Search size={ICON_SIZE} />
        </button>
      )}
    </div>
  );
};

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
        className="h-12 md:h-16" 
      />
    </div>
  </NavLink>
);

const MenuItem = ({ item, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = Array.isArray(item.dropdown);

  const handleClick = () => isMobile && hasDropdown && setIsOpen(!isOpen);

  if (isMobile) {
    if (!hasDropdown) {
      return (
        <li className="w-full">
          <NavLink 
            to={item.to} 
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {item.title}
          </NavLink>
        </li>
      );
    }

    return (
      <li className="w-full">
        <button
          onClick={handleClick}
          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
        >
          {item.title}
          <span className="transform transition-transform duration-200">
          {isOpen ? '⌟' : '⌝'}
          </span>
        </button>
      
        {isOpen && (
          <ul className="pl-4 mt-1 space-y-1 bg-gray-50">
            {item.dropdown.map((dropdownItem, index) => (
              <li key={index}>
                <NavLink 
                  to={dropdownItem.to} 
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {dropdownItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Desktop version
  if (!hasDropdown) {
    return (
      <li>
        <NavLink 
          to={item.to} 
          className={`${styles.hoverEffect}  px-4`}
        >
          {item.title}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="relative group">
      <button className="flex items-center px-4 py-2 group-hover:text-[#3f6341]">
        {item.title}
        <span className="ml-1">⌟</span>
      </button>

           
      <ul className="absolute  left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50">
        {item.dropdown.map((dropdownItem, index) => (
          <li key={index}>
            <NavLink 
              to={dropdownItem.to} 
              className="block px-4 py-2 hover:bg-gray-100 hover:rounded hover:bg-[#3f6341] hover:text-white"
            >
              {dropdownItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};



const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className={styles.mobileSidebar.overlay}
        onClick={onClose}
      />
      <div className={`${styles.mobileSidebar.container} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={styles.mobileSidebar.content}>
          <div className={styles.mobileSidebar.header}>
            <Logo />
            <button
              onClick={onClose}
              className="p-2 rounded hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          <nav className={styles.mobileSidebar.nav}>
            <ul className="space-y-2">
              {navigationConfig.mainMenu.map((item, index) => (
                <MenuItem key={index} item={item} isMobile={true} />
              ))}
              {navigationConfig.contactMenu.map((item, index) => (
                <MenuItem key={index} item={item} isMobile={true} />
              ))}
            </ul>
          </nav>

          <div className={styles.mobileSidebar.footer}>
            <div className="space-y-4">
              {/* <div className="flex flex-col space-y-2">
                {navigationConfig.actionItems.map((item, index) => (
                  <IconLink 
                    key={index} 
                    {...item} 
                    className="flex items-center p-2 hover:bg-gray-100 rounded"
                  />
                ))}
              </div> */}
              <div className="pt-4">
                <NavLink to="/connexion" className={styles.actionButton}>
                  Se connecter
                </NavLink>
                <NavLink to="/compte" className={`${styles.actionButton} mt-2`}>
                  Créer un compte
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// nav barr en vue desktop
const DesktopNavigation = ({ visible }) => (
  <nav className={`w-full  bg-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className="max-w-7xl  mx-auto px-4">
      <div className="hidden lg:block ">
        <ul className="flex justify-center items-center mt-24 gap-8">
          {navigationConfig.mainMenu.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  </nav>
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full bg-white md:shadow   fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl  mx-auto px-4">
          <div className="flex  items-center justify-between py-4">
            <Logo />
            
            {/* Mobile Actions */}
            <div className="flex items-center gap-5 lg:hidden ml-auto">
              {navigationConfig.actionItems.slice(-2).map((item, index) => (
                <IconLink key={index} {...item} />
              ))}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <SearchBar />
              {navigationConfig.actionItems.map((item, index) => (
                <IconLink key={index} {...item} showTitle={index < 2} />
              ))}
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <DesktopNavigation visible={visible} />
    </>
  );
}