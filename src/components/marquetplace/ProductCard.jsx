import React from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";

// Composant réutilisable pour afficher un bouton avec une couleur en fonction du stock
const StockButton = ({ stock }) => {
  const buttonColor = stock ? "bg-green" : "bg-red";
  const buttonText = stock ? "En stock" : "Épuisé";
  return (
    <button className={`p-2 rounded card__color ${buttonColor}`}>
      {buttonText}
    </button>
  );
};

// Composant réutilisable pour afficher une icône avec du texte
const IconWithText = ({ text, iconSrc }) => (
  <div className="flex whitespace-nowrap  items-center gap-2 p-1">
    {text}
    <img src={iconSrc} alt="icon" className="size-6 " />
  </div>
);

const ProductCard = ({ product }) => {
  const { name, image, stock, quantity, price, entity } = product;

  return (
    <div className="p-3  shadow rounded-md overflow-hidden border-gray hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative">
      <Link to="/ProductDetailPage" className="hover:opacity-75">
        <img src={image} alt="Product" className="w-full  h-44" />
      </Link>

      <div className="mt-2">
        <div className="flex gap-4 items-center justify-center">
          <h1 className="text-1xl font-bold text-center mb-2">{name}</h1>
          <StockButton stock={stock} />
        </div>

        <div className="flex font-thin ml-10  rounded justity-center  items-center mb-5 fontsize  mt-3 gap-4 ">
          <div className="color_start">★★★★</div>
          <div>
            Total dispo : {quantity.amount} {quantity.unit}
          </div>
          <p>
            {price.amount} {price.currency} {price.unit}
          </p>
        </div>

        <div className="justify-center items-center flex gap-2 "></div>

        <hr className="bg-gray mt-2 mb-3" />

        <div>
          <div className="flex items-center gap-3 text-xs ">
            <IconWithText text={entity.name} iconSrc={entity.icon} />
            <div className="flex items-center gap-2">
              <button className="whitespace-nowrap">Partager le lien :</button>
              <Link
                to="https://www.your-domain.com/your-page.html"
                className=""
              >
                <img
                  src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317745/icons/facebook_m5l0xb.svg"
                  alt="icon facebook"
                  className="size-5 hover:bg-gray p-1 rounded-full"
                />
              </Link>
              <Link to="https://x.com/SpaceX/status/1732824684683784516?s=20">
                <img
                  src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317743/icons/twitter_xswuj1.svg"
                  alt="icon x"
                  className="size-5 hover:bg-gray p-1 rounded-full"
                />
              </Link>
              <Link to="whatsapp://send?text=Message%20à%20partager%20https://votresite.com">
                <img
                  src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713317743/icons/whatsapp-_uqvjf9.svg"
                  alt="icon telegram"
                  className="size-5 hover:bg-gray p-1 rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex mt-3 items-center gap-3">
          <button className="flex gap-3 font-thin border text-white rounded-lg bg-bg-gold p-2 items-center ">
            Acheter maintenent
            <FaCartArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
