// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import { NavLink } from "react-router-dom";

// // Composant pour le bouton de menu mobile
// function MenuButton({ onClick }) {
//   return (
//     <button className="sm:hidden bg-green text-white  rounded-full p-2" onClick={onClick}>
//       <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712757559/icons/menucat_arixfc.svg" alt="icon menu" className="size-3" />
//     </button>
//   );
// }

// // Composant pour la barre de recherche
// function SearchBar() {
//   return (
//     <div className="relative ml-28 flex items-center">
//       <input
//         className="border w-96 rounded-full px-4 py-2 focus:outline-none h-9"
//         type="text"
//         placeholder="Rechercher produit ici..."
//       />
//       <button className="bg-green rounded-full text-white h-8 absolute ml-[87%] w-[12%]">
//         •••
//       </button>
//     </div>
//   );
// }

// // Composant pour le menu déroulant du lien "Créer un compte"
// function DropdownMenu({ onClose }) {
//   return (
//     <div className="absolute bg-white  ml-6 w-48 h-52 mt-2  rounded-lg shadow-lg" onMouseLeave={onClose}>
//       <NavLink to="#" className="block text-center whitespace-nowrap px-4 py-2  hover:text-white hover:bg-green">
//         Je suis un vendeur
//       </NavLink>
//       <NavLink to="/Login" className="block  text-center px-4 py-2  hover:text-white  hover:bg-green">
//         Je suis un acheteur
//       </NavLink>
// <hr />
//       <div className="mt-2 text-center">
//         <h2 className="font-bold mb-3">Connecter-vous</h2>
    
//         <NavLink to="/login" className="border  text-sm font-thin rounded-full text-white bg-green p-2 hover:bg-white  hover:text-green">Me connecter</NavLink>
//       </div>

//       <div className="text-center mt-4 h-10  w-full">
//         <h4 className="">Vous êtes nouveau client ?</h4>
//         <NavLink to="/signup" className="font-thin  mt-10 underline font-xs  text-red rounded p-2">Créer un compte</NavLink>
//       </div>
//     </div>
//   );
// }

// // Composant pour les liens complémentaires
// function AdditionalLinks() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   return (

//     <ul className="flex ml-24 text-sm gap-6">

//       <NavLink to="/" className="flex items-center gap-2">
//         <p>Nous contacter</p>
//         <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
//           alt="icon contact" className="w-5 h-5"/>
//       </NavLink>


//       <li className="relative">
//         <button onClick={toggleDropdown} className="flex items-center gap-2">
//           <p>Connexion</p>
//           <img
//             src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
//             alt="icon login"
//             className="w-5 h-5"
//           />
//         </button>
//         {isDropdownOpen && <DropdownMenu onClose={closeDropdown} />}
//       </li>
//     </ul>
//   );
// }

// export default function Header() {
//   const [isNavVisible, setIsNavVisible] = useState(false);

//   const toggleNavVisibility = () => {
//     setIsNavVisible(!isNavVisible);
//   };

//   return (
//     <header className="relative z-20">
//       <div className="flex  gap-64 px-4  py-1 bg-white">
//         <div className="flex relative justify-center items-center">
//           <NavLink to="/">
//             <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg" alt="logo web site" className="w-24 md:ml-10 mt-3" />
//           </NavLink>
//           <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325620/icons/line_dqk9lw.svg" alt="icon line" className="h-20 lg:ml-52 lg:mt-10 absolute w-2" />
//         </div>

//         <MenuButton onClick={toggleNavVisibility} />

//         <div className="hidden sm:flex items-center gap-6">
//           <SearchBar />
//           <AdditionalLinks />
//         </div>
//       </div>

//       {isNavVisible && (
//         <div className="absolute top-15 w-full bg-white sm:hidden">
//           <Navbar />
//         </div>
//       )}
//       <div className="hidden sm:flex">
//         <Navbar />
//       </div>

//     </header>
//   );
// }


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, Search, Mail, User, Heart, ShoppingCart } from "lucide-react";

// const menuItems = [
//   { title: "Accueil", to: "/" },
//   {
//     title: "Boutique en ligne",
//     to: "/marketplace",
//     dropdown: [
//       { title: "Boutique en ligne", to: "/marketplace" },
//       { title: "Pack alimentaire", to: "/offerForm" },
//     ],
//   },
//   {
//     title: "Marchés",
//     dropdown: [
//       { title: "Tableau de bords", to: "/calendar" },
//       { title: "Prix du Maïs", to: "" },
//       { title: "Prix du Manioc", to: "" },
//       { title: "Prix du Sorgho", to: "" },
//       { title: "Prix du Niebe", to: "" },
//     ],
//   },
//   {
//     title: "Portail",
//     to: "#",
//     dropdown: [
//       { title: "Trouver un Angins agricole", to: "" },
//       { title: "Formation et éducation", to: "" },
//       { title: "Formation et éducation", to: "" },
//       { title: "Recruter un Ir Agronome", to: "" },
//     ],
//   },
//   {
//     title: "À propos de Nous",
//     to: "/AboutUs",
//     dropdown: [
//       { title: "Notre Équipe", to: "/team" },
//       { title: "Nos Partenaires", to: "" },
//       { title: "Nos Valeurs", to: "ProductDetailPage" },
//       { title: "Notre Vision", to: "" },
//     ],
//   },
// ];

