import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

// Composant pour le bouton de menu mobile
function MenuButton({ onClick }) {
  return (
    <button className="sm:hidden bg-green text-white  rounded-full p-2" onClick={onClick}>
      <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712757559/icons/menucat_arixfc.svg" alt="icon menu" className="size-3" />
    </button>
  );
}

// Composant pour la barre de recherche
function SearchBar() {
  return (
    <div className="relative ml-28 flex items-center">
      <input
        className="border w-96 rounded-full px-4 py-2 focus:outline-none h-9"
        type="text"
        placeholder="Rechercher produit ici..."
      />
      <button className="bg-green rounded-full text-white h-8 absolute ml-[87%] w-[12%]">
        •••
      </button>
    </div>
  );
}

// Composant pour le menu déroulant du lien "Créer un compte"
function DropdownMenu({ onClose }) {
  return (
    <div className="absolute bg-white  ml-6 w-48 h-52 mt-2  rounded-lg shadow-lg" onMouseLeave={onClose}>
      <NavLink to="#" className="block text-center whitespace-nowrap px-4 py-2  hover:text-white hover:bg-green">
        Je suis un vendeur
      </NavLink>
      <NavLink to="/Login" className="block  text-center px-4 py-2  hover:text-white  hover:bg-green">
        Je suis un acheteur
      </NavLink>
<hr />
      <div className="mt-2 text-center">
        <h2 className="font-bold mb-3">Connecter-vous</h2>
    
        <NavLink to="/login" className="border  text-sm font-thin rounded-full text-white bg-green p-2 hover:bg-white  hover:text-green">Me connecter</NavLink>
      </div>

      <div className="text-center mt-4 h-10  w-full">
        <h4 className="">Vous êtes nouveau client ?</h4>
        <NavLink to="/signup" className="font-thin  mt-10 underline font-xs  text-red rounded p-2">Créer un compte</NavLink>
      </div>
    </div>
  );
}

// Composant pour les liens complémentaires
function AdditionalLinks() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (

    <ul className="flex ml-24 text-sm gap-6">

      <NavLink to="/" className="flex items-center gap-2">
        <p>Nous contacter</p>
        <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713308189/icons/Vector_vsb6mc.svg"
          alt="icon contact" className="w-5 h-5"/>
      </NavLink>


      <li className="relative">
        <button onClick={toggleDropdown} className="flex items-center gap-2">
          <p>Connexion</p>
          <img
            src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712624798/icons/particulier_nfrgz2.svg"
            alt="icon login"
            className="w-5 h-5"
          />
        </button>
        {isDropdownOpen && <DropdownMenu onClose={closeDropdown} />}
      </li>
    </ul>
  );
}

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="relative z-20">
      <div className="flex  gap-64 px-4  py-1 bg-white">
        <div className="flex relative justify-center items-center">
          <NavLink to="/">
            <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325532/logo_cvzsvy.svg" alt="logo" className="w-24 md:ml-10 mt-3" />
          </NavLink>
          <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325620/icons/line_dqk9lw.svg" alt="icon line" className="h-20 lg:ml-52 lg:mt-10 absolute w-2" />
        </div>

        <MenuButton onClick={toggleNavVisibility} />

        <div className="hidden sm:flex items-center gap-6">
          <SearchBar />
          <AdditionalLinks />
        </div>
      </div>

      {isNavVisible && (
        <div className="absolute top-15 w-full bg-white sm:hidden">
          <Navbar />
        </div>
      )}
      <div className="hidden sm:flex">
        <Navbar />
      </div>

    </header>
  );
}
