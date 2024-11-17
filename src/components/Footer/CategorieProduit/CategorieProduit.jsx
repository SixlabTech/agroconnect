import React, { useState } from 'react';
import { FaApple, FaCarrot, FaSeedling, FaPepperHot, FaIndustry } from 'react-icons/fa';

// Données fictives pour les catégories de produits avec couleurs personnalisées
const categories = [
  { id: 1, name: 'Fruits', icon: <FaApple size={30} color="#ffffff" />, bgColor: 'bg-green' },
  { id: 2, name: 'Légumes', icon: <FaCarrot size={30} color="#ffffff" />, bgColor: 'bg-orange' },
  { id: 3, name: 'Céréales', icon: <FaSeedling size={30} color="#ffffff" />, bgColor: 'bg-yellow-btn' },
  { id: 4, name: 'Épices', icon: <FaPepperHot size={30} color="#ffffff" />, bgColor: 'bg-red' },
  { id: 5, name: 'Produits transformés', icon: <FaIndustry size={20} color="#ffffff" />, bgColor: 'bg-blue' },
];

const CategorieProduit = () => {
  // État pour la recherche et le filtrage
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fonction pour filtrer les produits en fonction du nom
  const filteredCategories = categories.filter((categorie) =>
    categorie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (categorie) => {
    // Afficher ou masquer les détails de la catégorie cliquée
    setSelectedCategory(selectedCategory === categorie ? null : categorie);
  };

  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-16">
      <div className="flex containerss gap-6 pb-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((categorie) => (
            <div
              key={categorie.id}
              className={`${categorie.bgColor} flex-none rounded-lg overflow-hidden w-60 h-24 flex items-center justify-center px-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-1xl`}
              onClick={() => handleCategoryClick(categorie)}
            >
              {/* Icône de la catégorie */}
              <div className="flex justify-center items-center text-white">
                {categorie.icon}
              </div>

              {/* Titre de la catégorie */}
              <h3 className="text-lg font-semibold text-white">{categorie.name}</h3>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Aucune catégorie trouvée pour cette recherche.</p>
        )}
      </div>

      {/* Affichage des détails de la catégorie sélectionnée */}
      {selectedCategory && (
        <div className="mt-8 text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-extrabold text-text-green mb-4">{selectedCategory.name}</h3>
          <p className="text-gray">
            Détails pour la catégorie {selectedCategory.name}. Vous pouvez ici afficher plus d'informations
            ou les produits associés à cette catégorie.
          </p>
        </div>
      )}
    </section>
  );
};

export default CategorieProduit;

