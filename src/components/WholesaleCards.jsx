// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import HomeCard from "./HomeCard";

// const splideOptions = {
//   perPage: 3,
//   rewind: true,
//   gap: "4px",
//   pagination: false,
//   breakpoints: {
//     640: {
//       perPage: 1,
//     },
//     768: {
//       perPage: 2,
//     },
//     1024: {
//       perPage: 3,
//     },
//     1280: {
//       perPage: 4,
//     },
//   },
// };

// const HeaderWithDescription = ({ title, description }) => (
//   <div className="flex flex-col mt-12 w-full bg-white rounded-none">
//     <div className="w-[9rem] ml-[1.7rem] text-center font-bold">{title}</div>
//     <div className="mt-2.5 w-[12rem] text-center font-thin">{description}</div>
//   </div>
// );

// const ButtonWithImage = ({ text, imageUrl }) => (
//   <div className="flex gap-2.5 justify-center px-20 mt-20 text-white whitespace-nowrap rounded-lg border border-solid bg-neutral-600 border-neutral-600 leading-[150%]">
//     <div className="grow self-start">{text}</div>
//     <img
//       loading="lazy"
//       src={imageUrl}
//       className="shrink-0 aspect-[1.35] w-[19px]"
//     />
//   </div>
// );

// const WholesaleCards = ({ data }) => {
//   return (
//     <div className="w-full mb-8">
//       <div className="flex flex-wrap">
//         <div className="flex max-w-[19rem] flex-col flex-1">
//           <h2 className="text-green text-2xl font-bold mb-0">En gros</h2>
//           <HeaderWithDescription
//             title="Nos produits en gros"
//             description="Vous pouvez soutenir des projets de réhabilitation de la biodiversité !"
//           />
//           <ButtonWithImage
//             text="Découvrir"
//             imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5cdbd4525390a2f2c4c91942253f037f689d3c222af46a46414cae7dfab5d6e6?apiKey=b3166955caf34e38aadb74597369e097&"
//           />
//         </div>

//         <div className="flex-1">
//           <Splide options={splideOptions}>
//             {data.map((card, index) => (
//               <SplideSlide key={index}>
//                 <HomeCard
//                   discount={card.discount}
//                   title={card.title}
//                   price={card.price}
//                   oldPrice={card.oldPrice}
//                   image={card.image}
          
//                 />
//               </SplideSlide>
//             ))}
//           </Splide>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WholesaleCards;


import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HomeCard from "./HomeCard";

const splideOptions = {
  perPage: 3,
  rewind: true,
  gap: "4px",
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
};

const HeaderWithDescription = ({ title, description }) => (
  <div className="flex flex-col mt-12 w-full bg-white rounded-none">
    <div className="w-[9rem] ml-[1.7rem] text-center font-bold">{title}</div>
    <div className="mt-2.5 w-[12rem] text-center font-thin">{description}</div>
  </div>
);

const ButtonWithImage = ({ text, imageUrl }) => (
  <div className="flex gap-2.5 justify-center px-20 mt-20 text-white whitespace-nowrap rounded-lg border border-solid bg-neutral-600 border-neutral-600 leading-[150%]">
    <div className="grow self-start">{text}</div>
    <img
      loading="lazy"
      src={imageUrl}
      className="shrink-0 aspect-[1.35] w-[19px]"
    />
  </div>
);

const WholesaleCards = ({ data }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:max-w-[19rem] md:mr-4">
          <h2 className="text-green text-2xl font-bold mb-0">En gros</h2>
          <HeaderWithDescription
            title="Nos produits en gros"
            description="Vous pouvez soutenir des projets de réhabilitation de la biodiversité !"
          />
          <ButtonWithImage
            text="Découvrir"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5cdbd4525390a2f2c4c91942253f037f689d3c222af46a46414cae7dfab5d6e6?apiKey=b3166955caf34e38aadb74597369e097&"
          />
        </div>

        <div className="flex-1">
          <Splide options={splideOptions}>
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
      </div>
    </div>
  );
};

export default WholesaleCards;
