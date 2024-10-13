// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, Search, Mail, User, Heart, ShoppingCart } from "lucide-react";

// // Ajout des styles personnalisés pour la couleur spécifique
// const styles = {
//   hoverEffect: "hover:text-[#3f6341] transition-colors duration-200",
//   buttonHover: "hover:bg-[#3f6341] transition-all duration-200",
//   dropdownHover: "hover:bg-[#3f6341] hover:text-white transition-colors duration-200"
// };

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
//             className={`
//               flex items-center gap-2 
//               ${styles.hoverEffect}
//               ${isMobile ? 'w-full py-2 px-4 text-left' : ''}
//             `}
//           >
//             {item.title} 
//             <span className="transform transition-transform duration-200">
//               {isOpen ? '⌟' : '⌝'}
//             </span>
//           </button>
//           {isOpen && (
//             <ul className={`
//               shadow-lg rounded bg-white z-50
//               ${isMobile ? 'relative w-full pl-4' : 'absolute top-full left-0 min-w-[200px]'}
//             `}>
//               {item.dropdown.map((dropdownItem, index) => (
//                 <li
//                   key={index}
//                   className={styles.dropdownHover}
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
//           className={`
//             ${styles.hoverEffect}
//             ${isMobile ? 'block w-full py-2 px-4' : ''}
//           `}
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
//             className={`lg:hidden ml-auto p-2 rounded ${styles.buttonHover}`}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* Actions */}
//           <div className="hidden lg:flex items-center gap-6">
//             <NavLink 
//               to="/contact" 
//               className={`flex items-center gap-2 ${styles.hoverEffect}`}
//             >
//               <Mail size={18} />
//               <span className="text-sm">Nous contacter</span>
//             </NavLink>
//             <NavLink 
//               to="/compte" 
//               className={`flex items-center gap-2 ${styles.hoverEffect}`}
//             >
//               <User size={18} />
//               <span className="text-sm">Créer un compte</span>
//             </NavLink>
//             <NavLink 
//               to="/favoris" 
//               className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//             >
//               <Heart size={18} />
//             </NavLink>
//             <NavLink 
//               to="/panier" 
//               className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//             >
//               <ShoppingCart size={18} />
//             </NavLink>
//           </div>
//         </div>

//         {/* Navigation principale */}
//         <nav className={` border-border-line
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
//               <NavLink 
//                 to="/contact" 
//                 className={`flex items-center gap-2 px-4 ${styles.hoverEffect}`}
//               >
//                 <Mail size={18} />
//                 <span>Nous contacter</span>
//               </NavLink>
//               <NavLink 
//                 to="/compte" 
//                 className={`flex items-center gap-2 px-4 ${styles.hoverEffect}`}
//               >
//                 <User size={18} />
//                 <span>Créer un compte</span>
//               </NavLink>
//               <div className="flex gap-6 px-4">
//                 <NavLink 
//                   to="/favoris" 
//                   className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//                 >
//                   <Heart size={18} />
//                 </NavLink>
//                 <NavLink 
//                   to="/panier" 
//                   className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//                 >
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


// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, Mail, User, Heart, ShoppingCart } from "lucide-react";

// const styles = {
//   hoverEffect: "hover:text-[#3f6341] transition-colors duration-200",
//   buttonHover: "hover:bg-[#3f6341] transition-all duration-200",
//   dropdownHover: "hover:bg-[#3f6341] hover:text-white transition-colors duration-200"
// };

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
//             className={`
//               flex items-center gap-2 
//               ${styles.hoverEffect}
//               ${isMobile ? 'w-full py-2 px-4 text-left' : ''}
//             `}
//           >
//             {item.title} 
//             <span className="transform transition-transform duration-200">
//               {isOpen ? '⌟' : '⌝'}
//             </span>
//           </button>
//           {isOpen && (
//             <ul className={`
//               shadow-lg rounded bg-white z-50
//               ${isMobile ? 'relative w-full pl-4' : 'absolute top-full left-0 min-w-[200px]'}
//             `}>
//               {item.dropdown.map((dropdownItem, index) => (
//                 <li
//                   key={index}
//                   className={styles.dropdownHover}
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
//           className={`
//             ${styles.hoverEffect}
//             ${isMobile ? 'block w-full py-2 px-4' : ''}
//           `}
//         >
//           {item.title}
//         </NavLink>
//       )}
//     </li>
//   );
// }

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;

