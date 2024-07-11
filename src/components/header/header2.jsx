// import React, { useState } from "react";
// import { FaBars, FaTimes, FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// // Composant pour les sous-menus
// const DropdownMenu = ({ submenus, isVisible }) => (
//   isVisible && (
//     <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 z-20">
//       {submenus.map((submenu, index) => (
//         <Link key={index} to={submenu.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//           {submenu.label}
//         </Link>
//       ))}
//     </div>
//   )
// );

// // Composant pour les liens de navigation avec sous-menus
// const NavLink = ({ href, label, toggleDropdown, dropdown, submenus }) => (
//   <div className="relative group">
//     <Link
//       to={href}
//       className="text-gray-700 hover:text-gray-900"
//       onClick={() => submenus && toggleDropdown(label)}
//     >
//       {label}
//     </Link>
//     {submenus && <DropdownMenu submenus={submenus} isVisible={dropdown === label} />}
//   </div>
// );

// // Données de configuration des liens de navigation
// const navLinks = [
//   { label: "Accueil", href: "/" },
//   {
//     label: "Boutique en ligne",
//     href: "/marketplace",
//     submenus: [
//       { href: "/marketplace", label: "Boutique en ligne" },
//       { href: "/", label: "Pack alimentaire" }
//     ]
//   },
//   {
//     label: "Marchés",
//     href: "#",
//     submenus: [
//       { href: "/calendar", label: "Tableau de bords" },
//       { href: "/", label: "Prix du Maïs" },
//       { href: "/", label: "Prix du Manioc" },
//       { href: "/", label: "Prix du Niebe" },
//       { href: "/", label: "Prix du Sorgho" }
//     ]
//   },
//   {
//     label: "Portail",
//     href: "#",
//     submenus: [
//       { href: "/", label: "Trouver un Angins agricole" },
//       { href: "/", label: "Formation et éducation" },
//       { href: "/", label: "Recruter un Ir Agronome" }
//     ]
//   },
//   {
//     label: "À propos de Nous",
//     href: "/AboutUs",
//     submenus: [
//       { href: "/team", label: "Notre Équipe" },
//       { href: "/", label: "Nos Partenaires" },
//       { href: "ProductDetailPage", label: "Nos Valeurs" },
//       { href: "/", label: "Notre Vision" }
//     ]
//   }
// ];

// // Composant principal de l'en-tête
// const Headers = () => {
//   const [isOpen, setIsOpen] = useState(false); // État pour le menu hamburger (ouvert/fermé)
//   const [dropdown, setDropdown] = useState(null); // État pour le sous-menu (ouvert/fermé)

//   // Fonction pour basculer l'état du sous-menu
//   const toggleDropdown = (menu) => {
//     setDropdown(dropdown === menu ? null : menu);
//   };

//   return (
//     <header className="shadow-md bg-white">
//       {/* Section supérieure */}
//       <div className="flex items-center lg:p-2">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1719474370/ITM/images_1_w0jwz6.jpg"
//             alt="Logo bilangaMarket"
//             className="w-24 md:ml-10 mt-2"
//           />
//         </div>

//         {/* Barre de recherche */}
//         <div className="relative hidden sm:block w-1/2 md:w-1/3">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-96 h-9 px-4 py-2 border rounded-full focus:outline-none"
//           />
//           <button className="absolute -ml-[54px] h-8 top-2 -mt-[5.5px] w-[50px] bg-green p-2 rounded-full text-white">
//             ...
//           </button>
//         </div>

//         {/* Liens de contact et connexion pour le web */}
//         <div className="flex p-4 ml:auto items-center space-x-4">
//           <Link to="/contact" className="hidden sm:flex text-gray gap-2 hover:text-gray items-center">
//             <img
//               src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
//               alt="Icone de contact"
//               className="w-5 h-5"
//             />
//             Nous contacter
//           </Link>

//           <Link to="/login" className="hidden sm:flex text-gray gap-2 hover:text-gray items-center">
//             <img
//               src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
//               alt="Icone de connexion"
//               className="w-5 h-5"
//             />
//             Connexion
//           </Link>

//           {/* Icône ajouter aux favoris pour mobile */}
//           <a href="/favorites" className="sm:hidden items-center">
//             <FaHeart className="text-xl" />
//           </a>
          
//           {/* Bouton du menu hamburger pour mobile */}
//           <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none sm:hidden">
//             {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//           </button>
//         </div>
//       </div>

//       {/* Section inférieure */}
//       <div className={`lg:flex items-center justify-between p-4 ${isOpen ? "block" : "hidden"} sm:block lg:block`}>
//         {/* Barre de recherche pour mobile et tablette */}
//         <div className="relative w-full mb-4 sm:hidden">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full px-4 py-2 border rounded-full focus:outline-none"
//           />
//           <button className="absolute -mt-2 w-[60px] -ml-[68.5px] top-2 bg-green p-2 rounded-3xl text-white">
//             ...
//           </button>
//         </div>

