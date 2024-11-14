// HomeWithModal.jsx

import React, { useEffect } from 'react';
import Home from '../pages/home'; // Assure-toi que c'est le bon chemin
import WelcomeModal from '../components/modals/WelcomeModal'; // Assure-toi que c'est le bon chemin
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

const HomeWithModal = () => {
  const { hasSeenWelcomeModal, markModalAsSeen } = useModal();
  const navigate = useNavigate();

  // Afficher le modal si c'est la première visite
  useEffect(() => {
    if (!hasSeenWelcomeModal) {
      setTimeout(() => {
        document.getElementById('welcome-modal').style.display = 'block';
      }, 500); // léger délai pour s'assurer du rendu initial
    }
  }, [hasSeenWelcomeModal]);

  // Gérer la fermeture du modal et redirection
  const handleServiceSelect = (path) => {
    markModalAsSeen();
    navigate('/'); // Redirection vers la page d'accueil pour l'instant
  };

  return (
    <>
      {!hasSeenWelcomeModal && (
        <div id="welcome-modal">
          <WelcomeModal onClose={handleServiceSelect} />
        </div>
      )}
      <Home />
    </>
  );
};

export default HomeWithModal;
