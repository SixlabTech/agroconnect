import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [hasSeenWelcomeModal, setHasSeenWelcomeModal] = useState(() => {
    // Vérifie si le modal a déjà été vu dans le localStorage
    return localStorage.getItem('hasSeenWelcomeModal') === 'true';
  });

  // Fonction pour marquer le modal comme vu
  const markModalAsSeen = () => {
    setHasSeenWelcomeModal(true);
    localStorage.setItem('hasSeenWelcomeModal', 'true');
  };

  return (
    <ModalContext.Provider value={{ hasSeenWelcomeModal, markModalAsSeen }}>
      {children}
    </ModalContext.Provider>
  );
}

// Hook pour utiliser le contexte
export function useModal() {
  return useContext(ModalContext);
}
