import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; // Importer l'icône d'étoile

// Données de témoignages avec une note sur 5 et des noms congolais
const testimonies = [
  {
    name: 'Jean-Pierre Mbala',
    role: 'Agriculteur',
    message:
      'Grâce à Agroconnect, j’ai pu trouver des clients en dehors du Congo \n et cela a multiplié mes opportunités commerciales.',
    image: 'https://res.cloudinary.com/dqrs3xyic/image/upload/v1731851037/close-up-portrait-young-man_uohhdf.jpg',
    rating: 5,
  },
  {
    name: 'Emmanuelle Nsimba',
    role: 'Producteur de légumes',
    message:
      'Agroconnect m’a aidée à gérer mes stocks et à trouver de nouveaux clients à Kinshasa,\n un véritable levier pour mon entreprise.',
    image: 'https://res.cloudinary.com/dqrs3xyic/image/upload/v1731850678/close-up-upset-american-black-person_s88bvx.jpg',
    rating: 4,
  },
  {
    name: 'Martin Tshimbundu',
    role: 'Fournisseur d’engrais',
    message:
      'Cette plateforme m’a permis de connecter mes produits\n avec une large base de clients et de partenaires.',
    image: 'https://res.cloudinary.com/dqrs3xyic/image/upload/v1731850661/portrait-man-nature_d4io8s.jpg',
    rating: 3,
  },
  {
    name: 'Amina Nguema',
    role: 'Entrepreneure en agriculture',
    message:
      'Agroconnect facilite l’accès à de nouveaux marchés \n J’ai pu diversifier mes sources de revenus grâce à leurs solutions.',
    image: 'https://res.cloudinary.com/dqrs3xyic/image/upload/v1731850664/beautiful-african-woman-face-portrait-close-up_inpfkc.jpg',
    rating: 5,
  },
];

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 5000); // Change testimony every 5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  // Fonction pour afficher les étoiles
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`${i <= rating ? 'text-green-500' : 'text-gray-400'}`} // Couleurs pour les étoiles
          size={20} // Taille de l'étoile
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-2xl font-bold text-center text-green mb-8">
        Ce que nos clients <br /> disent de nous
      </div>

      <div className="relative flex justify-center items-center min-h-[300px] px-4 py-10 bg-gray-100 rounded-lg shadow-lg">
        <div className="relative w-full max-w-full overflow-hidden">
          {/* Carrousel */}
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Défilement horizontal avec un témoignage visible à la fois
            }}
          >
            {testimonies.map((testimony, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex justify-center items-center p-5 md:px-16 bg-white rounded-lg shadow-md"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Image avec taille plus petite et contour vert */}
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="w-[100px] h-[100px] rounded-full border-4 border-yellow-500 mb-4"
                  />
                  <div className="text-xl font-semibold text-green-600 mb-2">{testimony.name}</div>
                  <div className="text-sm font-medium text-gray-600 mb-4">{testimony.role}</div>
                  {/* Retour à la ligne pour les témoignages */}
                  <p className="text-lg font-light text-gray-700 italic mb-4 whitespace-pre-line">
                    "{testimony.message}"
                  </p>
                  <div className="flex mb-4">{renderStars(testimony.rating)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