//       // Appliquer l'effet de défilement uniquement à la section du menu de navigation
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos]);

//   return (
//     <>
//       {/* Section supérieure fixe (contient le logo et les actions) */}
//       <div className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap items-center justify-between py-4 gap-4">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <img 
//                 src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg" 
//                 alt="Agroconnect" 
//                 className="h-12 md:h-16"
//               />
//             </div>

//             {/* Bouton hamburger mobile */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className={`lg:hidden ml-auto p-2 rounded ${styles.buttonHover}`}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>

//             {/* Actions */}
//             <div className="hidden lg:flex items-center gap-6">
//               <NavLink 
//                 to="/ContactPage" 
//                 className={`flex items-center gap-2 ${styles.hoverEffect}`}
//               >
//                 <Mail size={18} />
//                 <span className="text-sm">Nous contacter</span>
//               </NavLink>
//               <NavLink 
//                 to="/compte" 
//                 className={`flex items-center gap-2 ${styles.hoverEffect}`}
//               >
//                 <User size={18} />
//                 <span className="text-sm">Créer un compte</span>
//               </NavLink>
//               <NavLink 
//                 to="/favoris" 
//                 className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//               >
//                 <Heart size={18} />
//               </NavLink>
//               <NavLink 
//                 to="/panier" 
//                 className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//               >
//                 <ShoppingCart size={18} />
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section de navigation avec l'effet de défilement */}
//       <div 
//         className={`w-full bg-white   transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`} 
//         style={{ position: 'fixed', top: '80px', left: 0, right: 0, zIndex: 40 }}
//       >
//         <div className="max-w-7xl lg:mt-5 mx-auto px-4">
//           <nav className={` ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
//             <ul className={`
//               py-4 
//               ${isMenuOpen 
//                 ? 'flex flex-col space-y-2' 
//                 : 'flex flex-wrap justify-center gap-12'}
//             `}>
//               {menuItems.map((item, index) => (
//                 <MenuItem 
//                   key={index} 
//                   item={item} 
//                   isMobile={isMenuOpen}
//                 />
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, Mail, User, Heart, ShoppingCart } from "lucide-react";

// const styles = {
//   hoverEffect: "hover:text-[#3f6341] transition-colors duration-200",
//   buttonHover: "hover:bg-[#3f6341] transition-all duration-200",
//   dropdownHover: "hover:bg-[#3f6341] hover:text-white transition-colors duration-200"
// };

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
//       { title: "se connecter", to: "" },
//     ],
//   },
  
// ];

// function MenuItem({ item, isMobile = false, onMouseLeave }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const hasDropdown = Array.isArray(item.dropdown);

//   const handleMouseEnter = () => {
//     if (!isMobile) setIsOpen(true);
//   };

//   const handleMouseLeaveInternal = () => {
//     if (!isMobile) setIsOpen(false);
//     if (isMobile && onMouseLeave) {
//       onMouseLeave(); // Appel de la fonction pour fermer le menu mobile
//     }
//   };

//   const handleClick = () => {
//     if (isMobile) setIsOpen(!isOpen);
//   };

//   return (
//     <li
//       className={`${isMobile ? 'w-full' : ''}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeaveInternal}
//     >
//       {hasDropdown ? (
//         <div className={`relative ${isMobile ? 'w-full' : ''}`}>
//           <button
//             onClick={handleClick}
//             className={`
//               flex items-center gap-2 
//               ${styles.hoverEffect}
//               ${isMobile ? 'w-full py-2 px-4 text-left' : ''}`}
//           >
//             {item.title}
//             <span className="transform transition-transform duration-200">
//               {isOpen ? '⌟' : '⌝'}
//             </span>
//           </button>
//           {isOpen && (
//             <ul
//               className={`
//               shadow-lg rounded bg-white z-50
//               ${isMobile ? 'relative w-full pl-4' : 'absolute top-full left-0 min-w-[200px]'}`}
//             >
//               {item.dropdown.map((dropdownItem, index) => (
//                 <li
//                   key={index}
//                   className={styles.dropdownHover}
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
//           className={`
//             ${styles.hoverEffect}
//             ${isMobile ? 'block w-full py-2 px-4' : ''}`}
//         >
//           {item.title}
//         </NavLink>
//       )}
//     </li>
//   );
// }

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos]);

