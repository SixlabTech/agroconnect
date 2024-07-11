

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css'; // Assurez-vous d'importer les styles Splide

export default function Carrousel() {
  const slidesData = [
    {
      imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1717862850/Banner%20publicite/banner_1_oj5qmv.jpg",
      // iconUrl: "",
      // text: "BIENVENUE SUR AGROCONNECT ",
      // button: "Aller au Marche",
      // sommaire: "l'agriculture de demain",
      // description: "lorem ipsum"
    },
    // {
    //   imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1717862840/Banner%20publicite/banner_2_gyfhtq.jpg",
    // }
  ];

  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        interval: 4500,
        arrows: true,
        breakpoints: {
          640: {
            perPage: 1,
            height: '10rem'
          },
          768: {
            perPage: 1,
            height: '10rem'
          },
          1024: {
            perPage: 1,
            height: '50rem'
          },
          1280: {
            perPage: 1,
            height: '60rem'
          }
        },
        width: '100%',
      }}
    >
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative mt-5 w-full md:w-full lg:w-full xl:w-5/6 mx-auto  flex" style={{ maxWidth: '1800px' }}>
            <img src={slide.imgUrl} alt={`Image ${index + 1}`} className="rounded-lg w-full object-cover"/>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
