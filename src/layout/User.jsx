import React from 'react';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="bg-gray- text-white h-full">
      <div className="py-4 px-6">
        <h2 className="text-lg font-semibold mb-4">Tableau de Bord</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Vue d'ensemble</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Gestion des Produits</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Commandes</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Clients</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Statistiques</a>
          </li>
          {/* Ajoutez d'autres liens de la barre latérale au besoin */}
        </ul>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Vue d'ensemble</h2>
          {/* Contenu de la vue d'ensemble */}
          {/* Vous pouvez ajouter ici le contenu pour afficher une vue d'ensemble des données */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
