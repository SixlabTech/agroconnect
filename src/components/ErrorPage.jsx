

import React from "react";
import { useRouteError } from "react-router-dom";
import BackToHome from "./button/BackToHome";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center mt-44" id="error-page">
           <BackToHome/>
           <br />
      <h1>Oops!</h1>
      <br />
      <p>Restez à l'écoute pour le lancement anticipé de notre site web, <br /> où vous pourrez découvrir nos produits et services </p>
      <br />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>


    
    </div>
  );
}
