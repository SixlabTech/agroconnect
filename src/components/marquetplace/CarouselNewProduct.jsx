
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Carousel = ({ slides }) => {

  return (
    <div>
      <Splide
        options={{
          type: 'loop',
          perPage: 4,
          arrows: 'true',
          autoplay: true,
          height: '15rem',
          gap: '1rem',
          pagination: false,
          arrows: true,
          
        }}>
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div>
              <img src={slide.imgUrl} alt={`Slide ${index + 1}`} className=" w-64 h-44 relative" />
              <p className="absolute ml-6 z-40">Lorem ipsum, dolor sit amet .</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
  
    </div>
  );
};

const slidesData = [
  {
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1713362245/Carousel%20product/1_bqpbhi.webp",
  },
  {
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1713362243/Carousel%20product/2_twbcr6.webp",
  },
  {
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1713362240/Carousel%20product/4_vdg1my.webp",
  },
  {
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1713362241/Carousel%20product/3_e4ivc6.webp",
  },
  {
    imgUrl: "https://res.cloudinary.com/dqrs3xyic/image/upload/v1713362240/Carousel%20product/6_qly6we.webp",
  },
];

const App = () => {
  return (
    <div className="#">
        <div className="flex items-center  ">
        {/* <h1 className="font-extrabold  text-3xl mt-10 mb-10  ml-3">Nouveau Produits</h1> */}
      <button onClick={() => alert("Voir tout")} className="ml-[76%]  px-0 font-normal h-3 rounded">
        Voir tout
      </button>
        </div>

      <Carousel slides={slidesData} />
    </div>
  );
};

export default App;
