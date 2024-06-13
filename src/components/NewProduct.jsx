import React from "react";
import HomeCard from "./HomeCard";

export default function NewProduct({ cards }) {
  return (
    <div className="category-section mb-8">
      <h2 className="category-title text-2xl font-bold mb-4">Nouveaux produits</h2>
      <div className="flex flex-wrap gap-4">
        {cards.map((card, index) => (
          <HomeCard
            key={index}
            discount={card.discount}
            title={card.title}
            price={card.price}
            oldPrice={card.oldPrice}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

