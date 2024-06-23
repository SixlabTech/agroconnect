import React from "react";
import HomeCard from "./HomeCard";

const TopSellingCards = ({ data }) => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-green text-2xl font-bold mb-4">Produit le plus vendus</h2>
      <div className="flex flex-wrap gap-4">
        {data.map((card, index) => (
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

export default TopSellingCards;
