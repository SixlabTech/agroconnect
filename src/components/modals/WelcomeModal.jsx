
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Leaf, ShoppingCart, Users, BookOpen } from 'lucide-react';
import './styleWelcomeModal.css'; // Import du fichier CSS

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    console.log('Le composant est monté');
    setIsOpen(true);
  }, []);

  const services = [
    {
      title: "Agriculteurs",
      description: "Optimisez votre production",
      icon: <Leaf className="w-6 h-6" />,
      colorClass: "gradient-green",
      hoverClass: "hover-green"
    },
    {
      title: "Fournisseurs",
      description: "Élargissez votre réseau",
      icon: <Users className="w-6 h-6" />,
      colorClass: "gradient-blue",
      hoverClass: "hover-blue"
    },
    {
      title: "Acheteurs",
      description: "Trouvez les meilleurs produits",
      icon: <ShoppingCart className="w-6 h-6" />,
      colorClass: "gradient-orange",
      hoverClass: "hover-orange"
    },
    {
      title: "Experts",
      description: "Partagez votre expertise",
      icon: <BookOpen className="w-6 h-6" />,
      colorClass: "gradient-purple",
      hoverClass: "hover-purple"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="modal-container"
      >
        <div className="modal-header">
          <h2 className="text-2xl font-bold mb-2">Bienvenue sur AgroConnect</h2>
          <p className="text-green-100 text-sm">
            Choisissez votre profil pour une expérience personnalisée
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`service-button ${service.colorClass} ${service.hoverClass}`}
              onClick={() => {
                setIsOpen(false);
                // Logique de redirection
              }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-white/20">
                    {service.icon}
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-xs">{service.description}</p>
              </div>
              <div className="service-hover-overlay" />
            </motion.button>
          ))}
        </div>

        <div className="modal-footer">
          <p>Rejoignez la révolution agricole numérique de la RDC</p>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="close-button"
        >
          <span className="sr-only">Fermer</span>
          ✕
        </button>
      </motion.div>
    </div>
  );
};

export default WelcomeModal;