//   // Fonction pour fermer le menu mobile lorsque la souris quitte
//   const closeMobileMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       {/* Section supérieure fixe (contient le logo et les actions) */}
//       <div className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap items-center justify-between py-4 gap-4">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <img
//                 src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg"
//                 alt="Agroconnect"
//                 className="h-12 md:h-16"
//               />
//             </div>

//             {/* Conteneur flex pour le menu mobile et les icônes */}
//             <div className="flex items-center gap-4 lg:hidden ml-auto">
//               {/* Bouton hamburger mobile */}
             

//               {/* Icônes mobile alignées avec le bouton menu */}
//               <NavLink
//                 to="/favoris"
//                 className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//               >
//                 <Heart size={18} />
//               </NavLink>
//               <NavLink
//                 to="/panier"
//                 className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//               >
//                 <ShoppingCart size={18} />
//               </NavLink>
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className={`p-2 rounded ${styles.buttonHover}`}
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>

//             {/* Actions visibles uniquement en grand écran */}
//             <div className="hidden lg:flex items-center gap-6">
//               <NavLink
//                 to="/ContactPage"
//                 className={`flex items-center gap-2 ${styles.hoverEffect}`}
//               >
//                 <Mail size={18} />
//                 <span className="text-sm">Nous contacter</span>
//               </NavLink>
//               <NavLink
//                 to="/compte"
//                 className={`flex items-center gap-2 ${styles.hoverEffect}`}
//               >
//                 <User size={18} />
//                 <span className="text-sm">Créer un compte</span>
//               </NavLink>
//               <NavLink
//                 to="/favoris"
//                 className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//               >
//                 <Heart size={18} />
//               </NavLink>
//               <NavLink
//                 to="/panier"
//                 className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}
//               >
//                 <ShoppingCart size={18} />
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section de navigation avec l'effet de défilement */}
//       <div
//         className={`w-full bg-white transition-transform duration-300 ${
//           visible ? 'translate-y-0' : '-translate-y-full'
//         }`}
//         style={{ position: 'fixed', top: '80px', left: 0, right: 0, zIndex: 40 }}
//       >
//         <div className="max-w-7xl lg:mt-5 mx-auto px-4">
//           <nav className={isMenuOpen ? "block" : "hidden lg:block"}>
//             <ul className="py-4 flex flex-wrap justify-center lg:gap-12">
//               {menuItems.map((item, index) => (
//                 <MenuItem key={index} item={item} isMobile={isMenuOpen} />
                
//               ))}
//                 <div>
//                 <NavLink
//                 to="/ContactPage"
//                 className={`flex items-center gap-2 ${styles.hoverEffect}`}
//               >
//                 <Mail size={18} />
//                 <span className="text-sm">Se connecter</span>
//               </NavLink>
//               <NavLink
//                 to="/compte"
//                 className={`flex items-center gap-2 ${styles.hoverEffect}`}
//               >
//                 <User size={18} />
//                 <span className="text-sm">Créer un compte</span>
//               </NavLink>
//                 </div>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, Mail, User, Heart, ShoppingCart } from "lucide-react";

// const styles = {
//   hoverEffect: "hover:text-[#3f6341] transition-colors duration-200",
//   buttonHover: "hover:bg-[#3f6341] transition-all duration-200",
//   dropdownHover: "hover:bg-[#3f6341] hover:text-white transition-colors duration-200"
// };

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


// const menuItems2 = [

//   { title: "Nous contacter", to: "/" },
// ];


// function MenuItem({ item, isMobile = false, onMouseLeave }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const hasDropdown = Array.isArray(item.dropdown);

//   const handleMouseEnter = () => {
//     if (!isMobile) setIsOpen(true);
//   };

//   const handleMouseLeaveInternal = () => {
//     if (!isMobile) setIsOpen(false);
//     if (isMobile && onMouseLeave) {
//       onMouseLeave(); // Appel de la fonction pour fermer le menu mobile
//     }
//   };

//   const handleClick = () => {
//     if (isMobile) setIsOpen(!isOpen);
//   };

