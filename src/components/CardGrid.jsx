import React, { useEffect, useState } from "react";
import apiService from "../services/apiService";  // Importation du service API
import TopSellingCards from "./TopSellingCards";
import NewProductsCards from "./NewProductsCards";
import WholesaleCards from "./WholesaleCards";
import HomeCarrouselPromo from "../components/promotion/HomeCarrouselPromo";

const CardGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour la gestion des erreurs

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Début du chargement
        const cleanedData = await apiService.fetchCards(); // Appel API via le service
        setData(cleanedData); // Mise à jour des données
      } catch (error) {
        setError(error.message); // Gestion des erreurs
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchData(); // Exécuter la récupération des données au montage
  }, []); // [] : uniquement au montage du composant

  // Gestion de l'état de chargement
  if (loading) {
    return <div>Chargement en cours ...</div>;
  }

  // Gestion des erreurs
  if (error) {
    return <div>Erreur: {error}</div>;
  }

  // Filtrer les données par catégorie
  const topSellingData = data.filter(card => card.category === "Produit le plus vendus");
  const newProductsData = data.filter(card => card.category === "Nouveaux produits");
  const wholesaleData = data.filter(card => card.category === "En gros");

  return (
    <div className="w-full">
      <br />
      <br />
      
      <TopSellingCards data={topSellingData} />
      <br />
      <WholesaleCards data={wholesaleData} />
      <br />
      <HomeCarrouselPromo />
      <br />
      <br />
      <NewProductsCards data={newProductsData} />
    </div>
  );
};

export default CardGrid;
