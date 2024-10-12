import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const items = [
  {
    title: "Service 24/7j/7",
    description: "Accès instantané à l'assistance",
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325648/icons/call_center_mr89ns.svg",
  },
  {
    title: "Paiement 100% sécurisé",
    description: "Nous veillons à ce que votre argent soit économisé",
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325648/icons/Paiement_yz4eeo.svg",
  },
  {
    title: "Livraison Rapide",
    description: "Livraison gratuite sur toutes vos commandes",
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325647/icons/Vector_2_hjzoep.svg",
  },
  {
    title: "Produits locaux",
    description: "100% du terroir congolaise",
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325646/icons/boxe_bvawrc.svg",
  },
];

export default function BannerHeroSection() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000, // Temps en millisecondes entre chaque diapositive
  };

  return (
    <div className="flex flex-col  mt-8 md:flex-row gap-5 lg:gap-20 p-2 md:p-4 rounded-sm justify-center items-center">
      <div className="w-full md:hidden">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="flexgap-10 md:gap-4 w-full md:w-auto">
              <img src={item.imgUrl} alt="SVG" className="w-6 mb-3  items-center ml-[47%] h-[30%] md:w-7 md:h-7" />
              
              <div className="flex flex-col justify-center gap-1 items-center">
                <p className="font-medium text-xs md:text-base">{item.title}</p>
                <p className="text-text-gray font-thin text-xs md:text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden md:flex md:flex-row gap-5 lg:gap-20">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center text-center gap-2 md:gap-4 w-full md:w-auto">
            <img src={item.imgUrl} alt="SVG" className="w-6 h-6 md:w-7 md:h-7" />
            <div className="flex flex-col justify-center gap-1 items-center">
              <p className="font-medium text-xs md:text-base">{item.title}</p>
              <p className="text-text-gray font-thin text-xs md:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