// function MenuItem({ item, isMobile = false }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const hasDropdown = Array.isArray(item.dropdown);

//   const handleMouseEnter = () => {
//     if (!isMobile) setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     if (!isMobile) setIsOpen(false);
//   };

//   const handleClick = () => {
//     if (isMobile) setIsOpen(!isOpen);
//   };

//   return (
//     <li 
//       className={`${isMobile ? 'w-full' : ''}`}
//       onMouseEnter={handleMouseEnter} 
//       onMouseLeave={handleMouseLeave}
//     >
//       {hasDropdown ? (
//         <div className={`relative ${isMobile ? 'w-full' : ''}`}>
//           <button 
//             onClick={handleClick}
//             className={`flex items-center gap-2 hover:text-green-700 ${
//               isMobile ? 'w-full py-2 px-4 text-left' : ''
//             }`}
//           >
//             {item.title} {hasDropdown && "⌝"}
//           </button>
//           {isOpen && (
//             <ul className={`
//               shadow-lg rounded bg-white z-50
//               ${isMobile ? 'relative w-full pl-4' : 'absolute top-full left-0 min-w-[200px]'}
//             `}>
//               {item.dropdown.map((dropdownItem, index) => (
//                 <li
//                   key={index}
//                   className="hover:bg-green-700 hover:text-white"
//                 >
//                   <NavLink 
//                     to={dropdownItem.to}
//                     className="block w-full p-2"
//                   >
//                     {dropdownItem.title}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ) : (
//         <NavLink 
//           to={item.to}
//           className={`hover:text-green-700 ${
//             isMobile ? 'block w-full py-2 px-4' : ''
//           }`}
//         >
//           {item.title}
//         </NavLink>
//       )}
//     </li>
//   );
// }

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section supérieure */}
//         <div className="flex flex-wrap items-center justify-between py-4 gap-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img 
//               src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg" 
//               alt="Agroconnect" 
//               className="h-12 md:h-16"
//             />
//           </div>

//           {/* Bouton hamburger mobile */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden ml-auto"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* Barre de recherche */}
//           <div className="w-full lg:flex-1 lg:max-w-xl lg:w-auto order-3 lg:order-none">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Rechercher produit ici"
//                 className="w-full pl-4 pr-12 py-2 bg-gray-100 rounded-md focus:outline-none"
//               />
//               <button className="absolute right-0 top-0 h-full px-4 bg-green-700 text-white rounded-r-md">
//                 <Search size={18} />
//               </button>
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="hidden lg:flex items-center gap-6">
//             <NavLink to="/contact" className="flex items-center gap-2 hover:text-green-700">
//               <Mail size={18} />
//               <span className="text-sm">Nous contacter</span>
//             </NavLink>
//             <NavLink to="/compte" className="flex items-center gap-2 hover:text-green-700">
//               <User size={18} />
//               <span className="text-sm">Créer un compte</span>
//             </NavLink>
//             <NavLink to="/favoris" className="hover:text-green-700">
//               <Heart size={18} />
//             </NavLink>
//             <NavLink to="/panier" className="hover:text-green-700">
//               <ShoppingCart size={18} />
//             </NavLink>
//           </div>
//         </div>

//         {/* Navigation principale */}
//         <nav className={`
//           border-t
//           ${isMenuOpen ? 'block' : 'hidden lg:block'}
//         `}>
//           <ul className={`
//             py-4 
//             ${isMenuOpen 
//               ? 'flex flex-col space-y-2' 
//               : 'flex flex-wrap justify-center gap-12'}
//           `}>
//             {menuItems.map((item, index) => (
//               <MenuItem 
//                 key={index} 
//                 item={item} 
//                 isMobile={isMenuOpen}
//               />
//             ))}
//           </ul>

//           {/* Actions mobiles */}
//           {isMenuOpen && (
//             <div className="lg:hidden border-t py-4 space-y-4">
//               <NavLink to="/contact" className="flex items-center gap-2 px-4 hover:text-green-700">
//                 <Mail size={18} />
//                 <span>Nous contacter</span>
//               </NavLink>
//               <NavLink to="/compte" className="flex items-center gap-2 px-4 hover:text-green-700">
//                 <User size={18} />
//                 <span>Créer un compte</span>
//               </NavLink>
//               <div className="flex gap-6 px-4">
//                 <NavLink to="/favoris" className="hover:text-green-700">
//                   <Heart size={18} />
//                 </NavLink>
//                 <NavLink to="/panier" className="hover:text-green-700">
//                   <ShoppingCart size={18} />
//                 </NavLink>
//               </div>
//             </div>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// }


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