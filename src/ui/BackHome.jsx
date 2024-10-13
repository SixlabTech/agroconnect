import React from "react";
import { useNavigate } from "react-router-dom";

const BackHome = ({ children, className, onClick, type = "button" }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/"); // Redirige vers la page d'accueil
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={`bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      onClick={handleButtonClick}
    > Go back
      {children}
    </button>
  );
};

export default BackHome;