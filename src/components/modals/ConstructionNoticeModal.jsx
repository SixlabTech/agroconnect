/*
 * Description :
 * Ce composant affiche une fenêtre modale (popup) lorsqu'une condition spécifique est remplie :
 * - Si le modal n'a jamais été affiché ou s'il a expiré après une heure, il s'affiche automatiquement.
 * - Le statut d'affichage est enregistré dans le localStorage pour une gestion persistante.
 * - Le bouton de fermeture du modal permet de le fermer avec un léger délai.
 */

import React from "react";

import { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ConstructionNoticeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  useEffect(() => {
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      setIsOpen(true);
      localStorage.setItem("modalShown", "true");

      // Le modal expire après 1 heure
      setTimeout(() => {
        localStorage.removeItem("modalShown");
      }, 1 * 60 * 60 * 1000);
    }
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({ top: rect.top, left: rect.left });
    }
  }, []);

  const closeModal = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray bg-opacity-20 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">🚧 Attention 🚧</h2>
              <button ref={buttonRef} onClick={closeModal}>
                <AiOutlineClose className="h-6 w-6 text-gray" />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-lg text-center">
                Site web en construction
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConstructionNoticeModal;