//         {/* Liens et icônes */}
//         <div className="flex flex-col lg:flex-row lg:ml-[40%] space-x-0 lg:space-x-6 space-y-2 lg:space-y-0">
//           <nav className="flex flex-col lg:flex-row text-text-gray lg:space-x-4 space-y-2 lg:justify-center lg:gap-12">
//             {navLinks.map((link, index) => (
//               <NavLink
//                 key={index}
//                 href={link.href}
//                 label={link.label}
//                 toggleDropdown={toggleDropdown}
//                 dropdown={dropdown}
//                 submenus={link.submenus}
//               />
//             ))}
//           </nav>
//         </div>
        
//         {/* Icônes de contact et connexion pour mobile */}
//         <div className="flex flex-col items-start lg:hidden mt-4 space-y-2">
//           <Link to="/contact" className="text-gray-700 gap-2 hover:text-gray-900 flex items-center">
//             <img
//               src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
//               alt="Icone de contact"
//               className="w-5 h-5"
//             />
//             Nous contacter
//           </Link>

//           <Link to="/login" className="text-gray gap-2 hover:text-gray flex items-center">
//             <img
//               src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
//               alt="Icone de connexion"
//               className="w-5 h-5"
//             />
//             Connexion
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Headers;



import React, { useState } from "react";
import { FaBars, FaTimes, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "./Navlinks";

// Composant pour les sous-menus
const DropdownMenu = ({ submenus, isVisible }) => (
  isVisible && (
    <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 z-20">
      {submenus.map((submenu, index) => (
        <Link key={index} to={submenu.href} className="block px-4 py-2 hover:text-white hover:bg-text-green">
          {submenu.label}
        </Link>
      ))}
    </div>
  )
);

// Composant pour les liens de navigation avec sous-menus
const NavLink = ({ href, label, toggleDropdown, dropdown, submenus }) => (
  <div className="relative group">
    <Link
      to={href}
      className="text-gray-700 hover:text-gray-900"
      onClick={() => submenus && toggleDropdown(label)}
    >
      {label}
    </Link>
    {submenus && <DropdownMenu submenus={submenus} isVisible={dropdown === label} />}
  </div>
);

// Composant principal de l'en-tête
const Headers = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour le menu hamburger (ouvert/fermé)
  const [dropdown, setDropdown] = useState(null); // État pour le sous-menu (ouvert/fermé)

  // Fonction pour basculer l'état du sous-menu
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header className="shadow-md">
      {/* Section supérieure */}
      <div className="flex items-center h-20 lg:p-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo.svg" alt="Logo bilangaMarket" className="w-24 md:ml-10 mt-2"/>
        </div>
        {/* Barre de recherche */}
        <div className="relative hidden lg:ml-[20rem] sm:block w-1/2 md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 h-9 px-4 py-2 border rounded-full focus:outline-none"
          />
          <button className="absolute -ml-[54px] h-8 top-2 -mt-[5.5px] w-[50px] bg-green p-2 rounded-full text-white">
            ...
          </button>
        </div>

        {/* Liens de contact et connexion pour le web */}
        <div className="flex p-4 ml:auto items-center space-x-4">
        
        <div className="lg:ml-[10rem] lg:flex lg:space-x-6 lg:items-start">
          <Link to="/contact" className="hidden sm:flex text-gray gap-2 hover:text-gray items-center">
            <img
              src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
              alt="Icone de contact"
              className="w-5 h-5"
            />
            Nous contacter
          </Link>

          <Link to="/login" className="hidden sm:flex text-gray gap-2 hover:text-gray items-center">
            <img
              src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
              alt="Icone de connexion"
              className="w-5 h-5"
            />
            Connexion
          </Link>
          </div>

          {/* Icône ajouter aux favoris pour mobile */}
          <a href="/favorites" className="sm:hidden items-center">
            <FaHeart className="text-xl" />
          </a>
          
          {/* Bouton du menu hamburger pour mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none sm:hidden">
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>











      {/* Section inférieure */}
      <div className={`lg:flex items-center h-12 justify-between p-4 ${isOpen ? "block" : "hidden"} sm:block lg:block`}>

        {/* Barre de recherche pour mobile et tablette */}
        {/* <div className="relative w-full  mb-4 sm:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-full focus:outline-none"
          />
          <button className="absolute -mt-2 w-[60px] -ml-[68.5px] top-2 bg-green p-2 rounded-3xl text-white">
            ...
          </button>
        </div> */}

        {/* Liens et icônes */}
        <div className="flex h-12 flex-col lg:flex-row lg:ml-[40%] space-x-0 lg:space-x-6 space-y-2 lg:space-y-0">
          <nav className="flex flex-col lg:flex-row  text-text-gray lg:space-x-4 space-y-2 lg:justify-center lg:gap-5">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                label={link.label}
                toggleDropdown={toggleDropdown}
                dropdown={dropdown}
                submenus={link.submenus}
              />
            ))}
          </nav>
        </div>
    
        {/* Icônes de contact et connexion pour mobile */}
        <div className="flex flex-col sm:ml-[20rem] items-start lg:hidden mt-4 space-y-2">
          <Link to="/contact" className="text-gray gap-2 hover:text-gray flex items-center">
            <img
              src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
              alt="Icone de contact"
              className="w-5 h-5"/>
            Nous contacter
          </Link>

          <Link to="/login" className="text-gray gap-2 hover:text-gray flex items-center">
            <img
              src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
              alt="Icone de connexion"
              className="w-5 h-5"
            />
            Connexion
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Headers;
