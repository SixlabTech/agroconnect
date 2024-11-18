import React, { createContext, useState, useEffect, useContext } from 'react';

// Crée le contexte
export const DisplayContext = createContext();

// Fournisseur du contexte
export function DisplayProvider({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Applique initialement la taille de la fenêtre

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DisplayContext.Provider value={{ isMobile }}>
      {children}
    </DisplayContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte
export function useDisplay() {
  return useContext(DisplayContext);
}
