
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
  const [selectedMessage, setSelectedMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Gestion de l'apparition au scroll
  useEffect(() => {
    const handleScroll = () => {
      // Apparaît après 100px de scroll
      if (window.scrollY > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const messages = {
    message1: "Bonjour, j'aimerais en savoir plus sur AgroConnect et ses services.",
    message2: "Salut, je suis intéressé par vos produits. Pouvez-vous m'en dire plus ?",
    message3: "Je souhaiterais discuter d'une collaboration avec AgroConnect.",
    message4: "Bonjour, je cherche des informations sur vos offres et services.",
  };

  const handleButtonClick = () => {
    if (selectedMessage) {
      window.open(
        `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(selectedMessage)}`,
        '_blank'
      );
      setIsResetting(true);
      setTimeout(() => {
        setSelectedMessage('');
        setIsMenuOpen(false);
        setIsResetting(false);
      }, 300);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      {/* Menu des messages */}
      {isMenuOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl w-72 mb-4 overflow-hidden border border-gray-200 
          animate-slideIn">
          <ul className="py-1">
            {Object.values(messages).map((message, index) => (
              <li
                key={index}
                onClick={() => handleMessageSelect(message)}
                className={`px-4 py-3 cursor-pointer text-sm transition-all duration-200
                  ${message === selectedMessage 
                    ? 'bg-[#3F6341] text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {message}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Bouton WhatsApp circulaire */}
      <button
        onClick={handleButtonClick}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg 
          transition-all duration-300 ease-in-out
          animate-float
          ${selectedMessage 
            ? 'bg-[#3F6341] hover:bg-[#2F4B31] scale-110' 
            : 'bg-[#3F6341] hover:bg-[#2F4B31]'
          }
          ${isResetting ? 'animate-reset' : ''}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3F6341]`}
      >
        <div className={`transition-transform duration-300 ${isResetting ? 'scale-0' : 'scale-100'}`}>
          {selectedMessage ? (
            <div className="relative">
              <FaPaperPlane className="text-white text-xl" />
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
          ) : (
            <FaWhatsapp className="text-white text-2xl" />
          )}
        </div>
      </button>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes reset {
          0% {
            transform: scale(1.1) rotate(0deg);
          }
          50% {
            transform: scale(0.9) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }

        .animate-reset {
          animation: reset 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsAppButton;