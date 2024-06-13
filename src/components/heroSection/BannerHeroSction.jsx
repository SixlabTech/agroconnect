import React from "react";

const items = [
  {
    title: "Service 24/  7j/7",
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
 
  const backgroundImage = {
    backgroundImage: "url('https://res.cloudinary.com/dqrs3xyic/image/upload/v1712325656/Yellow_bannier_pyoyqn.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="flex p-2 gap-2  flex-col lg:h-30 md:flex-row md:left-0 md:gap-10 justify-center "
      style={backgroundImage}
    >
      {items.map((item, index) => (
        <div key={index} className="flex  gap-4 lg:text-sm  md:text-xs  items-center">
          <img src={item.imgUrl} alt="SVG" className="w-8 h-8" />
          <div className="flex flex-col">
            <p className="font-medium">{item.title}</p>
            <p className="text-text-gray font-thin">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
