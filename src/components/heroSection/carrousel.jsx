import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css'; // Assurez-vous d'importer les styles Splide


import banner2 from '../../assets/proposedValue/banner_2_gyfhtq.jpg';


export default function Carrousel() {
  const slidesData = [
    {
      imgUrl:"https://res.cloudinary.com/dqrs3xyic/image/upload/v1731805501/Shoppers_sss-1731596683823-1731670941890_kkbnbb.jpg",
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
        height:'70%'      }}
    >
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative lg:mt-[5rem] w-full md:w-full lg:w-full xl:w-5/6 mx-auto  flex">
            <img src={slide.imgUrl} alt={`Image ${index + 1}`} className="lg:rounded-lg  xl:rounded-lg "/>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