//   return (
//     <li
//       className={`${isMobile ? 'w-full' : ''}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeaveInternal}
//     >
//       {hasDropdown ? (
//         <div className={`relative ${isMobile ? 'w-full' : ''}`}>
//           <button
//             onClick={handleClick}
//             className={`flex items-center gap-2 ${styles.hoverEffect} ${isMobile ? 'w-full py-2 px-4 text-left' : ''}`}
//           >
//             {item.title}
//             <span className="transform transition-transform duration-200">
//               {isOpen ? '⌟' : '⌝'}
//             </span>
//           </button>
//           {isOpen && (
//             <ul className={`shadow-lg rounded bg-white z-50 ${isMobile ? 'relative w-full pl-4' : 'absolute top-full left-0 min-w-[200px]'}`}>
//               {item.dropdown.map((dropdownItem, index) => (
//                 <li key={index} className={styles.dropdownHover}>
//                   <NavLink to={dropdownItem.to} className="block w-full p-2">
//                     {dropdownItem.title}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ) : (
//         <NavLink to={item.to} className={`${styles.hoverEffect} ${isMobile ? 'block w-full py-2 px-4' : ''}`}>
//           {item.title}
//         </NavLink>
//       )}
//     </li>
//   );
// }

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos]);

//   const closeMobileMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       {/* Section supérieure fixe (contient le logo et les actions) */}
//       <div className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap items-center justify-between py-4 gap-4">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <img
//                 src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg"
//                 alt="Agroconnect"
//                 className="h-12 md:h-16"
//               />
//             </div>

//             {/* Conteneur flex pour le menu mobile et les icônes */}
//             <div className="flex items-center gap-4 lg:hidden ml-auto">
//               {/* Icônes mobile alignées avec le bouton menu */}
//               <NavLink to="/favoris" className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}>
//                 <Heart size={18} />
//               </NavLink>
//               <NavLink to="/panier" className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}>
//                 <ShoppingCart size={18} />
//               </NavLink>
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className={`p-2 rounded ${styles.buttonHover}`}
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>

//             {/* Actions visibles uniquement en grand écran */}
//             <div className="hidden lg:flex items-center gap-6">
//               <NavLink
//                 to="/ContactPage"
//                 className={`flex items-center gap-2 ${styles.hoverEffect}`}
//               >
//                 <Mail size={18} />
//                 <span className="text-sm">Nous contacter</span>
//               </NavLink>
//               {/* Liens "Créer un compte" et "Se connecter" uniquement en PC */}
          
//               <NavLink
//                 to="/connexion"
//                 className={`flex items-center gap-2 ${styles.hoverEffect}`}
//               >
//                 <User size={18} />
//                 <span className="text-sm">Connexion</span>
//               </NavLink>
//               <NavLink to="/favoris" className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}>
//                 <Heart size={18} />
//               </NavLink>
//               <NavLink to="/panier" className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}>
//                 <ShoppingCart size={18} />
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Menu mobile */}
//       {isMenuOpen && (
//         <div className="lg:hidden top-0 left-0 w-full bg-white z-40 shadow-lg">
//           <ul className="flex flex-col items-center py-4">
//             {menuItems.map((item, index) => (
//               <MenuItem key={index} item={item} isMobile={true} onMouseLeave={closeMobileMenu} />
//             ))}
//             {/* Ajout des liens "Se connecter" et "Créer un compte" dans le menu mobile */}
            
//             <div className="mt-5">
//             <li className="w-36">
//               <NavLink to="/connexion" className="block bg-green   rounded-lg font-thin text-white w-full py-1 px-3 text-center text-black hover:text-[#3f6341]">
//                 Se connecter
//               </NavLink>
//             </li>
//             <br />
//             <li className="w-36">
//               <NavLink to="/compte" className="block font-thin bg-green text-white  rounded-lg w-full py-1 px-3 text-center text-black hover:text-[#3f6341]">
//                 Créer un compte
//               </NavLink>
//             </li>
//             </div>
//           </ul>
//         </div>
//       )}

//       {/* Navigation en PC */}
//       <div className={`w-full bg-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`} style={{ position: 'fixed', top: '80px', left: 0, right: 0, zIndex: 40 }}>
//         <div className="max-w-7xl lg:mt-5 mx-auto px-4">
//           <nav className="hidden lg:block">
//             <ul className="py-4 flex flex-wrap justify-center lg:gap-12">
//               {menuItems.map((item, index) => (
//                 <MenuItem key={index} item={item} isMobile={false} />
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Mail, User, Heart, ShoppingCart } from "lucide-react";

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


