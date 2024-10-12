

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css'; // Assurez-vous d'importer les styles Splide

import banner1 from '../../assets/proposedValue/banner_1_oj5qmv.jpg';
import banner2 from '../../assets/proposedValue/banner_2_gyfhtq.jpg';


export default function Carrousel() {
  const slidesData = [
    {
      imgUrl: banner1,
    },
    {
      imgUrl: banner2,
    }
  ];

  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        interval: 4500,
        arrows: false,
        breakpoints: {
          640: {
            perPage: 1,
            height: '10rem',
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
            height: '25rem'
          }
        },
        width: '100%',
      }}
    >
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative  lg:mt-[5rem] w-full md:w-full lg:w-full xl:w-5/6 mx-auto  flex" style={{ maxWidth: '1800px' }}>
            <img src={slide.imgUrl} alt={`Image ${index + 1}`} className="rounded-lg w-full object-cover"/>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
