;


import React from 'react';

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row">
          <div className=" h-44 md:w-1/2 md:mr-6 mb-4 md:mb-0">
            <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1714220244/Projet%20Agroconnect/Default_Imagine_a_scene_where_an_African_female_farmer_works_i_1_1_wjtkmv.jpg" alt="Produit" className= " h-44 rounded-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Nom du Produit</h2>
            <p className="text-gray-700 mb-4">Description du produit</p>
            <div className="flex items-center mb-4">
              <span className="text-gray-700 font-bold mr-2">Prix :</span>
              <span className="text-gray-900">Prix du produit</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-gray-700 font-bold mr-2">Disponibilité :</span>
              <span className="text-green-500">En stock</span>
            </div>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">Ajouter au panier</button>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Caractéristiques du Produit</h3>
          <ul className="list-disc pl-4">
            <li>Caractéristique 1</li>
            <li>Caractéristique 2</li>
            <li>Caractéristique 3</li>
            {/* Ajoutez autant de caractéristiques que nécessaire */}
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Avis des Clients</h3>
          {/* Section des avis des clients */}
          <p className="text-gray-700">Aucun avis pour le moment.</p>
        </div>
        {/* Ajoutez d'autres sections comme les produits connexes, la description détaillée, etc. */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
