// import React from "react";
// import HomeCard from "./HomeCard";

// export default function CategorySection({ category, cards }) {
//   return (
//     <div className="text-green border mb-8">
//       <h2 className="category-title text-2xl font-bold mb-4">{category}</h2>
//       <div className="flex flex-wrap gap-4">
//         {cards.map((card, index) => (
//           <HomeCard
//             key={index}
//             discount={card.discount}
//             title={card.title}
//             price={card.price}
//             oldPrice={card.oldPrice}
//             image={card.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };



import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import the CSS for Splide
import HomeCard from "./HomeCard";

export default function Wholesale({ cards }) {
  return (
    <div className="category-section mb-8">
      <h2 className="category-title text-2xl font-bold mb-4">En gros</h2>
      <Splide
        options={{
          perPage: 4,
          gap: '1rem',
          pagination: false,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
          },
        }}
      >
        {cards.map((card, index) => (
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
}
