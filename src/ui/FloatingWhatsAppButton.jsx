import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import de l'icône WhatsApp
import './FloatingWhatsAppButton.css'; // Import du fichier CSS pour le style

export default function FloatingWhatsAppButton() {
  // Lire le numéro de téléphone depuis l'environnement avec Vite
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`} // Utiliser la variable d'environnement dans l'URL
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
