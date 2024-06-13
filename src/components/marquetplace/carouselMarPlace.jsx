
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import '@splidejs/react-splide/css';

export default function CarrouselMarketPlace() {
  const slidesData = [
    {
      imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1717862849/Banner%20publicite/3_shv0el.jpg",
      // iconUrl: "",
      // text: "",
      // title: "",
      // sommaire: "",
      // description: ""
    }
  ];

  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        interval: 5500,
        arrows: false,
      }}>
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="relative ">
            <img src={slide.imgUrl} alt={`Image ${index + 1}`} />
            <div className="absolute flex-col top-0 left-0 right-0 bottom-0 flex justify-center items-center  text-white">
            <div className=' text-justify h-56 flex flex-col justify-center -mt-28 -ml-[49%] absolute'>
            <p className=" text-xs absolute -mt-48">{slide.text}</p>
            <h2 className=" text-6xl font-bold  ">{slide.title}</h2>
            <p className=" text-6xl font-bold mt-5">{slide.sommaire}</p>
            <img src={slide.iconUrl} className='absolute -mt-[17%] ml-[52%] size-24' />
            </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

