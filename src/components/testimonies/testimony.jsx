import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; // Importer l'icône d'étoile

// Données de témoignages avec une note sur 5 et des noms congolais
const testimonies = [
  {
    name: 'Jean-Pierre Mbala',
    role: 'Agriculteur',
    message:
      'Grâce à Agroconnect, j’ai pu trouver des clients en dehors du Congo \n et cela a multiplié mes opportunités commerciales.',
    image: 'https://res.cloudinary.com/dqrs3xyic/image/upload/v1731851037/close-up-portrait-young-man_uohhdf.jpg', // Remplacez par le lien réel de l'image
    rating: 5, // Note sur 5 étoiles
  },
  {
    name: 'Emmanuelle Nsimba',
    role: 'Productrice de légumes',
    message:
      'Agroconnect m’a aidée à gérer mes stocks et à trouver de nouveaux clients à Kinshasa,\n un véritable levier pour mon entreprise.',
    image: 'https://res.cloudinary.com/dqrs3xyic/image/upload/v1731850678/close-up-upset-american-black-person_s88bvx.jpg', // Remplacez par le lien réel de l'image
    rating: 4, // Note sur 5 étoiles
  },
  {
    name: 'Martin Tshimbundu',
    role: 'Fournisseur d’engrais',
    message:
      'Cette plateforme m’a permis de connecter mes produits\n avec une large base de clients et de partenaires.',
    image: 'https://res.cloudinary.com/dqrs3xyic/image/upload/v1731850661/portrait-man-nature_d4io8s.jpg', // Remplacez par le lien réel de l'image
    rating: 3, // Note sur 5 étoiles
  },
  {
    name: 'Amina Nguema',
    role: 'Entrepreneure en agriculture',
    message:
      'Agroconnect facilite l’accès à de nouveaux marchés J’ai pu diversifier mes sources de revenus grâce à leurs solutions.',
    image: 'https://res.cloudinary.com/dqrs3xyic/image/upload/v1731850664/beautiful-african-woman-face-portrait-close-up_inpfkc.jpg', // Remplacez par le lien réel de l'image
    rating: 5, // Note sur 5 étoiles
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
          className={`${i <= rating ? 'text-green' : 'text-gray'
            }`} // Utilisation de text-green-500 pour les étoiles pleines
          size={20} // Taille de l'étoile
        />
      );
    }
    return stars;
  };

  return (

    <div>

      <div className="mt-12 text-3xl   font-bold leading-8 text-center text-green max-md:max-w-full">
        Ce que nos clients disent de nous
      </div>

      {/* <p className="text-center text-lg font-light text-neutral-600">
          Ils nous accompagnent dans notre mission <br /> de réinventer l'agriculture en Afrique
        </p> */}

      <div className="relative flex justify-center items-center min-h-[300px] px-4 py-10 bg-gray-100">

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
                className="flex-shrink-0 w-full flex justify-center items-center p-5 md:px-16 bg-white"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Image avec taille plus petite et contour vert */}
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="w-[100px] h-[100px] rounded-full border-4 border-yellow-btn mb-4" // Taille réduite et contour vert
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