const menuItems2 = [
    { title: "Nous contacter", to: "/ContactPage" }, // Modification ici
  ];
  

function MenuItem({ item, isMobile = false, onMouseLeave }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = Array.isArray(item.dropdown);

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true);
  };

  const handleMouseLeaveInternal = () => {
    if (!isMobile) setIsOpen(false);
    if (isMobile && onMouseLeave) {
      onMouseLeave(); // Appel de la fonction pour fermer le menu mobile
    }
  };

  const handleClick = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <li
      className={`${isMobile ? 'w-full' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeaveInternal}
    >
      {hasDropdown ? (
        <div className={`relative ${isMobile ? 'w-full' : ''}`}>
          <button
            onClick={handleClick}
            className={`flex items-center gap-2 ${styles.hoverEffect} ${isMobile ? 'w-full py-2 px-4 text-left' : ''}`}
          >
            {item.title}
            <span className="transform transition-transform duration-200">
              {isOpen ? '⌟' : '⌝'}
            </span>
          </button>
          {isOpen && (
            <ul className={`shadow-lg rounded bg-white z-50 ${isMobile ? 'relative w-full pl-4' : 'absolute top-full left-0 min-w-[200px]'}`}>
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
      ) : (
        <NavLink to={item.to} className={`${styles.hoverEffect} ${isMobile ? 'block w-full py-2 px-4' : ''}`}>
          {item.title}
        </NavLink>
      )}
    </li>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Section supérieure fixe (contient le logo et les actions) */}
      <div className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center  justify-between md:py-10 lg:py-1 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg"
                alt="Agroconnect"
                className="h-12 md:h-16"
              />
            </div>

            {/* Conteneur flex pour le menu mobile et les icônes */}
            <div className="flex items-center gap-4 lg:hidden ml-auto">
              {/* Icônes mobile alignées avec le bouton menu */}
              <NavLink to="/favoris" className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}>
                <Heart size={18} />
              </NavLink>
              <NavLink to="/panier" className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}>
                <ShoppingCart size={18} />
              </NavLink>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded ${styles.buttonHover}"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Actions visibles uniquement en grand écran */}
            <div className="hidden lg:flex items-center gap-6">
              <NavLink
                to="/ContactPage"
                className={`flex items-center gap-2 ${styles.hoverEffect}`}
              >
                <Mail size={18} />
                <span className="text-sm">Nous contacter</span>
              </NavLink>
              <NavLink
                to="/connexion"
                className={`flex items-center gap-2 ${styles.hoverEffect}`}
              >
                <User size={18} />
                <span className="text-sm">Connexion</span>
              </NavLink>
              <NavLink to="/favoris" className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}>
                <Heart size={18} />
              </NavLink>
              <NavLink to="/panier" className={`${styles.hoverEffect} transform transition-transform duration-200 hover:scale-110`}>
                <ShoppingCart size={18} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white z-40 shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {/* Affichage des deux menus côte à côte en mobile */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} isMobile={true} onMouseLeave={closeMobileMenu} />
              ))}
              {menuItems2.map((item, index) => (
                <MenuItem key={index} item={item} isMobile={true} onMouseLeave={closeMobileMenu} />
              ))}
            </div>
            {/* Liens "Se connecter" et "Créer un compte" */}
            <div className="mt-5">
              <li className="w-36">
                <NavLink to="/connexion" className="block bg-green rounded-lg font-thin text-white w-full py-1 px-3 text-center text-black hover:text-[#3f6341]">
                  Se connecter
                </NavLink>
              </li>
              <br />
              <li className="w-36">
                <NavLink to="/compte" className="block font-thin bg-green text-white rounded-lg w-full py-1 px-3 text-center text-black hover:text-[#3f6341]">
                  Créer un compte
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      )}

      {/* Navigation en PC */}
      <div className={`w-full bg-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`} style={{ position: 'fixed', top: '80px', left: 0, right: 0, zIndex: 40 }}>
        <div className="max-w-7xl lg:mt-5 mx-auto px-4">
          <nav className="hidden mt-10 h-20 lg:block">
            <ul className="py-4 flex -mt-5  flex-wrap justify-center lg:gap-12">
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} isMobile={false} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
