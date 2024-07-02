


import React from "react";
import { NavLink } from "react-router-dom";

const FooterSection = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-xs font-semibold text-white uppercase">{title}</h2>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <NavLink to={link.url} className="text-white hover:underline ">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const footerLinkSections = [
    {
      title: "Découvrir",
      links: [
        { url: "#", text: "Nos produits" },
        { url: "#", text: "Services" },
        { url: "#", text: "Témoignages" },
        { url: "#", text: "Actualités" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { url: "#", text: "À propos de nous" },
        { url: "#", text: "Contactez-nous" },
        { url: "#", text: "Parrainez et gagnez" },
        { url: "#", text: "Carrières" },
      ],
    },
    {
      title: "Politique",
      links: [
        { url: "#", text: "Politique de confidentialité" },
        { url: "#", text: "Politique de retour" },
        { url: "#", text: "Terms & Privacy Policy" },
      ],
    },
  ];

  return (
    <footer className="bg-green border relative">
      <img
        src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325531/papers_yhwywj.png"
        alt=""
        className=" absolute  z-20 md:-mt-20 md:w-full sm:mt-5"
      />
      <div className="mx-auto lg:mt-32  w-full max-w-screen-xl p-4 py-6 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1712706483/icons/Group_34_pa0tqi.png"
              alt="logo footer"
            />
          </div>
          <div className="grid font-thin  xl:gap-36 grid-cols-2 md:flex md:space-x-7">
            {footerLinkSections.map((section, index) => (
              <FooterSection key={index} title={section.title} links={section.links} />
            ))}
          </div>
        </div>
        <hr className="my-6 text-gray  sm:mx-auto lg:my-8" />
        <div className="md:w-[23%] text-white md:ml-[45%] sm:flex sm:items-center sm:ml-[40%] sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024 AgroConnect by sixlabs  All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
