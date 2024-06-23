
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HomeCard from "./HomeCard";

const NewProductsCards = ({ data }) => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-green text-2xl font-bold mb-4">Nouveaux produits</h2>
      <Splide options={{
        perPage: 4,
        arrows: true,
        autoplay: true,
        rewind: true,
        interval: 4500,
        gap: '0.2rem',
        pagination: false,
        breakpoints: {
      
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          1024: {
            perPage: 3,
          },
          1280: {
            perPage: 4,
          },
        },
      }}>
        {data.map((card, index) => (
          <SplideSlide key={index}>
            <HomeCard
              discount={card.discount}
              title={card.title}
              price={card.price}
              oldPrice={card.oldPrice}
              image={card.image}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default NewProductsCards;
