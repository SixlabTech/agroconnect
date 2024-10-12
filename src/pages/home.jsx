import React from "react";
// ** import components **
import Carousel from "../components/heroSection/carrousel";
import BannerHeroSction from "../components/heroSection/BannerHeroSction";
import Modal from "../components/modals/Modal";
import CardGrid from "../components/CardGrid";
import BannerFooter from "../components/Footer/BannerFooter";
import FaqsList from "../components/FaqsList";

export default function Home() {
  return (
    <div className="  b-0 m-0">
        <div className="flex justify-center  items-center">
          <Modal />
        </div>
        <Carousel />
        <BannerHeroSction />
        <div className="my-8 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 flex justify-center items-center">
            <CardGrid />
          </div>
        </div>
        <div className="mt-8">
        </div>
        <BannerFooter />
        <FaqsList/>
    </div>
  );
}
