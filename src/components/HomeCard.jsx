import { useState, useEffect } from "react";
import React from "react";

export default function HomeCard({ discount, title, price, oldPrice, image }) {
  const [showQRCode, setShowQRCode] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

  const handleQRCodeClick = () => setShowQRCode(true);
  const handleCloseQRCode = () => setShowQRCode(false);

  const handleMouseLeaveQRCode = () => {
    if (!isResponsive) setShowQRCode(false);
  };

  const handleResponsiveChange = () => setIsResponsive(window.innerWidth <= 768);

  useEffect(() => {
    handleResponsiveChange();
    window.addEventListener("resize", handleResponsiveChange);
    return () => window.removeEventListener("resize", handleResponsiveChange);
  }, []);

  const renderQRCodeButton = () => (
    <div className="relative cursor-pointer" onClick={handleQRCodeClick}>
      <img
        src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717927262/Vector_ecqsaq.jpg"
        alt="Petit QR Icon"
        className="w-6 h-6"
      />
      {!isResponsive && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-5 w-max text-center text-green text-[9px] rounded py-1 px-2">

        </div>
      )}
    </div>
  );

  return (
    <div className="relative  mt-5 mb-5 flex flex-col w-full sm:w-[270px] h-auto sm:h-[350px] gap-4 sm:gap-10 items-start p-4 sm:py-3.5 sm:pr-4 font-semibold bg-white rounded-lg shadow-[0_0.97px_2.914px_0_rgba(3,0,71,0.09)] transition-transform transform hover:scale-105">
      <div className="flex justify-between w-full -mt-1 px-4">
        <div className="rounded-full -mt-1.1  text-center text-xs p-1 text-white w-12 bg-[#F89C0E] font-thin">
          {discount}
        </div>
        {showQRCode && isResponsive ? (
          <button onClick={handleCloseQRCode} className="focus:outline-none"></button>
        ) : (
          renderQRCodeButton()
        )}
      </div>
      <div className="flex justify-center p-1 lg:-mt-10 lg:-mb-10 sm:-mt-10 sm:-mb-10 w-full">
        <img src={image} alt="logo du produit" className="  lg:w-56  lg:h-56  sm:w-40 sm:h-40" />
      </div>
      <div className="flex   flex-col   sm:flex-row  sm:gap-5 font-light text-sm w-full">

        <div className="flex flex-col items-start lg:-ml-0 sm:ml-[2rem]">
          <div className="text-[#373F50] ">{title}</div>
          <div className="flex gap-2.5 mt-3.5 items-center whitespace-nowrap">
            <div className="grow text-red leading-[175%]">{price}</div>
            <div className=" relative text-gray">
              {oldPrice}
              <span className="absolute -ml-16 mt-2.5    h-1 w-14"><hr /></span>
              </div>
          </div>
        </div>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7576e001a6fb0f62486f2adfd87e77b953fc8d4c8725974bfcd9898cbf434091?"
          className="shrink-0  lg:ml-12 self-end mt-2 sm:ml-[1.5rem] sm:mt-5 w-7 border-lime-700 border-solid aspect-[1.04]"
          alt="icon add to mark"
        />
      </div>
      {showQRCode && (
        <div
          className="absolute inset-0 -mt-0 lg:mb-[0px] mb-[0px] sm:mb-[100px] bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-100 transition-opacity"
          onClick={handleCloseQRCode}
          onMouseLeave={handleMouseLeaveQRCode}>
          <img
            src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1717927262/Vector_ecqsaq.jpg"
            alt=" Grand QR Code"
            className=" lg:w-48 lg:h-48 lg:-mt-7  sm:size-12 xs:size-12 "
          />
          <div className="text-center xs:mt-5 text-[#F89C0E] text-[9px] px-4">
            Scannez le QR code pour voir l'origine du produit
          </div>
        </div>
      )}
    </div>
  );
}
